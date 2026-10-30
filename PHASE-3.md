# ResumeForge AI — Phase 3

## Upgrade your existing project

1. Back up your existing `src/main.jsx` and `src/style.css` first.
2. Copy Phase 3 `src/main.jsx` and `src/style.css` over those files in your existing Vite project.
3. Keep `src/writingAssistant.js` from Phase 2 (the archive includes it as well).
4. In the VS Code terminal run `npm install` (only if needed) and `npm run dev`.
5. Check the editor, templates, mobile tabs, and print preview.

## What's new

- Six-section editor with step navigation, reorderable experience and education, and certifications.
- Five print-friendly resume templates and accent colors.
- Live preview, zoom controls, mobile Editor / Preview tabs.
- Writing suggestions show a before/after confirmation modal.
- Start Blank with confirmation; existing `resumeforge-draft` localStorage data is retained and migrated to include new fields.
- PDF export uses the native browser print dialog: choose **Save as PDF**, paper **Letter**, scale **100%**, margins **None**, headers and footers **Off**. Enable background graphics if you want accent colors.

## Important limitations

- This is browser print-to-PDF, not a direct binary PDF download. Results can vary by browser. Multi-page resumes flow naturally but may need print settings adjusted; test long resumes before launch.
- The writing assistant is deterministic rules, not a generative AI service.
- The draft is saved only on the visitor's current browser/device; no cloud backup.
- No visitor data is sent to a server by this app.
