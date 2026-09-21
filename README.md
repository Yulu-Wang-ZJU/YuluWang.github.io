# Yulu Wang · Academic homepage

Live site: https://yulu-wang-zju.github.io/

A lightweight, responsive academic homepage for research and competition honors. The generated page works without JavaScript, external fonts, analytics, or a framework. Phone numbers, advisory roles, and private manuscript PDFs are intentionally not published.

## Update content

1. Edit `contents/home.md`, `publications.md`, `ongoing.md`, or `awards.md`.
2. Run `node build.cjs`. This uses the existing local Marked library; no installation is needed.
3. Preview `index.html` in a browser, or run `python -m http.server 8000` from this directory.
4. Commit both the source and generated `index.html`, and push to `main`. GitHub Pages publishes from the repository root.

Layout lives in `index.template.html`; visual styling lives in `static/css/academic.css`. `contents/config.yml` and the old Bootstrap scripts/styles are retained from the original template but are no longer loaded by the redesigned page.

## Editorial rules

- Accepted and published papers go in `publications.md`; submitted and developing work go in `ongoing.md`.
- LTTS is currently displayed as **NeurIPS 2026 · Under review** on this public homepage. Keep this public-facing label until the author requests an update.
- Do not describe a target venue as an acceptance or an incoming visit as a completed appointment.
- BioAlign is second-author work; the other current main research projects are first-author work.
- Do not infer missing coauthors or competition years.
- Do not upload unpublished manuscripts or data without a separate decision to release them.

## Attribution

The original repository is based on [Sen Li's academic homepage](https://github.com/senli1073/senli1073.github.io), distributed under the MIT license. The original `LICENSE` is preserved. The 2026 layout is a custom static redesign; the existing vendored Marked library is used only at build time and retains its license header.
