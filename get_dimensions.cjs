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
      
      image.resize({ w: 4, h: 4 });
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
      
      console.log(url.split('/').pop(), "Average Color:", `rgb(${r}, ${g}, ${b})`);
    } catch(e) {}
  }
}
run();
