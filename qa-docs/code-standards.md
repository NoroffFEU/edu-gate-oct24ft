# EduGate – Project Standards

## Folder Structure:

- Organize files into folders by purpose:
    - `public/`
    - `src/`
    - `pages/`

#### For the time being: `Find the documents provided to you on Discord for more information.`

## File Naming Rules
 ### General Best Practices
- Follow `mobile-first design` using Tailwind
- Build small, reusable components
- Avoid leaving `console.log`in final code
- Test you pages on `multiple screen sizes`
- Separate your code into `folders by purpose` (scripts, styles, components)
- `Keep sensitive or personal files out of GitHub` using .gitignore
- Maintain a `README.md` with setup and usage instructions



## HTML Structure and Practices
- Use `semantic HTML5` tags: `<header>, <nav>, <main>, <section>, <footer>`
- Every img `must have a meaningful alt` attribute
- Use proper heading order: `<h1>, <h2>, <h3>…`
- Always include `lang attribute` in html for accessibility
- Add meta tags for charset, viewport, and SEO description



## Tailwind & Responsive Design
- Add `Tailwind` classes directly into your HTML
- Use `responsive prefixes`: sm:, md:, lg:, xl:, 2xl:
- Use `utility-first styling` (example: flex justify-between p-4 bg-white)
- Create `reusable styles with @apply in CSS` if needed



## Git & Version Control
- Add files like `.env, logs, and large design files to .gitignore`
- Use `meaningful commit messages`
- Only `push clean, working code` to the main branch



## HTML Quality Checklist
- `No syntax errors or warnings` (use W3C Validatior)
- Tags are `properly nested` (example: "li" is inside "ul")
- All images have `alt text`
- Headings follow `logical order` (h1, h2, h3)
- html tag includes lang attribute



## Deployment Checklist
- All features are merged into the `‘main’ branch`
- `Code has been tested locally` (no errors or broken links)
-` Visual layout` matches the design `pixel perfect`
- `API` integration `is working`
- Site has been `validated` (html + accessibility)



## How to make a Pull Request
1. Create a new branch (example: `feature/<feature-name>`)
2. Do your changes, commit often
3. Push your branch to GitHub
4. Go to GitHub → Open a Pull Request into `main`
5. Ask the Quality Assurance Engineer (Emmelin) for review before merging!

---

## Branch Naming Convention
### Main branches:
- Use `main` for production-ready code
- Use `develop` for integrating features before merging into main

Formats:
- `feature/<feature-name>` - for `new features`
- `bugfix/<issue-name>` - for `fixing bugs`
- `docs/<update-summary>` - for `documentation` updates
- `test/<purpose>` - for `tests`
- `release/<version>` - for `preparing a release`

---

## Recommended VS Code Plugins
- `Prettier`: for consistent code formatting
- `Tailwind CSS IntelliSense` – for autocomplete + class hints
- `GitHub Pull Requests` – to manage PRs inside VS Code