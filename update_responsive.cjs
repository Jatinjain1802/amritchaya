const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf-8');

const target = `  /* Responsive mobile tweaks */
  @media (max-width: 900px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    section { padding: 4rem 1.5rem; }
    .about-grid, .goshala-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .services-grid { grid-template-columns: repeat(2,1fr); }
    .poojas-grid { grid-template-columns: repeat(2,1fr); }
    .tours-grid { grid-template-columns: 1fr; }
    .testimonials-grid { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
    .donation-stats { gap: 2rem; }
    .goshala-donate-cards { grid-template-columns: 1fr; }
  }`;

const replacement = `  /* Tablet Responsive */
  @media (max-width: 900px) {
    nav { padding: 1rem 1.5rem; flex-wrap: wrap; gap: 1rem; }
    .nav-logo { flex: 1; min-width: max-content; }
    .nav-links { display: flex; width: 100%; overflow-x: auto; padding-bottom: 0.5rem; -webkit-overflow-scrolling: touch; gap: 1.5rem; }
    .nav-links li { white-space: nowrap; }
    section { padding: 4rem 1.5rem; }
    .about-grid, .goshala-content { grid-template-columns: 1fr; gap: 2.5rem; }
    .services-grid, .poojas-grid { grid-template-columns: repeat(2, 1fr); }
    .tours-grid, .testimonials-grid { grid-template-columns: 1fr; }
    .tour-card { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 2rem; }
    .donation-stats { gap: 2rem; }
    .goshala-donate-cards { grid-template-columns: 1fr; }
  }

  /* Mobile Responsive */
  @media (max-width: 600px) {
    nav { padding: 0.75rem 1rem; }
    .services-grid, .poojas-grid { grid-template-columns: 1fr; }
    .footer-top { grid-template-columns: 1fr; text-align: center; }
    .footer-brand, .footer-links { align-items: center; }
    .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    .hero-title { font-size: 2.2rem; }
    .hero-subtitle { font-size: 1.2rem; }
    .hero-tagline { font-size: 1rem; }
    .section-title { font-size: 1.8rem; }
    .donation-stats { flex-direction: column; align-items: center; gap: 3rem; }
    .nav-cta { display: none; }
    .contact-modal-content, .booking-modal-content { padding: 2rem 1.5rem; }
  }`;

if (css.includes('/* Responsive mobile tweaks */')) {
  const newCss = css.replace(target, replacement);
  fs.writeFileSync('style.css', newCss);
  console.log('Successfully updated style.css with comprehensive responsive breakpoints!');
} else {
  console.log('Target string not found in style.css');
}
