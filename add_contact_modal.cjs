const fs = require('fs');

// 1. Append CSS to style.css
const modalCSS = `
  /* CONTACT MODAL */
  .contact-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 9999; align-items: center; justify-content: center; }
  .contact-modal-content { background: var(--ivory); padding: 3rem; border-radius: 4px; max-width: 500px; width: 90%; position: relative; border: 2px solid var(--gold); box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
  .close-modal-btn { position: absolute; top: 1rem; right: 1rem; cursor: pointer; font-size: 1.5rem; color: var(--forest); background: none; border: none; }
  .close-modal-btn:hover { color: var(--gold); }
  .contact-form-group { margin-bottom: 1.25rem; text-align: left; }
  .contact-form-group label { display: block; font-size: 0.8rem; margin-bottom: 0.4rem; color: var(--forest); font-weight: 500; }
  .contact-form-group input, .contact-form-group textarea { width: 100%; padding: 0.75rem; border: 1px solid rgba(200,164,93,0.5); border-radius: 2px; background: rgba(250,247,242,0.5); font-family: 'Poppins', sans-serif; font-size: 0.85rem; }
  .contact-form-group input:focus, .contact-form-group textarea:focus { outline: none; border-color: var(--gold); background: var(--ivory); }
  .contact-form-group textarea { resize: vertical; min-height: 100px; }
`;

let css = fs.readFileSync('style.css', 'utf-8');
if (!css.includes('.contact-modal')) {
  fs.appendFileSync('style.css', '\n' + modalCSS);
  console.log('Appended CSS to style.css');
}

// 2. Add Modal HTML and update footer link in index.html
const modalHTML = `
<!-- Contact Modal -->
<div id="contactModal" class="contact-modal">
  <div class="contact-modal-content">
    <button class="close-modal-btn" onclick="closeContactModal()">×</button>
    <div style="text-align: center; margin-bottom: 2rem;">
      <h3 style="font-family: 'Cinzel', serif; color: var(--forest); font-size: 1.5rem;">Quick Contact</h3>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Drop us a message and our team will respond shortly.</p>
    </div>
    <form onsubmit="event.preventDefault(); alert('Message sent successfully! We will get back to you soon.'); closeContactModal();">
      <div class="contact-form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required>
      </div>
      <div class="contact-form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="+91 XXXXX XXXXX" required>
      </div>
      <div class="contact-form-group">
        <label>Your Message</label>
        <textarea placeholder="How can we help you?" required></textarea>
      </div>
      <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem; padding: 1rem;">Send Message</button>
    </form>
  </div>
</div>

<script>
  function openContactModal() {
    document.getElementById('contactModal').style.display = 'flex';
  }
  function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  // Close on outside click
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (e.target == modal) {
      closeContactModal();
    }
  });
</script>
</body>`;

let html = fs.readFileSync('index.html', 'utf-8');
if (!html.includes('id="contactModal"')) {
  // Update footer link
  html = html.replace(
    /<li><a href="#" style="color: var\(--gold\); font-size: 0.8rem;">💬 WhatsApp Us<\/a><\/li>/,
    `<li><a href="#" style="color: var(--gold); font-size: 0.8rem;">💬 WhatsApp Us</a></li>\n          <li><a href="javascript:void(0)" onclick="openContactModal()" style="color: var(--gold); font-size: 0.8rem; margin-top: 0.5rem; display: inline-block;">✉️ Quick Contact Form</a></li>`
  );
  
  // Inject modal before closing body tag
  html = html.replace('</body>', modalHTML);
  fs.writeFileSync('index.html', html);
  console.log('Updated index.html with contact modal');
}
