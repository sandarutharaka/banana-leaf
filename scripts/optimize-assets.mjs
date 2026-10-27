import sharp from 'sharp';
import {mkdir,copyFile,writeFile} from 'node:fs/promises';
await mkdir('assets/originals',{recursive:true});
const assets=[['hero/banana-leaf-arrangement',1500,82],['products/whole-leaves',1000,80],['products/cut-leaves',1000,80],['products/bulk-leaves',1000,80],['gallery/leaf-detail',1400,82],['gallery/serving-scene',1200,82]];
const report=[];
for(const [name,width,quality]of assets){const source=`public/images/${name}.png`;await copyFile(source,`assets/originals/${name.replaceAll('/','-')}.png`);const info=await sharp(source).resize({width,withoutEnlargement:true}).webp({quality}).toFile(`public/images/${name}.webp`);report.push({name,...info});}
await copyFile('public/images/email/leaf-banner.png','assets/originals/email-leaf-banner.png');
await sharp('assets/originals/email-leaf-banner.png').resize(1200,360,{fit:'cover'}).png({palette:true,quality:85}).toFile('public/images/email/leaf-banner.png');
// Private/staging social composition; regenerate after owner approves the brand.
const og=Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#102c21"/><text x="65" y="140" font-family="Georgia" font-size="38" fill="#dce8aa">YOUR_BRAND · LOCAL PREVIEW</text><text x="65" y="280" font-family="Georgia" font-size="72" fill="#fffdf7">Fresh banana leaves</text><text x="65" y="365" font-family="Georgia" font-size="72" fill="#fffdf7">from Sri Lanka</text><text x="65" y="540" font-family="Arial" font-size="22" fill="#dce8aa">Naturally made. Thoughtfully supplied.</text></svg>');
const leaf=await sharp('public/images/products/whole-leaves.webp').resize(420,420,{fit:'contain',background:'#00000000'}).png().toBuffer();await sharp(og).composite([{input:leaf,left:770,top:180}]).jpeg({quality:86}).toFile('public/images/og.jpg');
await writeFile('docs/asset-sizes.json',JSON.stringify(report,null,2));console.log(report.map(x=>`${x.name}: ${Math.round(x.size/1024)} KB, ${x.width}×${x.height}`).join('\n'));
