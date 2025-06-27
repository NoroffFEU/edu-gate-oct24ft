# QA Testing Notes – EduGate Project

This document is used by the **Quality Assurance Engineer** to log bugs, track test progress, and highlight anything that needs extra attention.

It helps maintain consistent quality and catch issues early across everyone's work.

---

## 🐛 Found Bugs / Visual Issues

Log bugs or weird UI behavior here as you test.

| Page/Component | Description of Issue | Screenshot/Steps to Reproduce | Status |
|----------------|----------------------|-------------------------------|--------|
| Navbar         | Mobile nav doesn’t close | Click menu > select link > stays open | ❌ Open |

> Tip: Use ✅ / ❌ / 🔧 to mark status

---

## ✅ What to Test (Checklist)

### 🔧 Functionality
- [ ] Links and buttons work (no dead links)
- [ ] Forms validate correctly and give feedback
- [ ] Modals/dropdowns open + close as expected
- [ ] No console errors or warnings

### 📱 Responsiveness
- [ ] Layout adapts from **320px** to **2560px**
- [ ] No overflow/scrolling issues on mobile
- [ ] Font size is legible on all devices

### ♿ Accessibility
- [ ] All images have `alt` text
- [ ] Proper heading structure (`<h1>` ➝ `<h2>`, no skips)
- [ ] Keyboard navigation works (tab through all interactives)
- [ ] Good color contrast (check against [WCAG AA](https://webaim.org/resources/contrastchecker/))

### 🌐 Browser Compatibility
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Mobile browser tested (Safari iOS / Chrome Android)

---

## 🧠 General QA Reminders
- [ ] Remove `console.log()` and debugging code
- [ ] Follow naming conventions (e.g., `kebab-case`, folder structure)
- [ ] Keep consistent padding/margin/spacing
- [ ] Check for typos or broken text

---

## 📝 Notes or Questions

Use this section to drop random thoughts, doubts, or things that need discussion with the devs:

- "This animation feels a bit jumpy—should it be smoother?"
- "Do we want the button to stay visible on scroll?"
- "Can someone double check the `product.html` responsiveness?"

---

## 📸 Optional: Visual Checklist

Insert screenshots or links to test logs below (can also drag into VSCode or GitHub):