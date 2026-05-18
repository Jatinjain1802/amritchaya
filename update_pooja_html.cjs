const fs = require('fs');

const pitraDosh = `
      <div class="pooja-card">
        <div class="pooja-img-container">
          <img src="images/tour_omkareshwar.png" class="pooja-img" alt="Pitra Dosh Nivaran">
        </div>
        <div class="pooja-card-header">
          <div class="pooja-name">Pitra Dosh Nivaran</div>
          <div class="pooja-duration">⏱ 2.5 Hours</div>
        </div>
        <div class="pooja-card-body">
          <div class="pooja-price">₹5,500 <span>onwards</span></div>
          <p class="pooja-benefit">Performed at Siddhawad, Ujjain for the peace of ancestors and clearing family obstacles.</p>
          <div class="pooja-tags">
            <span class="pooja-tag">Offline</span>
          </div>
          <button class="btn-book" onclick="openBookingModal('Pitra Dosh Nivaran')">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</section>
`;

let html = fs.readFileSync('pooja.html', 'utf-8');

// Just append Pitra Dosh to the end of the grid
if (html.includes('    </div>\n  </div>\n</section>\n\n<!-- Modal -->')) {
  let index = html.indexOf('    </div>\n  </div>\n</section>\n\n<!-- Modal -->');
  if (index !== -1) {
      let before = html.substring(0, index);
      let after = html.substring(index + 32);
      let newHtml = before + pitraDosh + '\n<!-- Modal -->' + after;
      
      // Update Maha Mrityunjaya details in pooja.html if it exists
      newHtml = newHtml.replace(/<div class="pooja-name">Mahamrityunjaya Jaap<\/div>[\s\S]*?<div class="pooja-duration">.*?<\/div>/, '<div class="pooja-name">Maha Mrityunjaya</div>\n          <div class="pooja-duration">⏱ 3-5 Days</div>');
      newHtml = newHtml.replace(/<div class="pooja-price">₹11,000 <span>onwards<\/span><\/div>[\s\S]*?<p class="pooja-benefit">.*?<\/p>/, '<div class="pooja-price">₹11,000 <span>onwards</span></div>\n          <p class="pooja-benefit">Powerful chanting for longevity, severe illness recovery, and protection from untimely death.</p>');
      
      // Chandal Dosh is also there, let's update it
      newHtml = newHtml.replace(/<div class="pooja-name">Chandal Dosh Nivarana<\/div>[\s\S]*?<div class="pooja-duration">.*?<\/div>/, '<div class="pooja-name">Chandal Dosh Puja</div>\n          <div class="pooja-duration">⏱ 2 Hours</div>');
      newHtml = newHtml.replace(/<div class="pooja-price">₹4,500 <span>onwards<\/span><\/div>[\s\S]*?<p class="pooja-benefit">.*?<\/p>/, '<div class="pooja-price">₹4,500 <span>onwards</span></div>\n          <p class="pooja-benefit">Resolves Guru Chandal Dosh to bring clarity, career growth, and mental peace.</p>');

      fs.writeFileSync('pooja.html', newHtml);
      console.log('Successfully updated pooja.html');
  }
}
