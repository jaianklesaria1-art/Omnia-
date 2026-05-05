const fs = require('fs');
const path = require('path');

const dir = './src/components';

// Background color matching the yellowish orange in the video / user's request.
const targetBgColor = 'bg-[#FBE8CA]'; 

const replacements = [
  { regex: /bg-\[#FDF4E3\]/g, replacement: targetBgColor },
  { regex: /bg-\[#F8EBD4\]/g, replacement: targetBgColor },
  { regex: /bg-\[#FDF4E3\]\/90/g, replacement: targetBgColor + '/90' },
  { regex: /\bbg-white\b/g, replacement: targetBgColor },
  
  // Make all text black
  { regex: /\btext-gray-200\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-300\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-400\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-500\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-600\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-700\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-800\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-gray-900\b/g, replacement: 'text-omnia-black' },
  { regex: /\btext-white\b/g, replacement: 'text-omnia-black' }, 
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  if (filePath.endsWith('Hero.tsx')) {
    // DO NOT change background in Hero as per request "do not change the hero section"
    content = content.replace(/\btext-white\b/g, 'text-omnia-black');
    content = content.replace(/\btext-gray-[0-9]+\b/g, 'text-omnia-black');
  } else {
    for (const { regex, replacement } of replacements) {
      content = content.replace(regex, replacement);
    }
  }

  // Red important words in bold
  content = content.replace(/text-omnia-red(\s|'|")([^>]*)>([^<]+)<\/span>/g, 'text-omnia-red font-bold$1$2>$3</span>');
  // Handle gradient text
  content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-omnia-red to-(red-[0-9]+)(\s|'|")([^>]*)>([^<]+)<\/span>/g, 'text-transparent bg-clip-text bg-gradient-to-r from-omnia-red to-$1 font-bold$2$3>$4</span>');


  // Restore button text whites where buttons have dark backgrounds:
  content = content.replace(/bg-omnia-black([^>]*)text-omnia-black/g, 'bg-omnia-black$1text-white');
  content = content.replace(/bg-omnia-red([^>]*)text-omnia-black/g, 'bg-omnia-red$1text-white');
  // Buttons with solid backgrounds typically need white text (e.g. contact submit)
  content = content.replace(/className="px-8 py-4 bg-omnia-black text-white hover:bg-omnia-red/g, 'className="px-8 py-4 bg-omnia-black text-white hover:bg-omnia-red'); // just to ensure logic holds
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

processDir(dir);
