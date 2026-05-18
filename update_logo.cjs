const fs = require('fs');

const svgRegex = /<svg class="nav-logo-icon"[\s\S]*?<\/svg>/g;
const imgReplacement = '<img src="images/logo.png" class="nav-logo-icon" alt="Amrit Chaya Logo" style="object-fit: contain; border-radius: 50%;">';

const htmlFiles = [
  'index.html',
  'pooja.html',
  'tours.html',
  'goshala.html',
  'about.html',
  'gallery.html',
  'blogs.html',
  'contact.html',
  'pooja_details.html',
  'donate.html'
];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf-8');
    
    // First, let's fix the nav logo
    html = html.replace(svgRegex, imgReplacement);
    
    fs.writeFileSync(file, html);
    console.log(`Updated logo in ${file}`);
  }
});
