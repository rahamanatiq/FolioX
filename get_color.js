import { Jimp } from 'jimp';

async function analyzeColors() {
    const image = await Jimp.read('./src/assets/hero.png');
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    const top = image.getPixelColor(10, 10);
    const bottom = image.getPixelColor(10, height - 10);
    const bottomCenter = image.getPixelColor(width / 2, height - 10);

    const topHex = '#' + top.toString(16).slice(0, 6);
    const bottomHex = '#' + bottom.toString(16).slice(0, 6);
    const bottomCenterHex = '#' + bottomCenter.toString(16).slice(0, 6);

    console.log('Top Color:', topHex);
    console.log('Bottom Left Color:', bottomHex);
    console.log('Bottom Center Color:', bottomCenterHex);
}

analyzeColors().catch(console.error);
