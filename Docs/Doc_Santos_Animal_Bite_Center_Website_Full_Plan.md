# Doc. Santos Animal Bite Center Website – Full Development Plan

## 1. Project Overview

**Project Name:** Doc. Santos Animal Bite Center Website  
**Website Type:** Business / Medical Clinic Informational Website  
**Primary Goal:** Make it easy for patients to quickly find clinic information, emergency contact numbers, services, pricing, location, and basic guidance after an animal bite or scratch.

The website should feel:

- Clean
- Trustworthy
- Professional
- Fast
- Mobile-friendly
- Easy to understand
- Emergency-focused
- Not overly animated
- Not AI-generated looking

The website should prioritize the actions a patient is most likely to need:

1. Call the clinic
2. Check if the clinic is open
3. View available services
4. Check basic pricing
5. Get directions
6. Know what to do after an animal bite
7. Read common questions

---

# 2. Recommended Technology Stack

## Frontend

- **React JS**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Motion** for animations
- **Lucide React** for icons
- **React Router DOM** for page routing

## Optional Libraries

- **React Hook Form** – contact/inquiry form
- **Zod** – form validation
- **Sonner** – toast notifications
- **Embla Carousel** – gallery/testimonial slider if needed
- **Google Maps Embed** or direct Google Maps link

## Initial Version

For Version 1, the website can be completely frontend-based.

No database is required unless the business later wants:

- Admin panel
- Appointment management
- Editable pricing
- Editable services
- Announcements
- Multiple branches
- Inquiry storage

---

# 3. Branding Direction

The design should follow the existing clinic branding visible from the physical storefront.

## Suggested Color Palette

### Primary Red

```text
#D62828
```

Use for:

- Main CTA buttons
- Emergency elements
- Important headings
- Active navigation
- Pricing highlights

### Dark Navy / Charcoal

```text
#172033
```

Use for:

- Main text
- Footer
- Headings
- Navigation

### White

```text
#FFFFFF
```

Use as the main website background.

### Light Gray

```text
#F7F8FA
```

Use for alternating page sections.

### Soft Red Background

```text
#FFF3F3
```

Use for:

- Pricing cards
- Emergency sections
- CTA sections

### Green Accent

```text
#1F9D55
```

Use only for:

- Open 24/7
- Health/service indicators
- Payment/success-related UI

---

# 4. Typography

Recommended font options:

- Inter
- Manrope
- Plus Jakarta Sans

Keep typography simple and readable.

## Font Usage

### Headings

- Bold
- Strong contrast
- Large but not oversized

### Body

- Regular
- Comfortable line height
- Easy to read on mobile

### Recommended Sizes

```text
Hero Title: 48px–64px desktop
Hero Title: 36px–42px mobile

Section Heading: 32px–40px desktop
Section Heading: 26px–32px mobile

Body: 16px–18px
Small labels: 13px–14px
```

---

# 5. Website Navigation

## Main Navigation

```text
Home
Services
About
FAQ
Contact
```

Add a strong CTA on the right:

```text
[ Call Now ]
```

## Mobile Navigation

Use a shadcn Sheet / Drawer.

```text
Logo                     ☰
```

Inside menu:

```text
Home
Services
About
FAQ
Contact

[ Call Now ]
```

---

# 6. Homepage Structure

Recommended order:

```text
Navbar
Hero Section
Emergency Information Bar
Services
What To Do After An Animal Bite
Pricing
Why Choose Us
Clinic Photos
About the Clinic
FAQ
Location + Contact Information
Final CTA
Footer
Mobile Sticky Emergency Bar
```

---

# 7. Navbar Section

## Content

Left side:

- Clinic logo
- Clinic name

Center/right:

- Home
- Services
- About
- FAQ
- Contact

Far right:

```text
Call Now
```

## Behavior

- Sticky on scroll
- White background
- Light shadow/border
- Active menu indicator
- Mobile collapsible menu

## Animation

Use minimal Motion animation:

```text
opacity: 0 → 1
y: -10 → 0
```

---

# 8. Hero Section

This should immediately answer:

- What is the clinic?
- Is it open?
- What does it offer?
- How can I call?
- How can I find it?

## Suggested Content

### Small Heading

```text
Doc. Santos
```

### Main Heading

```text
Animal Bite Center
```

### Emergency Message

```text
NAKAGAT O NAKALMOT?
HUWAG BALEWALAIN.
MAGPABAKUNA KONTRA RABIES.
```

### Supporting Text

Example:

```text
Professional animal bite care and vaccination services available 24/7.
```

### Main Buttons

```text
[ Call Now ]
[ Get Directions ]
```

### Hero Image

Use a real photo of the clinic.

Recommended:

- Original storefront photo
- Proper crop
- Slight overlay if needed
- No generic stock clinic image as the primary hero image

## Desktop Layout

```text
-------------------------------------------------
LEFT CONTENT              | REAL CLINIC PHOTO
-------------------------------------------------
```

## Mobile Layout

```text
CONTENT
BUTTONS
CLINIC PHOTO
```

## Animation

Headline:

```text
opacity 0 → 1
y 20 → 0
```

Buttons:

```text
opacity 0 → 1
y 15 → 0
delay: small stagger
```

Image:

```text
opacity 0 → 1
scale 0.98 → 1
```

Avoid large zoom effects.

---

# 9. Emergency Information Bar

Place directly below the hero.

Use 3 horizontal cards on desktop.

## Card 1

```text
Open 24/7
Emergency Service
```

Icon:

- Clock

## Card 2

```text
Free Consultation
Initial assessment
```

Icon:

- Users / MessageCircle

## Card 3

```text
Anti-Rabies Vaccine
Animal bite protection
```

Icon:

- ShieldCheck

## Mobile

Stack vertically or display as horizontally scrollable mini cards.

---

# 10. Services Section

## Title

```text
Our Services
```

## Service Cards

Recommended services based on the clinic signage:

1. Anti-Rabies Vaccine
2. Post-Exposure Vaccination
3. Pre-Exposure Vaccination
4. Booster Shot
5. ERIG Infiltration
6. Tetanus Toxoid
7. Free Consultation
8. Wound Care / Initial Assessment

## Card Design

Each card should contain:

- Icon
- Service title
- Short description
- Optional Learn More link

Example:

```text
[Icon]

Anti-Rabies Vaccine

Post-exposure vaccination for animal bites
and scratches.
```

## shadcn Components

- Card
- CardHeader
- CardContent
- Button

## Animation

Use viewport entrance:

```text
opacity: 0 → 1
y: 20 → 0
```

Use staggered card animation.

---

# 11. What To Do After An Animal Bite

This section should be educational only and should not replace medical assessment.

## Recommended Steps

### Step 1

```text
Wash Immediately
```

Short description:

```text
Wash the affected area with soap and running water.
```

### Step 2

```text
Avoid Home Remedies
```

Avoid placing unverified substances on the wound.

### Step 3

```text
Visit an Animal Bite Center
```

Seek professional assessment.

### Step 4

```text
Get Assessed for Vaccination
```

A healthcare professional determines the appropriate treatment.

### Step 5

```text
Follow the Recommended Schedule
```

Complete the vaccination plan provided by the medical professional.

## UI Style

Desktop:

```text
01 → 02 → 03 → 04 → 05
```

Mobile:

```text
01
↓
02
↓
03
↓
04
↓
05
```

Use cards with:

- Step number
- Icon
- Title
- Small description

---

# 12. Pricing Section

Pricing should be easy to see but also easy to update.

## Example Layout

```text
Anti-Rabies Vaccine

Regular Price
₱600

Discounted Price
₱480
PWD / Senior Citizen
```

**Important:** Confirm all prices and discount rules with the business before publishing.

## Add Note

```text
Prices may vary depending on the required treatment or service.
Please contact the clinic for current pricing.
```

## Future Improvement

Store prices in:

```text
src/data/pricing.js
```

instead of hardcoding values directly in the component.

---

# 13. Why Choose Us

Use a 2x2 or 4-card layout.

## Cards

### Open 24/7

```text
Emergency services available anytime.
```

### Experienced Medical Staff

```text
Professional assessment and patient care.
```

### Accessible Location

```text
Conveniently located in Baseco, Manila.
```

### Free Consultation

```text
Initial guidance and assessment available.
```

Optional additional items:

- Multiple payment options
- Emergency-focused service
- Clear vaccination guidance
- Easy-to-contact clinic

---

# 14. Clinic Photos Section

Use real photos whenever possible.

## Suggested Images

- Clinic storefront
- Reception area
- Waiting area
- Treatment room
- Staff area
- Vaccination area
- Signage

## UI

Desktop:

```text
4-column gallery
```

Tablet:

```text
2-column
```

Mobile:

```text
1-column or carousel
```

## Optional Feature

Click image → open shadcn Dialog / Lightbox.

---

# 15. About Section

## Content

Keep it short.

Example structure:

```text
About Doc. Santos Animal Bite Center

We provide accessible animal bite care, vaccination,
consultation, and emergency services for patients who
have been bitten or scratched by animals.
```

Include:

- Mission
- Commitment to patient care
- 24/7 availability
- Local community service

Avoid unsupported medical claims.

---

# 16. FAQ Section

Use:

```text
shadcn Accordion
```

## Suggested Questions

1. Kailangan ba magpa-vaccine kahit maliit lang ang kagat?
2. Paano kung kalmot lang?
3. Ilang vaccine doses ang kailangan?
4. Kailan kailangan ng booster?
5. Ano ang ERIG?
6. Open ba kayo 24/7?
7. Pwede ba ang walk-in?
8. Anong payment methods ang available?
9. Paano pumunta sa clinic?
10. Kailangan ba agad magpatingin pagkatapos makagat?

For medical questions, the answers should encourage proper professional evaluation instead of giving patient-specific diagnosis or treatment instructions.

---

# 17. Location Section

This should be highly visible.

## Include

- Clinic name
- Full verified address
- Google Maps embed
- Get Directions button

Example:

```text
Doc. Santos Animal Bite Center
Baseco, Manila
```

**Before launch, verify the exact clinic address shown on the official business records or Google Maps.**

## Button

```text
Get Directions
```

This should open the clinic's Google Maps location.

---

# 18. Contact Section

Display phone numbers clearly.

Based on the storefront photo, phone numbers appear to include:

```text
0963-0487572
0950-0041420
0967-8941438
```

Verify all numbers with the business owner before publishing.

## Contact UI

```text
Contact Us

📞 0963-0487572
📞 0950-0041420
📞 0967-8941438

Open 24/7
```

## Payment Methods

Based on the signage:

- Cash
- GCash
- Bank Transfer

Add icons only if they match the real available payment options.

---

# 19. Final Call-To-Action Section

Near the bottom:

```text
Protektahan ang Pamilya at mga Alagang Hayop.

Nakagat o nakalmot?
Huwag balewalain.

[ Call Now ]
[ Get Directions ]
```

Use a soft red background.

Optional visual:

- Real clinic photo
- Simple dog/cat illustration
- No distracting decorative graphics

---

# 20. Footer

## Left

- Logo
- Clinic name
- Short description

## Center

```text
Home
Services
About
FAQ
Contact
```

## Right

- Phone
- Address
- Open 24/7

## Bottom

```text
© 2026 Doc. Santos Animal Bite Center.
All rights reserved.
```

Optional:

- Privacy Policy
- Terms
- Facebook page link

---

# 21. Mobile Sticky Emergency Bar

Very important for this project.

Show only on mobile:

```text
---------------------------------
| Call Now | Get Directions     |
---------------------------------
```

Position:

```text
fixed bottom-0
```

Make sure the page content has enough bottom padding so the bar does not cover content.

---

# 22. Suggested React Project Structure

```text
src/
│
├── assets/
│   ├── images/
│   │   ├── clinic-front.jpg
│   │   ├── clinic-inside-1.jpg
│   │   └── clinic-inside-2.jpg
│   └── logo/
│       └── abc-logo.png
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── MobileEmergencyBar.jsx
│   │
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── EmergencyInfo.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── BiteStepsSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── GallerySection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── LocationSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── FinalCTA.jsx
│   │
│   └── ui/
│       └── shadcn components
│
├── data/
│   ├── clinic.js
│   ├── services.js
│   ├── faq.js
│   ├── pricing.js
│   └── biteSteps.js
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
│
├── routes/
│   └── router.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 23. Central Clinic Data File

Create:

```text
src/data/clinic.js
```

Example structure:

```js
export const clinic = {
  name: "Doc. Santos Animal Bite Center",
  shortName: "ABC",
  city: "Baseco, Manila",
  hours: "Open 24/7",
  phones: [
    "0963-0487572",
    "0950-0041420",
    "0967-8941438",
  ],
  paymentMethods: [
    "Cash",
    "GCash",
    "Bank Transfer",
  ],
}
```

This prevents duplicate business information across components.

---

# 24. Services Data

Create:

```text
src/data/services.js
```

Each service should include:

```text
id
title
description
icon
featured
```

This makes adding/removing services easy.

---

# 25. Motion Animation Plan

Use Motion only where it improves the experience.

## Hero

```text
Title:
fade in + move upward

Buttons:
small stagger

Image:
fade + subtle scale
```

## Section Headings

```text
opacity: 0 → 1
y: 15 → 0
```

## Cards

```text
opacity: 0 → 1
y: 20 → 0
stagger children
```

## Images

```text
scale: 1
hover: 1.02
```

## Buttons

Small hover interaction only.

Avoid:

- Spinning
- Large bounce effects
- Constant animation
- Excessive glowing
- Long page-load animations

Medical sites should feel calm and fast.

---

# 26. shadcn/ui Components to Use

Recommended:

```text
Button
Card
Accordion
Sheet
Dialog
Badge
Separator
NavigationMenu
Input
Textarea
Form
Alert
Tooltip
```

Optional:

```text
Carousel
Tabs
```

---

# 27. Responsive Design

## Desktop

```text
>= 1280px
```

Use wide container:

```text
max-w-7xl
```

## Laptop

```text
1024px–1279px
```

## Tablet

```text
768px–1023px
```

## Mobile

```text
< 768px
```

Priority mobile elements:

- Large Call button
- Large Directions button
- Easy-to-read phone number
- No tiny text
- No oversized hero
- Sticky emergency actions

---

# 28. Accessibility

Important for a public medical service website.

Implement:

- Semantic HTML
- Keyboard accessible navigation
- Good text contrast
- Alt text for images
- Visible focus states
- Proper button labels
- Large touch targets
- Accessible Accordion
- Proper form labels

---

# 29. Performance

Target a fast mobile experience.

## Recommendations

- Compress clinic images
- Use WebP or AVIF
- Lazy-load gallery photos
- Avoid huge animation packages
- Keep homepage JS light
- Use optimized Google Maps embed
- Avoid autoplay video

---

# 30. SEO Plan

## Homepage Title

Example:

```text
Doc. Santos Animal Bite Center | Baseco Manila
```

## Meta Description

Example:

```text
Animal bite care, anti-rabies vaccination, consultation, and emergency services in Baseco, Manila. Open 24/7.
```

## Suggested Keywords

Use naturally in the content:

```text
animal bite center Manila
anti rabies vaccine Manila
animal bite clinic Baseco
rabies vaccine Baseco Manila
24/7 animal bite center
```

Avoid keyword stuffing.

## Local SEO

Later:

- Google Business Profile
- Verified address
- Correct phone numbers
- Opening hours
- Clinic photos
- Google Maps link

---

# 31. Contact / Inquiry Form

Optional in Version 1.

Fields:

```text
Full Name
Phone Number
Email (optional)
Message
```

Add note:

```text
For urgent animal bite concerns, please call the clinic directly.
```

Do not position the form as a substitute for urgent medical assessment.

---

# 32. Pages

## Home

Contains all main information.

## Services

Full service list and descriptions.

## About

Clinic introduction and mission.

## FAQ

Detailed frequently asked questions.

## Contact

- Phone numbers
- Location
- Map
- Payment methods
- Opening hours

For a smaller Version 1, this can also work as a mostly one-page site with navigation anchors.

---

# 33. Development Phases

## Phase 1 – Project Setup

Tasks:

- Create React + Vite project
- Install Tailwind
- Configure shadcn/ui
- Install Motion
- Install Lucide React
- Install React Router
- Create folder structure
- Set theme colors
- Configure typography

---

## Phase 2 – Core Layout

Create:

- Navbar
- Footer
- Main container
- Mobile navigation
- Mobile emergency bar

---

## Phase 3 – Homepage Hero

Build:

- Hero heading
- Emergency message
- Clinic photo
- Call button
- Directions button
- Open 24/7 badge
- Hero Motion animations

---

## Phase 4 – Services

Build reusable service cards.

Add:

- Anti-Rabies Vaccine
- Post Exposure
- Pre Exposure
- Booster Shot
- ERIG
- Tetanus Toxoid
- Consultation
- Wound care

---

## Phase 5 – Bite Guide

Create the step-by-step bite response section.

Ensure the wording remains educational and directs patients to professional assessment.

---

## Phase 6 – Pricing

Build pricing cards.

Keep pricing data separate from UI components.

---

## Phase 7 – Why Choose Us

Build benefits section.

Keep the wording factual and simple.

---

## Phase 8 – Gallery

Add clinic photos.

Implement responsive image gallery.

Optional lightbox.

---

## Phase 9 – FAQ

Use shadcn Accordion.

Create FAQ data file.

---

## Phase 10 – Location and Contact

Add:

- Address
- Google Map
- Directions
- Phone
- Opening hours
- Payment methods

---

## Phase 11 – About + Final CTA

Create:

- About section
- Final emergency CTA
- Footer

---

## Phase 12 – Responsive Testing

Test on:

- 360px
- 390px
- 430px
- 768px
- 1024px
- 1366px
- 1440px
- 1920px

Check:

- Navbar
- Cards
- Hero
- Buttons
- Font sizes
- Gallery
- Map
- Sticky action bar

---

## Phase 13 – Accessibility + Performance

Check:

- Lighthouse
- Alt text
- Keyboard navigation
- Image sizes
- Contrast
- Loading speed

---

## Phase 14 – SEO + Deployment

Add:

- Page titles
- Meta descriptions
- Open Graph tags
- Favicon
- Sitemap
- robots.txt

Deploy using:

- Vercel
- Netlify
- Cloudflare Pages

Any standard static hosting is suitable for the frontend-only version.

---

# 34. Future Phase – Admin Panel

Do not include this in Version 1 unless required.

Possible future modules:

```text
Dashboard
Services Management
Pricing Management
Gallery Management
FAQ Management
Contact Information
Announcements
Branches
Inquiries
```

Backend options later:

- Laravel API
- Supabase
- Firebase
- Node/Express

If the business only needs a simple informational website, an admin panel may not be necessary.

---

# 35. Future Feature Ideas

Possible additions:

- Appointment request
- Vaccination schedule reminder
- Multiple clinic branches
- Messenger integration
- Facebook page integration
- Announcements
- Patient instructions
- Downloadable clinic information
- Online inquiry
- Clinic status banner
- Holiday schedule
- Testimonials
- News / health education section

---

# 36. Important Content Verification Before Launch

Before publishing the website, confirm the following with the business owner:

- Official clinic name
- Official logo
- Exact address
- Google Maps location
- All phone numbers
- Current service list
- Current prices
- Senior/PWD discount rules
- Payment methods
- Opening hours
- Emergency availability
- Official Facebook/social media links
- Medical wording
- Clinic photographs
- Staff information if displayed

Do not publish unverified medical claims, prices, contact details, or treatment promises.

---

# 37. Recommended Version 1 Scope

Keep the first release simple.

## Build Now

- Responsive homepage
- Services
- Pricing
- Bite guide
- FAQ
- Clinic gallery
- Contact
- Google Maps
- Call button
- Directions button
- 24/7 emergency banner
- Mobile sticky buttons
- Motion animations

## Build Later

- Login
- Admin panel
- Appointment system
- Database
- Patient accounts
- Vaccine records
- Online payments
- Automated reminders

---

# 38. Final Website Direction

The site should follow this design principle:

```text
Emergency information first
↓
Services
↓
Basic guidance
↓
Pricing
↓
Trust / clinic information
↓
Location and contact
```

A visitor should be able to understand the most important information within the first few seconds:

```text
What clinic is this?
Is it open now?
What services are available?
How do I call?
Where is it?
How do I get directions?
```

The goal is not to make the website overly complicated.

The goal is to make the clinic **easy to trust, easy to contact, and easy to find**.
