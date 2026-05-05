import Tesseract from 'tesseract.js';
import fs from 'fs';

const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh6.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh4.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh3.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh2.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg',
  'https://ik.imagekit.io/jai777/Dharmik/events/DH10.jpeg'
];

async function main() {
  for (const url of urls) {
    try {
      console.log(`Analyzing ${url}...`)
      // download to buffer
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const { data: { text } } = await Tesseract.recognize(
        buffer,
        'eng',
        { logger: m => {} }
      );
      if (text.toLowerCase().includes('post') || text.toLowerCase().includes('follow') || text.length > 50) {
        console.log(`FOUND TEXT IN ${url}:\n`, text.substring(0, 100));
      }
    } catch(e) {
      console.error(`Error with ${url}: ${e.message}`);
    }
  }
}

main();
