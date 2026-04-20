import fetch from 'node-fetch';

async function checkUrl() {
  const cases = [
    "https://ik.imagekit.io/jai777/Dharmik/events/Eve3.jpeg?updatedAt=1776271832260&tr=w-800",
    "https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg?updatedAt=1776498402048&tr=w-800",
    "https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg?updatedAt=1776498402003&tr=w-800",
  ];

  for (const url of cases) {
    const res = await fetch(url);
    if (!res.ok) console.log(url, res.status, await res.text());
    else console.log(url, res.status)
  }
}

checkUrl();
