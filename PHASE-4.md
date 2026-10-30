# ResumeForge Phase 4 — Public Website

## Installation
1. Back up your current project folder.
2. Copy `src/main.jsx`, `src/style.css`, `src/writingAssistant.js`, `src/publicPages.jsx`, `src/landing.css`, `index.html`, and the `public/` directory from this ZIP into your existing Vite project. Keep your existing package.json if it works.
3. Run `npm install` (if necessary), then `npm run dev`.
4. Open `/` for the homepage and `/builder` for the resume editor.

## Pages
- `/` homepage
- `/builder` existing Phase 3 editor
- `/about`, `/privacy`, `/terms` informational pages

## Before public launch
- Add real operator contact information and review privacy/terms text for accuracy.
- Deploy with SPA fallback routing (for example, Vercel or Netlify) so direct links to `/builder` work.
- Test on a phone and verify PDF output in Chrome, Edge, and Firefox.
- Add a real domain and a sitemap with your actual domain, then verify in Google Search Console.
- No analytics, ads, or AI API calls are included. Update the privacy policy if adding any of these.
- This build uses browser local storage; clearing site data can delete drafts.
