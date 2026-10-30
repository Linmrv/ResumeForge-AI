# ResumeForge Phase 2: $0 writing assistant

This update is **not generative AI**. It uses deterministic rules inside the browser. It makes no API calls and costs $0 per visitor.

## Update an existing project

1. Replace `src/main.jsx` with the included file.
2. Replace `src/style.css` with the included file.
3. Add `src/writingAssistant.js` from this update.
4. In the VS Code terminal, run `npm run dev` (or refresh if Vite is already running).

The existing `package.json` and `index.html` do not need changes.

## Test

- Type `responsible for helping customers` into a work experience field and click **Polish experience**.
- Click **Undo last change** to restore the original text.
- Add a job title and skills, then click **Generate from my details** under Professional summary.
- Paste a job posting into the keyword suggestions box.
- Click **Download PDF** and choose Save as PDF.

## Notes

- Resume drafts are stored in localStorage in the visitor's browser, not on a server. This is convenient but not secure storage for highly sensitive information on shared devices.
- The job posting is kept only in React component state, not stored in localStorage.
- The assistant never fabricates numeric results or employment dates. Generated text still requires user review.
- To add true AI later, use a secure backend and a provider API key stored server-side.
