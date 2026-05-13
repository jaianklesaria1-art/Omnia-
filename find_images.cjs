const Tesseract = require('tesseract.js');
const { Jimp } = require('jimp');

const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh6.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh4.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/Eve7.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/Eve5.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/Eve4.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/Eve3.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/Eve2.jpeg'
];

async function run() {
  for (const url of urls) {
    try {
      console.log('Processing:', url);
      const { data: { text } } = await Tesseract.recognize(
        url,
        'eng',
        { logger: m => {} }
      );
      if (text.replace(/\n/g, '').trim()) {
        console.log('Text:', text.substring(0, 100).replace(/\n/g, ' '));
        // print image ascii if text is short
        if (text.length < 50) {
            const image = await Jimp.read(url);
            image.resize({ w: 40, h: 20 });
            let output = "";
            const chars = " .:-=+*#%@".split("");
            for (let y = 0; y < image.bitmap.height; y++) {
              let line = "";
              for (let x = 0; x < image.bitmap.width; x++) {
                const idx = (image.bitmap.width * y + x) << 2;
                const r2 = image.bitmap.data[idx + 0];
                const g2 = image.bitmap.data[idx + 1];
                const b2 = image.bitmap.data[idx + 2];
                const brightness = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;
                const charIdx = Math.floor((brightness / 255) * (chars.length - 1));
                line += chars[charIdx];
              }
              output += line + "\n";
            }
            console.log("Image ASCII:\n" + output);
        }
      } else {
        const image = await Jimp.read(url);
        image.resize({ w: 40, h: 20 });
        let r = 0, g = 0, b = 0;
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
          r += this.bitmap.data[idx + 0];
          g += this.bitmap.data[idx + 1];
          b += this.bitmap.data[idx + 2];
        });
        const totalPixels = image.bitmap.width * image.bitmap.height;
        r = Math.floor(r / totalPixels);
        g = Math.floor(g / totalPixels);
        b = Math.floor(b / totalPixels);
        console.log(`Average Color: rgb(${r}, ${g}, ${b})`);
        
        let output = "";
        const chars = " .:-=+*#%@".split("");
        for (let y = 0; y < image.bitmap.height; y++) {
          let line = "";
          for (let x = 0; x < image.bitmap.width; x++) {
            const idx = (image.bitmap.width * y + x) << 2;
            const r2 = image.bitmap.data[idx + 0];
            const g2 = image.bitmap.data[idx + 1];
            const b2 = image.bitmap.data[idx + 2];
            const brightness = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;
            const charIdx = Math.floor((brightness / 255) * (chars.length - 1));
            line += chars[charIdx];
          }
          output += line + "\n";
        }
        console.log("Image ASCII:\n" + output);
      }
      console.log('---');
    } catch(e) {
      console.error(e);
    }
  }
}
run();
