import {randomUUID} from 'node:crypto';
import type {Claim,RequestRecord,RequestStore} from './types';
// Explicitly for mock mode and tests. Never selected in live mode.
export class MemoryStore implements RequestStore{
 records=new Map<string,{record:RequestRecord;token?:string;lockedUntil:number}>();counters=new Map<string,{count:number;expires:number;ids:Set<string>}>();
 constructor(private now:()=>number=Date.now){}
 async claim(id:string,candidate:RequestRecord):Promise<Claim>{const existing=this.records.get(id);if(existing){if(this.now()-existing.record.createdAt>=23*3600_000)return {kind:'expired'};if(existing.record.hash!==candidate.hash)return {kind:'conflict'};if(existing.token&&existing.lockedUntil>this.now())return {kind:'in_progress'}}const token=randomUUID();const record=structuredClone(existing?.record||candidate);this.records.set(id,{record,token,lockedUntil:this.now()+60_000});return {kind:'acquired',record:structuredClone(record),token}}
 async save(id:string,token:string,record:RequestRecord){const current=this.records.get(id);if(!current||current.token!==token||current.lockedUntil<=this.now())throw new Error('LOCK_LOST');current.record=structuredClone(record)}
 async release(id:string,token:string){const current=this.records.get(id);if(current?.token===token){current.token=undefined;current.lockedUntil=0}for(const [key,value]of this.records)if(this.now()-value.record.createdAt>=24*3600_000)this.records.delete(key);for(const [key,value]of this.counters)if(value.expires<=this.now())this.counters.delete(key)}
 async attempt(key:string,limit:number,seconds:number){let c=this.counters.get(key);if(!c||c.expires<=this.now()){c={count:0,expires:this.now()+seconds*1000,ids:new Set()};this.counters.set(key,c)}c.count++;return c.count<=limit}
 async reserve(key:string,id:string,limit:number,seconds:number){let c=this.counters.get(key);if(!c||c.expires<=this.now()){c={count:0,expires:this.now()+seconds*1000,ids:new Set()};this.counters.set(key,c)}if(c.ids.has(id))return true;if(c.count>=limit)return false;c.count++;c.ids.add(id);return true}
}
