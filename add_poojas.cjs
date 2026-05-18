const fs = require('fs');

const newPoojas = `
      <div class="pooja-card">
        <div class="pooja-img-container">
          <img src="images/pooja_shani_shanti.png" class="pooja-img" alt="Maha Mrityunjaya">
        </div>
        <div class="pooja-card-header">
          <div class="pooja-name">Maha Mrityunjaya</div>
          <div class="pooja-duration">⏱ 3-5 Days</div>
        </div>
        <div class="pooja-card-body">
          <div class="pooja-price">₹11,000 <span>onwards</span></div>
          <p class="pooja-benefit">Powerful chanting for longevity, severe illness recovery, and protection from untimely death.</p>
          <div class="pooja-tags">
            <span class="pooja-tag">Online</span>
            <span class="pooja-tag">Offline</span>
          </div>
          <button class="btn-book" onclick="window.location.href='pooja.html'">Book Now</button>
        </div>
      </div>
      <div class="pooja-card">
        <div class="pooja-img-container">
          <img src="images/pooja_mangal_dosh.png" class="pooja-img" alt="Chandal Dosh Puja">
        </div>
        <div class="pooja-card-header">
          <div class="pooja-name">Chandal Dosh Puja</div>
          <div class="pooja-duration">⏱ 2 Hours</div>
        </div>
        <div class="pooja-card-body">
          <div class="pooja-price">₹4,500 <span>onwards</span></div>
          <p class="pooja-benefit">Resolves Guru Chandal Dosh to bring clarity, career growth, and mental peace.</p>
          <div class="pooja-tags">
            <span class="pooja-tag">Online</span>
            <span class="pooja-tag">Offline</span>
          </div>
          <button class="btn-book" onclick="window.location.href='pooja.html'">Book Now</button>
        </div>
      </div>
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
          <button class="btn-book" onclick="window.location.href='pooja.html'">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</section>
`;

let html = fs.readFileSync('index.html', 'utf-8');
// Find the end of poojas-grid and replace it with our new poojas + the closing tags
if (html.includes('</section>\n\n<!-- TOURS -->')) {
  // We need to inject right before `    </div>\n  </div>\n</section>\n\n<!-- TOURS -->`
  let index = html.indexOf('    </div>\n  </div>\n</section>\n\n<!-- TOURS -->');
  if (index !== -1) {
      let before = html.substring(0, index);
      let after = html.substring(index + 32); // skip the `    </div>\n  </div>\n</section>\n`
      let newHtml = before + newPoojas + '\n<!-- TOURS -->' + after;
      fs.writeFileSync('index.html', newHtml);
      console.log('Successfully injected 3 new Poojas into index.html');
  }
}
