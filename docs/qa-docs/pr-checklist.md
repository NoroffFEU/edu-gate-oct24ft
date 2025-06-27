# EduGate – Project Standards

## Purpose

This document helps all developers follow the same quality standards before opening a pull request for your sites. It ensures readable, accessible, and well-tested code across the entire team.

### Where the documents are located: 
`Find the documents and pictures provided to you on Discord and GitHub Projects.` 


## 1. File & Code Cleanliness:

- Remove all `console.log`, `debugger`, or test code.
- No commented-out blocks unless necessary (explain why if kept).
- Code should be **clean and consistent** with formatting rules.

## 2. HTML/CSS/JS Best Practices:

- **Semantic HTML** elements used properly (`<header>`, `<main>`, `<section>`).
- Class names **follow naming conventions** (kebab-case).
- Avoid inline styling unless **absolutely necessary**.

## 3. Accessibility (a11y):

- All images must **have alt text** (even decorative ones).
- Use **correct heading levels** – don’t skip from `<h1>` to `<h3>`.
- Interactive elements are keyboard-accessible (check `tabindex`, `role` if needed).
- Colour contrast passes **WCAG AA standards**.

## 4. Functional Testing

- Test all components/pages in mobile, tablet, desktop viewports  
  (**320px ➔ 2560px**).
- **Check all links and buttons** – no dead links or broken actions.
- If using forms, check validation, required fields, and error handling.
- Interactions (like modals, dropdowns, etc.) should **work smoothly**.

## 🛠 5. Git & Pull Request Etiquette

- Branch is **up-to-date** with `main` and has no merge conflicts.
- **Meaningful commit** messages (no “update” or “fix1”).
- PR title is clear (e.g. “Fix mobile nav bug” or “Add login error handling”).
- Description explains **what** was done and **why**.
- Mention relevant issue numbers (e.g. `closes #18`).
- Add **screenshots or recordings** for UI changes.