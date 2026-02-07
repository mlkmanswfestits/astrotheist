# AstroTheist - Astrology Website

## Overview
AstroTheist is a comprehensive Western astrology website featuring:
- Advanced natal chart interpretation with Jungian psychological depth
- E-commerce store with astrology-themed merchandise
- Educational content on planets, houses, signs, aspects, and patterns
- Services: consultations, natal reports, synastry reports
- Current transits and celebrity chart database

## Project Structure
```
AstroTheist/
├── index.html              # Homepage
├── styles.css              # Main stylesheet (cosmic navy/gold theme)
├── script.js               # JavaScript for interactivity
├── learn/
│   ├── index.html          # Learn hub
│   ├── angles/
│   │   └── algol-midheaven.html  # Featured article
│   ├── planets/
│   ├── houses/
│   ├── signs/
│   ├── patterns/
│   ├── aspects/
│   └── critical-degrees/
├── services/
│   └── consultation.html   # 1-on-1 readings with pricing
├── tools/
│   └── chart-calculator.html  # Free natal chart tool
├── reference/
│   ├── celebrity-charts.html  # Famous charts database
│   └── transits.html       # Saturn-Neptune Aries 2026
├── store/
│   └── index.html          # Merch + digital products
├── blog/
├── community/
└── README.md
```

## Features Implemented

### Design System
- **Colors:** Navy (#0f1f3f), Gold (#d4af37), Purple (#6c5ce7)
- **Typography:** Playfair Display (headings), Inter (body)
- **Responsive:** Mobile-first with breakpoints at 768px
- **Animations:** Smooth transitions, parallax hero, fade-in cards

### Key Pages
1. **Homepage** - Hero section, quick learn cards, featured service, celebrity teaser, newsletter signup
2. **Learn Hub** - Organized navigation to all astrology topics
3. **Algol on Midheaven** - Comprehensive article with celebrity examples (Trump, Kahlo, etc.)
4. **Store** - 5 merch designs + digital products:
   - Algol Survivor T-Shirt
   - Regulus Rising T-Shirt
   - Capricorn Stellium Boss
   - Grand Earth Trine Flow
   - Saturn-Neptune Aries 2026
5. **Consultation** - Service page with 3 pricing tiers ($150-300)
6. **Chart Calculator** - Free tool with Astro.com integration
7. **Celebrity Charts** - Database with Algol MC and Leo Ascendant examples
8. **Current Transits** - Saturn-Neptune Aries 2026 deep dive

### Content Highlights
- **Algol on Midheaven:** Full article with natal interpretation, Jupiter conjunction, square Ascendant, trine Moon, celebrity table
- **Celebrity Examples:** Trump, Frida Kahlo, Marlene Dietrich, Henry Ford, Uma Thurman, Woody Allen, Drake, Heidi Klum, Franz Liszt
- **Transit Focus:** Saturn conjunct Neptune in Aries (Feb 20, 2026) with rising sign impacts

## Deployment Instructions

### Option 1: Local Development
1. Open `index.html` in a web browser
2. For full functionality, use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000`

### Option 2: Static Hosting
Deploy to any static hosting service:

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd AstroTheist
netlify deploy --prod
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd AstroTheist
vercel --prod
```

**GitHub Pages:**
1. Create GitHub repo
2. Push files
3. Enable Pages in Settings → Pages
4. Select main branch, root folder

### Option 3: WordPress Migration
To convert to WordPress (as specified in original prompt):

1. **Install WordPress** with Astra/Neve theme
2. **Install Plugins:**
   - Elementor Pro (page builder)
   - WooCommerce (e-commerce)
   - MemberPress (memberships)
   - bbPress (forum)
   - Yoast SEO
3. **Import Content:**
   - Copy HTML content into Elementor blocks
   - Import CSS into theme customizer
   - Set up WooCommerce products (merch + digital)
4. **Integrations:**
   - Calendly for bookings
   - Printful for print-on-demand shirts
   - Stripe/PayPal for payments

## Next Steps (To Complete Full Site)

### Content Pages to Add
- [ ] Individual planet pages (12)
- [ ] Individual house pages (12)
- [ ] Individual sign pages with critical degrees (12)
- [ ] Aspects breakdown pages
- [ ] Horoscopes (daily/weekly/monthly/yearly)
- [ ] Blog posts
- [ ] Forum setup

### E-commerce Integration
- [ ] Connect WooCommerce or Shopify
- [ ] Set up Printful for POD shirts
- [ ] Payment gateway (Stripe/PayPal)
- [ ] Shopping cart functionality
- [ ] Order management

### Advanced Features
- [ ] User accounts (save charts)
- [ ] Membership tiers ($9/$27/$47 monthly)
- [ ] Discord integration
- [ ] Email automation (MailChimp)
- [ ] SEO optimization (meta tags, schema markup)
- [ ] Analytics (Google Analytics)

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --navy-primary: #0f1f3f;
    --gold-primary: #d4af37;
    --purple-primary: #6c5ce7;
}
```

### Content
- Update text in HTML files
- Add new pages following existing structure
- Modify navigation in each page's `<nav>` section

### Branding
- Replace logo SVG in navigation
- Update site name in all pages
- Customize hero images/backgrounds

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License
All rights reserved © 2026 AstroTheist

## Contact
For questions about implementation or customization, refer to the original prompt in `AstroTheist-prompt.md`.

---

**Built with:** HTML5, CSS3, Vanilla JavaScript
**Design:** Cosmic minimalism with navy/gold/purple palette
**Approach:** Data-driven astrology with Jungian psychological depth

