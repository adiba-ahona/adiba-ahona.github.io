# Adiba Anbar Ahona — AI Portfolio

A responsive, recruiter-focused portfolio for applied AI and software roles. The site now presents seven selected builds, including the multi-agent business-intelligence system featured on LinkedIn, alongside research, experience, education and technical writing.

## Experience highlights

- Interactive neural-network canvas and animated AI capability map
- GSAP + ScrollTrigger reveals and parallax, with native IntersectionObserver fallbacks
- Filterable project gallery with implementation notes and honest scope statements
- Scroll progress, section-aware navigation, mobile menu and reduced-motion support
- LinkedIn build note and article links, GitHub source links and résumé download

## Run locally

Extract this ZIP, open a terminal in the extracted folder and run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No API key or npm installation is necessary.

## Edit

- index.html: introduction, research, experience, education and contact details
- styles.css: colors, typography, responsive layout and motion
- app.js: six project descriptions and spotlight controls
- Adiba_Ahona_AI_Resume.pdf: recruiter download

The website imports Google Fonts and GSAP from public CDNs and includes system-font and no-GSAP fallbacks. It links to project source code and RoomFit's live demo; it does not host the Python AI applications.

## Publish to your existing GitHub Pages repository

The GitHub connection in this session allowed reads but rejected branch creation with HTTP 403. No GitHub branch, commit, pull request or main-branch change was created.

1. Clone your existing portfolio repository on your computer, or open your local clone. Ensure any existing local edits are committed or stashed first.

```sh
git clone https://github.com/adiba-ahona/adiba-ahona.github.io.git
cd adiba-ahona.github.io
git switch -c portfolio/ai-refresh-2026
```

2. Copy the ZIP's index.html, styles.css, app.js and Adiba_Ahona_AI_Resume.pdf into the repository root. Replace the old index.html. Leave the old assets folder in place.

3. Commit and push only those four files:

```sh
git add index.html styles.css app.js Adiba_Ahona_AI_Resume.pdf
git commit -m "Refresh portfolio for applied AI and junior roles"
git push -u origin portfolio/ai-refresh-2026
```

4. Open the repository on GitHub and create a pull request from portfolio/ai-refresh-2026 to main. Review the changes, then merge when ready to replace your current website.

5. In repository Settings > Pages, confirm the source matches your existing deployment configuration. If it serves the main branch root, this layout needs no build step. Check the deployment result before sharing https://adiba-ahona.github.io/.

## Verification and scope

JavaScript syntax, HTML parsing, local asset references, browser rendering and accessibility-tree structure were checked on October 5, 2026. The design includes keyboard focus states, semantic landmarks, reduced-motion behavior and progressive enhancement. Project descriptions reflect the supplied résumé plus public GitHub and LinkedIn material; MSc ASR adaptation remains planned research.
