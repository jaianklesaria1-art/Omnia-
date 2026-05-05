const urls = [
  'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg?updatedAt=1776498402099',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg?updatedAt=1776498402009',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg?updatedAt=1776498402026',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh6.jpeg?updatedAt=1776498402026',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg?updatedAt=1776498402048',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh4.jpeg?updatedAt=1776498402039',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh3.jpeg?updatedAt=1776498402035',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh2.jpeg?updatedAt=1776498401967',
  'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg?updatedAt=1776498402003',
  'https://ik.imagekit.io/jai777/Dharmik/events/DH10.jpeg?updatedAt=1776498403291'
];

async function main() {
  for (const url of urls) {
    const response = await fetch(url.split('?')[0]);
    console.log(`${url.split('?')[0]}: ${response.headers.get('content-length')}`);
  }
}
main();
