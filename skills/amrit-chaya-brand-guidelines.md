# अमृत छाया — Brand Guidelines
### Amrit Chaya · Ujjain's Sacred Travel Companion

---

## 1. Brand Identity

**Brand Name:** अमृत छाया (Amrit Chaya)  
**Meaning:** *Amrit* = Nectar / Divine Elixir · *Chaya* = Shade / Shadow  
**Tagline:** *"Your Sacred Companion in the City of Mahakal"*  
**Secondary Tagline:** *"हर हर महादेव" (Har Har Mahadev)*  
**Brand Type:** Spiritual Tourism & Pilgrimage Platform  
**Location:** Ujjain, Madhya Pradesh, India  
**Services:** Pooja Booking · Temple Visits · Hotel Booking (Direct) · Sacred Products

---

## 2. Logo

### Primary Logo
The **Banyan Tree (Vat Vriksha)** — sacred in Hindu tradition, symbolic of eternal life, wisdom, and divine shelter (chaya). The logo uses a minimalist flat-fill banyan silhouette with aerial roots grounded in the earth.

```
Symbol:  Banyan Tree (SVG, single-color flat)
Text:    अमृत छाया  (Devanagari, Tiro Devanagari Sanskrit)
         AMRIT CHAYA  (Latin, Jost, wide letter-spacing)
Layout:  Stacked — symbol above, text below
```

### Logo Variants

| Variant | Usage | Background |
|--------|-------|------------|
| Primary (Dark Green on Cream) | Website, print, documents | Light / Cream |
| Reversed (Gold on Deep Green) | Dark backgrounds, hero sections | Dark Green / Black |
| Monochrome (Single color) | Stamps, embossing, B&W print | Any |
| Icon Only | App icon, favicon, social avatar | Any |

### Logo Clear Space
Maintain minimum clear space of **1× the height of the "A" in AMRIT** on all four sides of the logo.

### Logo — DO NOT
- ❌ Stretch or distort the logo
- ❌ Add drop shadows or gradients to the symbol
- ❌ Use on backgrounds with low contrast
- ❌ Change the font
- ❌ Rotate or flip the logo
- ❌ Use the Latin text without the Devanagari

---

## 3. Brand Colors

### Primary Palette

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Deep Forest** | `#1a3a1a` | 26, 58, 26 | Hero backgrounds, footer |
| **Sacred Green** | `#2d5a27` | 45, 90, 39 | Primary brand color, navbar, buttons |
| **Temple Green** | `#3d7a35` | 61, 122, 53 | Hover states, accents |
| **Leaf Green** | `#5a9e50` | 90, 158, 80 | Highlight text, icons |
| **Pale Foliage** | `#a8d5a2` | 168, 213, 162 | Subtext on dark backgrounds |

### Accent / Gold Palette

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Temple Gold** | `#c8973a` | 200, 151, 58 | Primary accent, badges, CTAs, dividers |
| **Warm Gold** | `#e0b060` | 224, 176, 96 | Hover states, gradient end |
| **Saffron** | `#d4702a` | 212, 112, 42 | Festive contexts, alerts |

### Neutral / Background Palette

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Sacred Cream** | `#f5f0e8` | 245, 240, 232 | Page background, card backgrounds |
| **Dark Cream** | `#ede5d4` | 237, 229, 212 | Section alternates, borders |
| **Text Dark** | `#1a2a1a` | 26, 42, 26 | Primary body text |
| **Text Mid** | `#3a5a38` | 58, 90, 56 | Secondary text, subheadings |

### Color Usage Rules

- **Never** use pure white (`#ffffff`) as a background — always use Sacred Cream
- **Never** use pure black — use Deep Forest for dark contexts
- The **Gold accent** should cover no more than 15–20% of any design surface
- **Sacred Green + Temple Gold** is the core brand pairing — protect this combination
- Gradient: `linear-gradient(135deg, #c8973a, #e0b060)` — use only for primary CTAs

---

## 4. Typography

### Font Stack

| Role | Font | Style | Use Case |
|------|------|-------|----------|
| **Display / Hero** | Tiro Devanagari Sanskrit | Regular, Italic | Brand name in Devanagari, major headings |
| **Serif Heading** | Playfair Display | 400, 600, 700 | Section headings, card titles, hotel names |
| **Serif Subtext** | Cormorant Garamond | 300 Italic, 400 Italic | Descriptions, taglines, pull quotes |
| **Body / UI** | Jost | 300, 400, 500, 600 | Navigation, labels, body text, buttons |

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Tiro+Devanagari+Sanskrit:ital@0;1&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');
```

### Type Scale

| Level | Font | Size | Weight | Letter Spacing |
|-------|------|------|--------|----------------|
| Hero H1 (Hindi) | Tiro Devanagari | 4–6rem (clamp) | 400 | Default |
| Hero H2 (Latin) | Cormorant Garamond | 1.5–2rem | 300 | 0.2em |
| Section Heading | Playfair Display | 2–2.8rem | 400–600 | Default |
| Card Title | Playfair Display | 1.1–1.3rem | 400 | Default |
| Body Text | Jost | 0.9rem | 400 | Default |
| Label / Tag | Jost | 0.65–0.75rem | 400–600 | 0.1–0.2em (UPPERCASE) |
| Price / Number | Playfair Display | 1.1–1.25rem | 600 | Default |
| CTA Button | Jost | 0.78–0.85rem | 600 | 0.1em (UPPERCASE) |

### Typography Rules
- Body line-height: **1.7–1.8** for Jost, **1.7–1.8** for Cormorant
- Headings line-height: **1.1–1.3**
- Labels & nav links: always **UPPERCASE** with wide letter-spacing
- Pull quotes / descriptions: Cormorant Garamond **Italic** preferred
- Devanagari text should always be paired with its Latin equivalent below it

---

## 5. Spacing & Layout

### Grid System
- Max content width: **1200px**
- Page gutter: **2rem (32px)** on all sides
- Section vertical padding: **6rem (96px)** top & bottom
- Card gap: **1.2rem – 1.5rem**

### Section Alternation
Sections alternate between these backgrounds to create rhythm:

```
Hero          → Deep Forest (#1a3a1a)
Marquee       → Sacred Green (#2d5a27)
Pooja         → Sacred Cream (#f5f0e8)
Temples       → Deep Forest (#1a3a1a)
Why Us        → Sacred Green (#2d5a27)
Hotels        → Dark Cream (#ede5d4)
Products      → Sacred Cream (#f5f0e8)
Testimonials  → Dark Cream (#ede5d4)
Contact       → Deep Forest (#1a3a1a)
Footer        → Darkest Green (#0f210f)
```

---

## 6. UI Components

### Buttons

**Primary CTA**
```css
background: linear-gradient(135deg, #c8973a, #e0b060);
color: #1a2a1a;
font-family: 'Jost', sans-serif;
font-weight: 600;
font-size: 0.82rem;
letter-spacing: 0.12em;
text-transform: uppercase;
padding: 0.85rem 2.2rem;
border-radius: 2px;
box-shadow: 0 4px 24px rgba(200, 151, 58, 0.4);
```

**Secondary / Ghost**
```css
border: 1px solid rgba(200, 151, 58, 0.5);
color: #c8973a;
background: transparent;
/* Same font, size, padding as primary */
```

**Dark / Utility**
```css
background: #2d5a27;
color: #ffffff;
border-radius: 2px;
```

### Cards

**Light Card (on cream background)**
```css
background: #ffffff;
border: 1px solid rgba(45, 90, 39, 0.1);
border-radius: 4px;
padding: 2rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
transition: transform 0.3s, box-shadow 0.3s;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 8px 32px rgba(26, 58, 26, 0.12);
```

**Dark Card (on deep green background)**
```css
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(200, 151, 58, 0.2);
border-radius: 4px;
backdrop-filter: blur(8px);
padding: 2rem;

/* Hover */
border-color: rgba(200, 151, 58, 0.5);
transform: translateY(-4px);
```

### Badges / Tags
```css
/* Gold badge */
background: #c8973a;
color: #1a2a1a;
font-family: 'Jost';
font-size: 0.6rem;
font-weight: 700;
letter-spacing: 0.05em;
text-transform: uppercase;
padding: 0.2rem 0.55rem;
border-radius: 2px;

/* Ghost tag (on dark background) */
background: rgba(200, 151, 58, 0.15);
color: #c8973a;
border: 1px solid rgba(200, 151, 58, 0.3);
border-radius: 20px;
padding: 0.25rem 0.7rem;
```

### Ornamental Divider
Used between section heading and subheading:
```css
/* HTML structure: line — ✦ — line */
.divider-line {
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #c8973a); /* reverse for right side */
}
.divider-icon {
  color: #c8973a;
  font-size: 0.9rem; /* ✦ character */
}
```

---

## 7. Iconography & Symbols

### Sacred Symbols Used
| Symbol | Unicode | Meaning / Use |
|--------|---------|---------------|
| ✦ | U+2726 | Ornamental divider, section marker |
| 🪔 | Diya | Pooja / Aarti items |
| 📿 | Mala | Spiritual products, rituals |
| 🙏 | Namaste | Trust, support, cultural greeting |
| 🌸 | Flower | Worship, purity |
| ⭐ | Star | Navgrah, premium quality |

### Illustration Style
- **Flat, single-color silhouettes** (no gradients in illustrations)
- Banyan tree logo is the master illustration style
- Lotus and mandala motifs used as background decorative elements only
- Opacity of decorative motifs: **5–12%** (never dominant)

---

## 8. Motion & Animation

### Core Animations

```css
/* Fade in from bottom — used for all page-load reveals */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Floating — used for logo, scroll cue, WhatsApp button */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

/* Gold shimmer — used for hero text accent */
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Marquee — used for temple name ticker */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Timing Rules
- Page-load reveals: staggered `animation-delay` in 0.1–0.2s increments
- Hover transitions: **0.2–0.3s ease**
- Float animation: **3–4s ease-in-out infinite**
- Marquee speed: **22–25s linear infinite**
- Never use animations faster than **0.15s** (feels jarring)

---

## 9. Photography & Imagery Guidelines

*(For when real photos are added)*

### Style
- **Golden hour** and **dawn** photography preferred (matches spiritual early-morning context)
- **Warm, slightly desaturated** tones — not oversaturated travel photos
- People in **traditional attire** (sarees, dhotis) prioritised over western clothing
- **No stock photo aesthetic** — candid, documentary-style preferred

### Overlay Treatment
When using photos as section backgrounds:
```css
/* Apply dark overlay to maintain text readability */
background: linear-gradient(
  to bottom,
  rgba(26, 58, 26, 0.7),
  rgba(26, 58, 26, 0.5)
);
```

### Forbidden
- ❌ Overly bright, filter-heavy "Instagram travel" photos
- ❌ Photos with visible brand logos of competitors
- ❌ Stock photos with obviously western subjects
- ❌ Low-resolution images (minimum 1200px wide for full-bleed)

---

## 10. Voice & Tone

### Brand Personality
| Trait | Description |
|-------|-------------|
| **Sacred** | Respectful of tradition, rituals, and Hindu culture |
| **Welcoming** | Warm hospitality — every pilgrim is a guest |
| **Trustworthy** | No hidden fees, direct bookings, authentic pandits |
| **Knowledgeable** | Deep local expertise about Ujjain |
| **Calm** | Never pushy or salesy — spiritual context demands peace |

### Writing Style

**DO:**
- Use respectful, dignified language
- Include Sanskrit/Hindi terms with English translations
- Reference the spiritual significance of places and rituals
- Address the reader as a pilgrim, not just a customer

**DON'T:**
- ❌ Use aggressive sales language ("Limited time! Buy now!")
- ❌ Use casual slang in formal contexts
- ❌ Ignore the spiritual dimension of what's being offered
- ❌ Overpromise or exaggerate claims

### Sample Microcopy

| Context | Copy |
|---------|------|
| Primary CTA | "Book a Pooja" / "Book Now" |
| Secondary CTA | "Explore Temples" / "View Timings" |
| Trust badge | "No Third-Party Fees · Direct Bookings" |
| Greeting | "Jai Mahakal 🙏" (WhatsApp, informal) |
| Tagline | "Your Sacred Companion in the City of Mahakal" |
| Empty state | "No results — let us help you find the right ritual." |

---

## 11. CSS Variables Reference

Complete set of CSS custom properties for the design system:

```css
:root {
  /* Brand Greens */
  --green-deep:    #1a3a1a;
  --green-primary: #2d5a27;
  --green-mid:     #3d7a35;
  --green-light:   #5a9e50;
  --green-pale:    #a8d5a2;

  /* Gold Accents */
  --gold:          #c8973a;
  --gold-light:    #e0b060;
  --saffron:       #d4702a;

  /* Backgrounds */
  --cream:         #f5f0e8;
  --cream-dark:    #ede5d4;

  /* Text */
  --text-dark:     #1a2a1a;
  --text-mid:      #3a5a38;

  /* Gradients */
  --gradient-gold: linear-gradient(135deg, #c8973a, #e0b060);
  --gradient-hero: linear-gradient(
    to bottom,
    rgba(26, 58, 26, 0.9),
    rgba(45, 90, 39, 0.6)
  );

  /* Typography */
  --font-display:    'Tiro Devanagari Sanskrit', serif;
  --font-heading:    'Playfair Display', serif;
  --font-serif:      'Cormorant Garamond', serif;
  --font-body:       'Jost', sans-serif;

  /* Spacing */
  --section-padding: 6rem 2rem;
  --max-width:       1200px;
  --card-radius:     4px;
  --border-radius:   2px;

  /* Shadows */
  --shadow-card:     0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-hover:    0 8px 32px rgba(26, 58, 26, 0.12);
  --shadow-gold:     0 4px 24px rgba(200, 151, 58, 0.4);
}
```

---

## 12. Social Media

### Profile / Cover Guidelines

| Platform | Avatar | Cover |
|----------|--------|-------|
| Instagram | Banyan logo (icon only) on deep green | Temple photography with brand overlay |
| Facebook | Full logo (symbol + text) on cream | Ram Ghat / Mahakaleshwar with tagline |
| WhatsApp Business | Banyan logo on deep green | — |
| Google Business | Full logo on cream | Temple exterior photo |

### Post Style
- Always include Devanagari and English versions of key text
- Use brand color overlays, not arbitrary photo filters
- Caption structure: Hook (Hindi) → Body (English/Hinglish) → CTA → Hashtags
- Hashtag set: `#Ujjain #Mahakal #MahakaleshwarTemple #UjjainDarshan #JaiMahakal #AmritChaya #UjjainTourism #ShipraRiver #UjjainPooja`

---

## 13. WhatsApp Business Greeting

> *Jai Mahakal! 🙏*
> *Namaste! Welcome to Amrit Chaya — your trusted guide to the sacred city of Ujjain.*
> *We help you book poojas, plan temple visits, and find the best hotels — all direct, no middlemen.*
>
> *How can we assist your pilgrimage today?*
> *(Reply with: 1 - Pooja Booking | 2 - Temple Info | 3 - Hotel Booking | 4 - Sacred Products)*

---

*Last updated: April 2025 · Amrit Chaya · Ujjain, MP*  
*For queries: namaste@amritchaya.in*
