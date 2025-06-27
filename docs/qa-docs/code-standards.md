# EduGate – Project Standards

### Where the documents are located: 
`Find the documents and pictures provided to you on Discord and GitHub Projects.`
## Folder Structure:

- Organize files into folders by purpose:
    - `public/`
    - `src/`
    - `pages/`


## File Naming Rules
 ### General Best Practices
- Follow `mobile-first design` using Responsive CSS
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


## Responsive CSS and Design Tips
- Stick to `mobile-first design`: style for small screens first
- Use `media queries` to apply styles at different screen sizes
- Use `flexbox or CSS grid` for responsive layouts
- Create `reusable CSS classes in components.css` (like: .btn, .card, .nav)
- `Test` layouts `regularly` on phone-sized and large screens


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


## Recommended VS Code Plugins
- `Prettier`: for consistent code formatting
- `Live Server`: to auto-refresh your browser on file save
- `GitHub Pull Requests`: to manage PRs inside VS Code