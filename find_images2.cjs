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
  for (let url of urls) {
    try {
      let image = await Jimp.read(url);
      
      image.resize({ w: 80, h: 40 });
      let output = `\n--- ${url.split('/').pop()} ---\n`;
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
      console.log(output);
    } catch(e) {}
  }
}
run();
