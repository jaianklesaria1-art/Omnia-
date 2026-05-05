const fs = require('fs');

async function main() {
  const { Jimp } = await import('jimp'); 
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
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const image = await Jimp.read(buffer);
      
      let sumR = 0, sumG = 0, sumB = 0, count = 0;
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        sumR += this.bitmap.data[idx + 0];
        sumG += this.bitmap.data[idx + 1];
        sumB += this.bitmap.data[idx + 2];
        count++;
      });
      const avgR = Math.round(sumR / count);
      const avgG = Math.round(sumG / count);
      const avgB = Math.round(sumB / count);
      console.log(`${url}: RGB(${avgR}, ${avgG}, ${avgB}) w=${image.bitmap.width} h=${image.bitmap.height}`);
    } catch (e) {
      console.log(`Failed on ${url}: ${e.message}`);
    }
  }
}
main();
