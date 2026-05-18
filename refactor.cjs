const fs = require('fs');
const path = require('path');

// Read the existing index.html file
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Find the <style> tag content
const styleStart = html.indexOf('<style>');
const styleEnd = html.indexOf('</style>') + 8; // length of </style>

if (styleStart !== -1 && styleEnd !== -1) {
  // Extract CSS
  const cssContent = html.substring(styleStart + 7, styleEnd - 8).trim();
  
  // Write it to style.css
  fs.writeFileSync(path.join(__dirname, 'style.css'), cssContent);
  console.log('✅ Extracted CSS into style.css');

  // Replace <style> block in index.html with an external link
  const linkTag = '<link rel="stylesheet" href="style.css">';
  html = html.substring(0, styleStart) + linkTag + html.substring(styleEnd);
  
  // Update index.html
  fs.writeFileSync(indexPath, html);
  console.log('✅ Updated index.html to use external style.css');
} else {
  console.log('⚠️ Could not find <style> tags.');
}
