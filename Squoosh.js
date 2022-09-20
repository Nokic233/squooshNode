import { ImagePool } from '@squoosh/lib';
import { cpus } from 'os';
import fs from 'fs';

async function start() {
    const imagePool = new ImagePool(cpus().length);

    const file = fs.readFileSync('./img/2.png');
    console.log(file);
    const image = imagePool.ingestImage(file);


    const encodeOptions = {
        mozjpeg: {
            quality: 90,
        },
    };

    await image.encode(encodeOptions)

    const result = await image.encodedWith.mozjpeg

    fs.writeFileSync('./imgAfter/2.jpg', result.binary);
    console.log('图片压缩完成！');
}

start()