const fs = require('fs');

// Update style.css to support pooja images
let css = fs.readFileSync('style.css', 'utf-8');
if (!css.includes('.pooja-img-container')) {
  css = css.replace('.pooja-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(31,77,54,0.12); }',
    '.pooja-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(31,77,54,0.12); }\n  .pooja-img-container { height: 180px; overflow: hidden; }\n  .pooja-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }\n  .pooja-card:hover .pooja-img { transform: scale(1.05); }');
  fs.writeFileSync('style.css', css);
}

function updatePoojas(html) {
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Kaal Sarp Dosh</div>',
    '<div class="pooja-img-container"><img src="images/pooja_kaal_sarp.png" class="pooja-img" alt="Kaal Sarp Dosh"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Kaal Sarp Dosh</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Mangal Dosh Puja</div>',
    '<div class="pooja-img-container"><img src="images/pooja_mangal_dosh.png" class="pooja-img" alt="Mangal Dosh"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Mangal Dosh Puja</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Shani Shanti Puja</div>',
    '<div class="pooja-img-container"><img src="images/pooja_shani_shanti.png" class="pooja-img" alt="Shani Shanti"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Shani Shanti Puja</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Rudrabhishek</div>',
    '<div class="pooja-img-container"><img src="images/pooja_rudrabhishek.png" class="pooja-img" alt="Rudrabhishek"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Rudrabhishek</div>');
  
  // Also poojas in pooja.html have different names maybe? Let's check pooja.html specific ones
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Mahamrityunjaya Jaap</div>',
    '<div class="pooja-img-container"><img src="images/pooja_shani_shanti.png" class="pooja-img" alt="Mahamrityunjaya"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Mahamrityunjaya Jaap</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Navagraha Shanti</div>',
    '<div class="pooja-img-container"><img src="images/pooja_mangal_dosh.png" class="pooja-img" alt="Navagraha"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Navagraha Shanti</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Vastu Shanti Puja</div>',
    '<div class="pooja-img-container"><img src="images/pooja_kaal_sarp.png" class="pooja-img" alt="Vastu Shanti"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Vastu Shanti Puja</div>');
  html = html.replace('<div class="pooja-card-header">\n          <div class="pooja-name">Chandal Dosh Nivarana</div>',
    '<div class="pooja-img-container"><img src="images/pooja_rudrabhishek.png" class="pooja-img" alt="Chandal Dosh"></div>\n        <div class="pooja-card-header">\n          <div class="pooja-name">Chandal Dosh Nivarana</div>');
  return html;
}

function updateTours(html) {
  html = html.replace(/<div class="tour-img">([\s\S]*?)🛕\s*<\/div>/g, 
    `<div class="tour-img" style="background: url('images/tour_ujjain.png') center/cover;">$1</div>`);
  html = html.replace(/<div class="tour-img">([\s\S]*?)🗺️\s*<\/div>/g, 
    `<div class="tour-img" style="background: url('images/tour_84_mahadev.png') center/cover;">$1</div>`);
  html = html.replace(/<div class="tour-img">([\s\S]*?)🌊\s*<\/div>/g, 
    `<div class="tour-img" style="background: url('images/tour_omkareshwar.png') center/cover;">$1</div>`);
  html = html.replace(/<div class="tour-img">([\s\S]*?)✨\s*<\/div>/g, 
    `<div class="tour-img" style="background: url('images/tour_12_jyotirlinga.png') center/cover;">$1</div>`);
  return html;
}

const files = ['index.html', 'pooja.html', 'tours.html'];
files.forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf-8');
    html = updatePoojas(html);
    html = updateTours(html);
    fs.writeFileSync(file, html);
    console.log(`Updated ${file}`);
  }
});
