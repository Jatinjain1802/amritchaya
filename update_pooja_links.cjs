const fs = require('fs');

function updateLinks(html, isIndex) {
  // We want to replace the onclick for the Book Now buttons of specific poojas
  const replacements = [
    { name: 'Kaal Sarp Dosh', id: 'kaal_sarp' },
    { name: 'Mangal Dosh Puja', id: 'mangal_dosh' },
    { name: 'Shani Shanti Puja', id: 'shani_shanti' },
    { name: 'Rudrabhishek', id: 'rudrabhishek' },
    { name: 'Maha Mrityunjaya', id: 'maha_mrityunjaya' },
    { name: 'Chandal Dosh Puja', id: 'chandal_dosh' },
    { name: 'Pitra Dosh Nivaran', id: 'pitra_dosh' }
  ];

  replacements.forEach(rep => {
    // In index.html the button currently has onclick="window.location.href='pooja.html'"
    // In pooja.html it might have openBookingModal(...)
    // To be safe, we regex match the whole card from pooja-name to the closing div of the card
    // and replace the button
    const regex = new RegExp(`(<div class="pooja-name">${rep.name}<\/div>[\\s\\S]*?)<button class="btn-book"[^>]*>Book Now<\/button>`, 'g');
    html = html.replace(regex, `$1<button class="btn-book" onclick="window.location.href='pooja_details.html?id=${rep.id}'">View Details & Book</button>`);
  });

  return html;
}

['index.html', 'pooja.html'].forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf-8');
    let newHtml = updateLinks(html, file === 'index.html');
    fs.writeFileSync(file, newHtml);
    console.log(`Updated links in ${file}`);
  }
});
