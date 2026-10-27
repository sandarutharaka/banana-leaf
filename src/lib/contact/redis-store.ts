import 'server-only';
import {randomUUID} from 'node:crypto';
import {Redis} from '@upstash/redis';
import type {Claim,RequestRecord,RequestStore} from './types';
// All read/modify/write operations are single Redis Lua transactions.
const claimScript=`
local raw=redis.call('GET',KEYS[1])
local candidate=cjson.decode(ARGV[1])
local now=tonumber(ARGV[2])
if raw then
 local old=cjson.decode(raw)
 if now-old.createdAt >= 82800000 then return {'expired'} end
 if old.hash ~= candidate.hash then return {'conflict'} end
 if redis.call('EXISTS',KEYS[2]) == 1 then return {'in_progress'} end
else
 raw=ARGV[1]
 redis.call('SET',KEYS[1],raw,'PX',86400000)
end
redis.call('SET',KEYS[2],ARGV[3],'PX',60000)
return {'acquired',raw}
`;
const saveScript=`if redis.call('GET',KEYS[2]) ~= ARGV[1] then return 0 end
local remaining=redis.call('PTTL',KEYS[1])
if remaining <= 0 then return 0 end
redis.call('SET',KEYS[1],ARGV[2],'PX',remaining)
return 1`;
const releaseScript=`if redis.call('GET',KEYS[1]) == ARGV[1] then return redis.call('DEL',KEYS[1]) end return 0`;
const attemptScript=`local count=redis.call('INCR',KEYS[1]) if count == 1 then redis.call('EXPIRE',KEYS[1],ARGV[2]) end if count <= tonumber(ARGV[1]) then return 1 end return 0`;
const reserveScript=`if redis.call('SISMEMBER',KEYS[1],ARGV[1]) == 1 then return 1 end
if redis.call('SCARD',KEYS[1]) >= tonumber(ARGV[2]) then return 0 end
local count=redis.call('SADD',KEYS[1],ARGV[1])
if redis.call('TTL',KEYS[1]) < 0 then redis.call('EXPIRE',KEYS[1],ARGV[3]) end
return 1`;
export class RedisStore implements RequestStore{
 constructor(private redis:Redis){}
 async claim(id:string,record:RequestRecord):Promise<Claim>{const token=randomUUID();const result=await this.redis.eval<[string,number,string],[string,string?]>(claimScript,[`leaf:request:${id}`,`leaf:lock:${id}`],[JSON.stringify(record),Date.now(),token]);if(result[0]==='acquired')return {kind:'acquired',record:JSON.parse(result[1]!),token};return {kind:result[0] as 'expired'|'conflict'|'in_progress'}}
 async save(id:string,token:string,record:RequestRecord){const saved=await this.redis.eval<unknown[],number>(saveScript,[`leaf:request:${id}`,`leaf:lock:${id}`],[token,JSON.stringify(record)]);if(saved!==1)throw new Error('LOCK_LOST')}
 async release(id:string,token:string){await this.redis.eval(releaseScript,[`leaf:lock:${id}`],[token])}
 async attempt(key:string,limit:number,seconds:number){return await this.redis.eval<unknown[],number>(attemptScript,[`leaf:rate:${key}`],[limit,seconds])===1}
 async reserve(key:string,id:string,limit:number,seconds:number){return await this.redis.eval<unknown[],number>(reserveScript,[`leaf:quota:${key}`],[id,limit,seconds])===1}
}

