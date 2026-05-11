const { Jimp } = require('jimp');

const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20195145.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20195136.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20194044.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193926.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193914.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193901.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193835.png'
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
