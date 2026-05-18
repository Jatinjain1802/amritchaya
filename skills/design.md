# Amrit Chaya Design System & Guidelines

This document outlines the core design principles, color palette, typography, and UI/UX guidelines for the Amrit Chaya website. It serves as a single source of truth for all frontend development (React, Tailwind CSS) to maintain a consistent and premium user experience.

## 1. Brand Identity & Vibe

The **Amrit Chaya** design should evoke feelings of:
- **Spiritual shelter & Peace** (आश्रय, शांति)
- **Divine protection & Trust** (सुरक्षा, विश्वास)
- **Nature & Seva** (प्रकृति, सेवा)

**Core Vibe:** A "Spiritual Digital Ashram". It should feel divine, premium, peaceful, trustworthy, and modern yet rooted in tradition.

---

## 2. Color Palette

The color palette is inspired by nature, spirituality, and temples. These colors should be configured in your CSS framework (e.g., `tailwind.config.js`).

| Color Name | Hex Code | Usage Scenario (Frontend / React) |
| :--- | :--- | :--- |
| **Forest Green** | `#1F4D36` | Primary background accents, footers, deep contrast elements representing nature. |
| **Sacred Gold** | `#C8A45D` | Primary buttons, borders, icons, text highlights. Gives a premium, divine look. |
| **Saffron** | `#D97706` | Secondary accents, hover states, important call-to-action (CTA) buttons. |
| **Ivory White** | `#FAF7F2` | Main background color for pages. Provides a soft, warm alternative to stark white. |
| **Temple Beige**| `#E8DDCC` | Secondary backgrounds, card backgrounds, section dividers. |

*Learning Note: When building with React and Tailwind, you will add these to `tailwind.config.js` under `theme.extend.colors` so you can use classes like `bg-forest-green` or `text-sacred-gold`.*

---

## 3. Typography

Using the right fonts is crucial for the "Premium Spiritual" feel. We use a combination of a Serif font for headings (traditional, elegant) and a Sans-Serif font for body text (clean, readable).

### Headings (H1, H2, H3)
- **Primary Options:** Cinzel, Playfair Display, or Cormorant Garamond.
- **Vibe:** Traditional, elegant, Sanskrit-inspired feel.

### Body Text (Paragraphs, Links, Small Text)
- **Primary Options:** Poppins, Inter, or Nunito Sans.
- **Vibe:** Modern, highly readable, clean.

*Learning Note: In a web project, you would import these from Google Fonts in your `index.css` or `layout.jsx` file and configure them as `font-heading` and `font-body` in your CSS setup.*

---

## 4. UI Component Styling (The Look & Feel)

When building React components, follow these stylistic rules to maintain the aesthetic:

### DO USE:
- **Minimal Spiritual Aesthetics:** Lots of negative space (whitespace/ivory space) to let the content breathe.
- **Subtle Glassmorphism:** Lightly frosted glass effects for overlays or floating navigation bars (`backdrop-blur` in CSS).
- **Golden Dividers:** Use thin `#C8A45D` lines to separate sections instead of standard gray borders.
- **Temple Textures:** Soft, barely visible mandala or stone textures in the background of certain sections.
- **Smooth Animations:** Use Framer Motion for gentle fade-ins, slow slides, and soft hover glows. No jarring or fast animations.
- **Rounded Corners & Glows:** Cards should have soft rounded corners (e.g., `rounded-xl`) and subtle golden hover glows.

### AVOID:
- **Neon Colors:** Completely ruins the peaceful vibe.
- **Dark Cyberpunk/Tech Look:** Avoid pitch black (`#000000`) backgrounds with harsh contrasts.
- **Cluttered UI:** Do not overload sections with too much text or too many buttons.
- **Generic Corporate Feel:** The site should feel like a spiritual journey, not a SaaS product.

---

## 5. UX (User Experience) Guidelines

### Trust Builders
Trust is the most important metric for this niche. The UI must include:
- Real, high-quality images of poojas, cows (Goshala), and temples.
- Transparent donation progress or impact stories.
- Customer/Devotee video & text testimonials.
- Pandit profiles (showing authenticity).

### Easy Communication
- **WhatsApp Integration:** Always have a floating WhatsApp button or prominent WhatsApp links for immediate human interaction and support.

---

## 6. Implementation Checklist for Developer

When you start coding this in React/Next.js:
1. [ ] Setup `tailwind.config.js` with the 5 primary colors.
2. [ ] Import the chosen Heading and Body fonts from Google Fonts.
3. [ ] Create a reusable `<Button>` component that uses the Sacred Gold or Saffron colors with a soft hover effect.
4. [ ] Create a reusable `<Card>` component with a soft Temple Beige background, subtle border, and rounded corners.
5. [ ] Implement a layout wrapper that applies the Ivory White background globally.
