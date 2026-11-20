# Yago Mongelli — editable HTML/CSS website

A custom, buildless implementation of the KODA layout shown in the supplied screenshot.
The home page follows its full-screen background video, top wordmark/navigation,
48px BDO Grotesk Medium heading at bottom left, smaller introduction at bottom right,
and black footer. Tablet and phone layouts stack the text, as in the reference.

## Open the website

Open dist/index.html in a browser. No installation, account, framework or build command is needed.
When using the download ZIP, index.html is at the root, beside styles.css and main.js.
Upload the complete folder contents to a static web host when ready.

## Files to edit

- index.html: name, introductory text, background video and enquiry link.
- about.html: artist information, portrait, studio address, languages and telephone.
- collection.html: the portfolio index and its no-JavaScript fallback links.
- work.html: the shared individual-project layout.
- styles.css: type, spacing, colours, responsive layout and media sizing.
- portfolio.js: all six placeholder project titles, image paths, alt text and descriptions.
- main.js: video pause/play, reduced-motion support, portfolio previews and project pages.

The downloadable HTML pages are the actual website and can be edited directly.

## Replace the media

1. Replace assets/hero-video.mp4 with a short, muted MP4 of Yago tattooing. This file
   is currently an intentionally neutral, moving background placeholder, not footage
   of Yago or a portfolio example. The video already uses autoplay, muted, loop,
   playsinline and object-fit: cover.
2. Replace assets/hero-poster.svg with a photograph to show while video loads. To use
   a JPG, update the video poster in index.html and the .hero-media background in
   styles.css. Remove .video-placeholder-label from index.html when adding real footage.
3. Replace assets/portrait-placeholder.svg with a real portrait. Update src and alt
   text in about.html if the filename or extension changes.
4. Add tattoo photographs to assets/ and set their paths and real captions in
   portfolio.js. Six neutral image slots are provided; they do not represent invented
   completed projects. Optional project dates should be added only when known.
5. The HTML deliberately contains a noindex/nofollow tag while the portfolio is a
   placeholder. Remove that tag from every page when publishing the finished site.

All studio and artist details came from the information supplied in the conversation.
No prices, deposit rules, awards, testimonials, experience claims or booking availability
have been fabricated. Enquiry links open Yago's public Instagram profile; they do not
send a message or reserve an appointment. Confirm the supplied contact details before
launching the finished site publicly.

## Fonts and reference

The bundled BDO Grotesk Regular and Medium WOFF2 files are the same font files used
by the live KODA reference. They are included locally so the design works offline.
The typeface is licensed under the SIL Open Font License; its full license is in
assets/fonts/OFL-BDO-Grotesk.txt. Font source: https://github.com/LCTipografi/BDO-Grotesk

Visual reference: https://kodatattoo.framer.website/
KODA template by BLANK: https://www.framer.com/marketplace/templates/koda-tattoo/
This site uses custom HTML/CSS/JavaScript and neutral media placeholders. It does not
contain the KODA logo, its sample tattoo photographs/video, or its example business claims.

## Responsive and accessibility notes

- Desktop gutters: 64px. Tablet: 32px. Phone: 24px.
- Hero title: BDO Grotesk Medium, 48px, 100% line height, -0.04em tracking.
- Hero introduction and header links: 14px, matching the reference.
- Reduced-motion preferences pause the background video and show its poster.
- A visible pause/play button lets visitors stop motion.
- Semantic landmarks, page headings, alt text, keyboard focus styles and a skip link
  are included. There are no analytics, cookies or external font dependencies.
