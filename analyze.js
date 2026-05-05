import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
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
      console.log(`Analyzing ${url}...`);
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const mimeType = response.headers.get('content-type') || 'image/jpeg';
      
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            parts: [
              { text: "Describe this image in 1 sentence. Specially, does it have an orange stand with a phone showing Instagram, or a ring light with a ukulele/guitar player?" },
              { inlineData: { data: buffer.toString('base64'), mimeType } }
            ]
          }
        ]
      });
      console.log(`${url}: ${result.text.substring(0, 150)}`);
    } catch (e) {
      console.log(`Failed on ${url}: ${e.message}`);
    }
  }
}
main();
