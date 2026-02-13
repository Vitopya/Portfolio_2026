# Figma Design Specifications: Homepage

**File:** ZZH2QTIsj8E7D7D2hLKVCc | **Node:** 1271:822 — HF/Desktop/Homepage | **Extracted:** 2026-02-13

---

## Color Palette

| CSS Variable | Hex | Usage |
|---|---|---|
| --color-dark | #020826 | Primary text, dark backgrounds |
| --color-warm-brown | #716040 | Accent text, labels, logo, testimonial body |
| --color-gold | #8C7851 | Primary buttons, footer border, separator lines |
| --color-cream | #F9F4EF | Page background, navbar background |
| --color-off-white | #FAFAFA | Section backgrounds, card backgrounds |
| --color-sand | #EADDCF | Card borders, footer background, quote icons |
| --color-white | #FFFFFE | Button text on primary, CTA text |
| --color-tag-blue | #BEDBFF | Product Design chip background |
| --color-tag-pink | #FDA5C1 | UX Strategy chip background |
| --color-tag-purple | #E9D4FF | User Research chip background |

---

## Typography System

Two font families used: **Amulya Variable** (headings, labels) and **Synonym Variable** (body, UI)

| Role | Font Family | Weight | Size | Line Height |
|---|---|---|---|---|
| Hero heading (default) | Amulya Variable | 700 Bold | 120px | 128px |
| Hero ampersand & | Amulya Variable | 700 Bold | 96px | 142px |
| Hero greeting | Amulya Variable | 400 Regular | 16px | AUTO |
| Hero subtitle | Synonym Variable | 500 Medium | 24px | AUTO |
| Section label | Amulya Variable | 400 Regular | 16px | AUTO |
| About heading (Qui je suis) | Amulya Variable | 500 Medium | 40px | AUTO |
| Stat numbers (8+, 15+, 700) | Amulya Variable | 500 Medium | 40px | AUTO |
| Stat labels | Amulya Variable | 400 Regular | 16px | AUTO |
| CTA heading | Amulya Variable | 500 Medium | 24px | AUTO |
| Logo wordmark | Amulya Variable | 700 Bold | 24px | AUTO |
| Card title | Synonym Variable | 600 SemiBold | 24px | AUTO |
| Card description | Synonym Variable | 400 Regular | 14px | AUTO |
| Card tag chip text | Synonym Variable | 400 Regular | 12px | AUTO |
| Body paragraph | Synonym Variable | 400 Regular | 16px | AUTO |
| Testimonial body | Synonym Variable | 500 Medium | 16px | AUTO |
| Attribution / small text | Synonym Variable | 400 Regular | 14px | AUTO |
| Button text | Synonym Variable | 500 Medium | 16px | AUTO |
| Copyright / smallest | Synonym Variable | 400 Regular | 12px | AUTO |

---

## Page Structure

- **Canvas:** 1280 x 4192px
- **Background:** #F9F4EF
- **Content column:** 1120px wide, centered (80px gutters when section is full-width)
- **Layout:** VERTICAL, gap 80px between sections via Content-page-global container

**Stacking order (top to bottom):**
1. Navbar — 1280 x 80px
2. Hero — 1120 x 546px
3. Featured Work — 1280 x 1159px
4. About — 1120 x 514px
5. Featured Writing — 1280 x 477px
6. References — 1120 x 400px
7. Bottom (CTA + Footer) — 1280 x 536px
---

## 1. NAVBAR

**Node:** 1271:1008 | **Size:** 1280 x 80px | **Background:** #F9F4EF
**Layout:** HORIZONTAL | **justifyContent:** SPACE_BETWEEN | **alignItems:** CENTER
**Padding:** 40T / 80R / 40B / 80L

### Logo
- Text: Joseph.Deffayet
- Font: Amulya Variable, 700 Bold, 24px, #716040
- Size: 185 x 36px

### Navigation buttons (Frame 92: 360 x 40px, HORIZONTAL, gap 24px, paddingLeft 10px)

| Button | Text | Style | Size | Text color | BG |
|---|---|---|---|---|---|
| Projets | Projets | Tertiary | 72 x 40px | #020826 | transparent |
| A propos | A propos | Tertiary | 84 x 40px | #020826 | transparent |
| Me contacter | Me contacter + arrow-top-right icon | Primary | 146 x 40px | #FFFFFE | #8C7851 |

All buttons: padding 8-9px top/bottom, 9px left/right, corner-radius 4px, height 40px
---

## 2. HERO SECTION

**Node:** 1283:846 | **Size:** 1120 x 546px | **Background:** transparent (#F9F4EF)
**Layout:** VERTICAL | **counterAxisAlignItems:** CENTER | **gap:** 72px
**Children:** Content-hero frame (494px tall) + arrow CTA button (40px)

### 2.1 Content-hero Frame (1120 x 494px)
**Layout:** VERTICAL, gap 64px

#### 2.1.1 Label+Title block (1032 x 342px, VERTICAL, gap 8px)

**Frame 368 — Typography stack (1032 x 301px, VERTICAL, gap 0):**

**Greeting line:**
- Content: Bonjour, je suis Joseph
- Amulya Variable, 400 Regular, 16px, #716040, size 171 x 24px

**Hero heading — MIXED CHARACTER STYLES (1032 x 277px):**

One TEXT node, content: Product Designer & Strategist (29 chars)
characterStyleOverrides array: only char index 17 (the &) has override style #49

| Character span | Text | fontSize | fontWeight | lineHeight | color |
|---|---|---|---|---|---|
| Index 0-16 | Product Designer  | 120px | 700 Bold | 128px | #020826 |
| Index 17 | & | 96px | 700 Bold | 142px (intrinsic) | #716040 |
| Index 18-28 |  Strategist | 120px | 700 Bold | 128px | #020826 |

Note: The & override is bound to Figma variable VariableID:827:669, inherits text style 907:755.
It renders 24px smaller than surrounding text, in the golden-brown accent color.
The text wraps across two visual lines: line1=Product Designer, line2=& Strategist

**Subtitle:**
- Content: Specialiste des environnements B2B complexes
- Synonym Variable, 500 Medium, 24px, #716040, size 1032 x 33px

#### 2.1.2 Data frame (1120 x 88px, HORIZONTAL, SPACE_BETWEEN, gap 99px)

**Left — Stats (Frame 96, 575 x 83px, HORIZONTAL, gap 56px):**

| Frame size | Number text | Label text | Number style | Label style |
|---|---|---|---|---|
| 173 x 83px | 8+ | ANNES D EXPERIENCE | 40px w500 Amulya #020826 | 16px w400 Amulya #020826 |
| 165 x 83px | 15+ | MISSIONS REALISEES | 40px w500 Amulya #020826 | 16px w400 Amulya #020826 |
| 125 x 83px | 700 | LITRES DE CAFE | 40px w500 Amulya #020826 | 16px w400 Amulya #020826 |

**Right — Tagline paragraph (Frame 93, 451 x 88px):**
- Synonym Variable, 400 Regular, 16px, #020826
- Content: Je concois des outils que les utilisateurs experts adoptent reellement, dans des
  environnements ou la complexite metier, les contraintes reglementaires et la dette
  technique ne laissent aucune place a l approximation.

### 2.2 Arrow CTA Button (Button/40px)
- Size: 42 x 40px (scroll indicator only)
- Padding: 8T / 9R / 8B / 9L, corner radius 4px
- Icon: Icon/Arrow/24px, path fill #020826
---

## 3. FEATURED WORK (Projects)

**Node:** 1360:2513 | **Size:** 1280 x 1159px | **Background:** #FAFAFA
**Layout:** VERTICAL, gap 8px | **Padding:** 48T / 80R / 48B / 80L
**Inner content width:** 1120px

**Section label:** PROJETS — Amulya Variable 400 16px #716040, 1120 x 24px

### Cards+Allwork (1120 x 964px, VERTICAL, gap 24px)

#### Desktop/Mozaic — Card grid (1120 x 900px, HORIZONTAL, gap 16px)
4 project cards in a 2x2 layout (each row: 2 cards with 16px gap)

#### Project Card — Desktop/Card/Project
**Size:** 548 x 442px
**Layout:** VERTICAL, gap 16px
**Padding:** 8px all sides
**Background:** #FAFAFA
**Border:** 1px solid #EADDCF, align INSIDE
**Corner radius:** 4px

**Frame 104 — Image and Tags (532 x 272px, VERTICAL, gap 8px):**

- Thumbnail image rectangle: 532 x 240px, corner radius 4px, IMAGE fill
- Tags row (Frame 101, 532 x 24px, HORIZONTAL, justifyContent SPACE_BETWEEN):
  - Skill tags (Frame 100, HORIZONTAL, gap 8px):
    - Product Design: bg #BEDBFF, text #020826, Synonym 12px/400, padding 4px all, radius 4px
    - UX Strategy: bg #FDA5C1, text #020826, Synonym 12px/400, padding 4px all, radius 4px
    - User Research: bg #E9D4FF, text #020826, Synonym 12px/400, padding 4px all, radius 4px
  - Position chip (right-aligned): e.g. Lead Designer 2023-2025
    - bg #FAFAFA, border 1px #EADDCF, radius 4px, Synonym 12px/400, #020826

**Frame 103 — Text and Button (532 x 138px, VERTICAL, gap 16px):**

- Frame 102 — Text block (VERTICAL, gap 8px):
  - Project title: Synonym Variable, 600 SemiBold, 24px, #020826
  - Tagline / description: Synonym Variable, 400 Regular, 14px, #020826
- Explorer le projet button: 145 x 40px, Tertiary, padding 9px all, radius 4px, text #020826

**Actual project content on cards:**
1. SNCF - Programme DEX+ / Structurer la transformation numerique d un metier
2. SNCF - SIGURD / Refondre l outillage metier d un logiciel legacy
3. SNCF - AEGIS / Concevoir from scratch l outil de conception CAO
4. L Oreal - eSafety / Digitaliser l evaluation toxicologique

#### Explorer tous les projets button
226 x 40px, Tertiary style, text #020826, padding 8T/9R/8B/9L, radius 4px, arrow-right icon
---

## 4. ABOUT SECTION

**Node:** 1360:2541 | **Size:** 1120 x 514px | **Background:** transparent (#F9F4EF)
**Layout:** VERTICAL, gap 15px | No padding (flush to 1120px content column)

**Section label:** A PROPOS — Amulya Variable 400 16px #716040, 1120 x 24px

### img+txt (1120 x 475px, HORIZONTAL, gap 73px)

**Left — Portrait image (Img):**
- Type: RECTANGLE with IMAGE fill
- Size: 475 x 475px (square aspect ratio)
- Corner radius: 4px

**Right — Txt+btn frame (572 x 307px, VERTICAL, gap 24px):**

Txt frame (572 x 243px, VERTICAL, gap 8px):
- Heading Qui je suis: Amulya Variable, 500 Medium, 40px, #716040, 572 x 59px
- Body paragraph: Synonym Variable, 400 Regular, 16px, #020826, 572 x 176px
  Full content: Product Designer depuis 8 ans, j ai choisi de me specialiser la ou peu
  s aventurent : les environnements B2B critiques ou l erreur n est pas une option.
  Signalisation ferroviaire, toxicologie, pharmaceutique, infrastructure, blockchain,
  je travaille avec des experts metier qui connaissent leur domaine mieux que quiconque
  et je traduis cette expertise en solutions interfacees qu ils adoptent vraiment.

Decouvrir mon parcours button:
- Size: 223 x 40px
- Style: Primary — background #8C7851, text #FFFFFE
- Padding: 8T / 9R / 8B / 9L, corner radius 4px
- Icon: Icon/Arrow/24px, 16x11px path, fill #FFFFFE

---

## 5. FEATURED WRITING (Articles)

**Node:** 1360:2858 | **Size:** 1280 x 477px | **Background:** #FAFAFA
**Layout:** VERTICAL, gap 8px | **Padding:** 48T / 80R / 48B / 80L
**Inner content width:** 1120px

**Section label:** DERNIERS ARTICLES — Amulya Variable 400 16px #716040, 1120 x 27px

### Desktop/Mozaic — 3 article cards (1120 x 338px, HORIZONTAL, gap 16px)

#### Article Card — Desktop/Card/Project
**Size:** 360 x 338px
**Layout:** VERTICAL, gap 16px
**Padding:** 8px all sides
**Background:** #FAFAFA
**Border:** 1px solid #EADDCF, align INSIDE
**Corner radius:** 4px

**Frame 104 — Image and Tags (344 x 152px, VERTICAL, gap 8px):**
- Thumbnail: 344 x 120px, corner radius 4px, IMAGE fill
- Tag chips (Frame 101, VERTICAL, gap 8px — stacked vertically unlike project cards):
  - Product design: bg #BEDBFF, Synonym 12px/400, padding 4px, radius 4px
  - UX strategy: bg #FDA5C1, Synonym 12px/400, padding 4px, radius 4px
  - User research: bg #E9D4FF, Synonym 12px/400, padding 4px, radius 4px

**Frame 103 — Text and Button (344 x 154px, VERTICAL, gap 24px):**
- Text block (Frame 102, VERTICAL, gap 0):
  - Title: Synonym Variable, 600 SemiBold, 24px, #020826
  - Description: Synonym Variable, 400 Regular, 14px, #020826
- Lire l article sur Medium button: 225 x 40px, Tertiary, radius 4px
  Uses Icon/Arrow-top-right (external link indicator)

**Article content:**
1. YouTube : etude de cas (...) — YouTube dark patterns for Premium conversion
2. Design Ops : au-dela des outils
3. A venir, un jour, j espere (placeholder)
---

## 6. CLIENTS AND REFERENCES

**Node:** 1372:2925 | **Size:** 1120 x 400px | **Background:** transparent (#F9F4EF)
**Layout:** VERTICAL, gap 16px | No padding

**Section label:** CLIENTS & REFERENCES — Amulya Variable 400 16px #716040, 1120 x 24px

### References+logos (1120 x 360px, VERTICAL, gap 24px)

**Logo garland (Logos_guirelande, 1040 x 80px, HORIZONTAL, gap 40px):**
- 9 Image/S component instances
- Each: 80 x 80px, IMAGE fill, corner radius 4px

**Testimonials grid (1120 x 256px, HORIZONTAL, gap 20px, 3 columns):**

Each testimonial block structure (VERTICAL, gap 0):
- Quote icon (Icon/Quote/24px): 48 x 48px container, 33 x 30px path, fill #EADDCF
- Content frame (VERTICAL, gap 16px):
  - Quote text: Synonym Variable, 500 Medium, 16px, #716040
  - Attribution: Synonym Variable, 400 Regular, 14px, #020826

**Testimonial 1 (Frame 111, 360 x 212px):**
- Quote: Un reel plaisir de travailler avec Joseph : tres a l ecoute, force de proposition
  et de rechallenge. Joseph est tres reactif et applique...
- Attribution: Pauline Galeron, Initiative Owner @L Oreal R&I

**Testimonial 2 (Frame 112, 360 x 234px):**
- Quote: Joseph a contribue a creer from scratch Tailored Insights by GL, notre plateforme data.
  L enjeu : un outil utile et utilisable. Resultat : une UX permettant d acced...
- Attribution: Alexandre Brebant, Product Director @Galeries Lafayette

**Testimonial 3 (Frame 113, 360 x 256px):**
- Quote: J ai eu la chance de travailler avec Joseph sur 2 projets. Tres a l ecoute des
  besoins du client et de l entreprise...
- Attribution: Celine Rickwood, CEO @Astec Bronze France

---

## 7. CTA BANNER (Section/WorkingNeed)

**Node:** 1388:1951 (child of Bottom) | **Size:** 1280 x 328px | **Background:** #020826
**Layout:** VERTICAL, gap 8px
**Padding:** 80T / 268R / 80B / 268L
**Alignment:** primaryAxisAlignItems CENTER, counterAxisAlignItems CENTER
**Effective inner width:** 1280 - 536 = 744px

### Text_content (744 x 168px, VERTICAL, gap 48px)

**Frame 114 — Heading and subtext (744 x 80px, VERTICAL, gap 0):**

Heading:
- Content: Un projet de transformation B2B complexe ?
- Amulya Variable, 500 Medium, 24px, #FFFFFE, 744 x 36px

Subtext:
- Content: J accompagne les organisations qui concoivent des outils pour utilisateurs experts,
  de la discovery a l impact livre, dans des environnements regules et critiques.
- Synonym Variable, 400 Regular, 16px, #FFFFFE, 744 x 44px

**Discutons de votre projet button:**
- Size: 204 x 40px
- Style: Tertiary on dark background, text #FFFFFE
- Padding: 9px all sides, corner radius 4px

---

## 8. FOOTER

**Node:** 1388:1951 (child of Bottom) | **Size:** 1280 x 152px | **Background:** #EADDCF
**Layout:** VERTICAL, gap 24px | **Padding:** 0T / 0R / 24B / 0L
**counterAxisAlignItems:** CENTER

**Top border line (Line 1):** 1280px wide, color #8C7851, weight 1px

### Logo+nav_buttons (1120 x 40px, HORIZONTAL, SPACE_BETWEEN, CENTER)

**Left — Logo:** Joseph.Deffayet, Amulya Variable 700 Bold 24px, #716040, 185 x 36px

**Right — Nav frame (350 x 40px, HORIZONTAL, gap 24px):**

| Button | Label | Style | BG | Text | Size |
|---|---|---|---|---|---|
| Projets | Projets | Tertiary | transparent | #020826 | 72 x 40px |
| A propos | A propos | Tertiary | transparent | #020826 | 84 x 40px |
| Me contacter | Me contacter + arrow-top-right | Primary | #8C7851 | #FFFFFE | 146 x 40px |

### Frame 117 — Copyright row (1120 x 40px, VERTICAL, gap 24px)
- Separator line (Line 3): 1120px, #8C7851, 1px
- Copyright+email frame (1120 x 16px, HORIZONTAL, SPACE_BETWEEN):
  - Left: c 2025 Joseph Deffayet — Synonym Variable 400 12px, #020826, 134 x 16px
  - Right: joseph.deffayet.pro@gmail.com — Synonym Variable 400 12px, #020826, 171 x 16px
---

## Layout Summary

| Section | Width | Height | Background | Padding T/R/B/L | Internal Gap |
|---|---|---|---|---|---|
| Page canvas | 1280px | 4192px | #F9F4EF | 0 | 0 |
| Content-page-global | 1280px | 4032px | transparent | 0 | 80px between sections |
| Navbar | 1280px | 80px | #F9F4EF | 40/80/40/80 | SPACE_BETWEEN |
| Hero | 1120px | 546px | transparent | 0 | 72px (text to button) |
| Hero Content frame | 1120px | 494px | transparent | 0 | 64px (title to data) |
| Label+Title block | 1032px | 342px | transparent | 0 | 8px (heading to subtitle) |
| Data frame | 1120px | 88px | transparent | 0 | SPACE_BETWEEN |
| Featured Work | 1280px | 1159px | #FAFAFA | 48/80/48/80 | 8px |
| Project card | 548px | 442px | #FAFAFA | 8/8/8/8 | 16px |
| About | 1120px | 514px | transparent | 0 | 15px |
| Featured Writing | 1280px | 477px | #FAFAFA | 48/80/48/80 | 8px |
| Article card | 360px | 338px | #FAFAFA | 8/8/8/8 | 16px |
| References | 1120px | 400px | transparent | 0 | 16px |
| Bottom group | 1280px | 536px | — | 0 | 56px (CTA to Footer) |
| CTA Banner | 1280px | 328px | #020826 | 80/268/80/268 | 8px |
| Footer | 1280px | 152px | #EADDCF | 0/0/24/0 | 24px |

---

## Spacing Reference

| Context | Value |
|---|---|
| Between top-level page sections | 80px |
| CTA Banner to Footer gap | 56px |
| Hero: title block to arrow button | 72px |
| Hero: heading block to data/stats | 64px |
| Hero: greeting to heading (same frame, gap 0) | 0px |
| Hero: heading to subtitle | 8px |
| Stats columns gap (horizontal) | 56px |
| Stats to tagline paragraph | ~99px (SPACE_BETWEEN fill) |
| Section label to content (Featured Work) | 8px |
| Section label to content (About) | 15px |
| Section label to content (References) | 16px |
| Card grid horizontal gap | 16px |
| Card internal gap | 16px |
| Card padding | 8px all sides |
| Card image to tags row | 8px |
| Card title to description | 8px |
| Card text block to button | 16px |
| Tag chip horizontal gap (project cards) | 8px |
| Tag chip padding | 4px all sides |
| About image to text column | 73px |
| About heading to body | 8px |
| About text to CTA button | 24px |
| Testimonial columns gap | 20px |
| Logo garland item gap | 40px |
| CTA text block to CTA button | 48px |
| Footer logo+nav to copyright row | 24px |
| Nav button gap | 24px |

---

## Button Design System

| Variant | Background | Text color | Icon | Padding | Height | Radius |
|---|---|---|---|---|---|---|
| Primary | #8C7851 | #FFFFFE | Arrow right fill #FFFFFE | 8-9px T/B, 9px L/R | 40px | 4px |
| Tertiary (light bg) | transparent | #020826 | Arrow right fill #020826 | 8-9px T/B, 9px L/R | 40px | 4px |
| Tertiary (dark bg) | transparent | #FFFFFE | Arrow fill #FFFFFE | 9px all | 40px | 4px |
| Chip — colored | #BEDBFF / #FDA5C1 / #E9D4FF | #020826 | none | 4px all | 24px | 4px |
| Chip — outlined | #FAFAFA | #020826 | none | 4px all | 24px | 4px |

Font for all buttons: Synonym Variable, 500 Medium, 16px
Font for all chips: Synonym Variable, 400 Regular, 12px

---

## Icon System

| Component | Container size | Path size | Default fill | Usage |
|---|---|---|---|---|
| Icon/Arrow/24px | 24 x 24px | 16 x 11px (right arrow) | inherits button color | Right-pointing arrow in nav buttons |
| Icon/Arrow-top-right | 24 x 24px | 16 x 16px (diagonal) | inherits button color | External link on article cards |
| Icon/Quote/24px | 48 x 48px | 33 x 30px | #EADDCF | Testimonial opening quote mark |

---

## Section Background Alternation Pattern

The homepage alternates between two backgrounds:
- **Transparent / cream (#F9F4EF):** Navbar, Hero, About, References
  (These are 1120px content-column width sections, no own background)
- **Off-white (#FAFAFA):** Featured Work, Featured Writing
  (These are full-width 1280px sections with 80px horizontal padding creating the column)
- **Dark navy (#020826):** CTA Banner
- **Sand (#EADDCF):** Footer

---

*End of specification. All values extracted directly from Figma REST API v1 node endpoints.*