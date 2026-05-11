const Tesseract = require('tesseract.js');

const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20195145.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20195136.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20194044.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193926.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193914.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193901.png',
  'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193835.png'
];

async function run() {
  for (const url of urls) {
    try {
      console.log('Processing:', url.split('events/')[1]);
      const { data: { text } } = await Tesseract.recognize(
        url,
        'eng',
        { logger: m => {} }
      );
      console.log('Text:', text.substring(0, 100).replace(/\n/g, ' '));
      console.log('---');
    } catch(e) {
      console.error(e);
    }
  }
}
run();
