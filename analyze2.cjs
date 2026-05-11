const { Jimp } = require('jimp');

const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg?updatedAt=1776498402099',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg?updatedAt=1776498402009',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg?updatedAt=1776498402026',
];

async function analyze() {
  const chars = " .:-=+*#%@".split("");
  
  for (const url of urls) {
    try {
      const image = await Jimp.read(url);
      image.resize({ w: 40, h: 20 });
      let output = `\nURL: ${url.split('events/')[1]}\n`;
      for (let y = 0; y < image.bitmap.height; y++) {
        let line = "";
        for (let x = 0; x < image.bitmap.width; x++) {
          const idx = (image.bitmap.width * y + x) << 2;
          const r = image.bitmap.data[idx + 0];
          const g = image.bitmap.data[idx + 1];
          const b = image.bitmap.data[idx + 2];
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          const charIdx = Math.floor((brightness / 255) * (chars.length - 1));
          line += chars[charIdx];
        }
        output += line + "\n";
      }
      console.log(output);
    } catch(e) {
      console.error("Error reading", url, e.message);
    }
  }
}

analyze();
