# Kocaeli Tourism & Travel Guide

A modern, high-fidelity responsive promotional website for the city of Kocaeli, Turkey. Built entirely from scratch using pure vanilla web technologies to showcase the historical, cultural, geographical, and culinary riches of Kocaeli.

Developed as a term project for the **Web Programming** course.

---

## 🚀 Key Features

- **Premium Modern Design**: Sleek typography, balanced layouts, glassmorphism UI components, and subtle interactive micro-animations.
- **Dynamic Hero Slider**: A high-end 100vh hero slider featuring smooth Ken Burns (zoom/pan) transitions, slide-specific content overlays with staggered entry text animations, and custom visual progress pill indicators.
- **Unified Light/Dark Mode**: A one-button seamless dark/light theme toggle utilizing CSS variables with persistent state storage across sessions using `localStorage`.
- **Interactive Travel Guide Side-Panel**: A slide-out guide drawer loaded with resource documents (e.g., Kocaeli Travel PDF in a new tab) and essential travel tips.
- **Dynamic Sightseeing Filters**: An interactive travel recommendations section allowing users to filter places dynamically by categories (e.g., Nature, History, Beaches) without page reloads.
- **Rich Media Gallery**: An interactive image gallery displaying iconic spots of Kocaeli with smooth title overlays.
- **Robust Client-Side Form Validation**: An interactive contact/suggestion form checking for empty inputs, email formatting, and minimum message length with a character counter.

---

## 🛠️ Technology Stack & Constraints

In compliance with the project specifications, this application is built with **zero external dependencies**:

- **HTML5**: Structured using semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure accessibility (a11y) and SEO best practices.
- **CSS3 (Custom Style System)**: Fully responsive, mobile-first design leveraging CSS variables, Flexbox, CSS Grid, custom keyframe animations, and backdrop-filters. No Bootstrap, Tailwind, or external UI toolkits.
- **Vanilla JavaScript (ES6+)**: Pure, modular JavaScript handling slider mechanics, form validation, theme switches, and side-panel drawers. No jQuery, React, Vue, or other frameworks.
- **No Build Tools**: Fully functional out-of-the-box by double-clicking `index.html`. No `npm`, `Webpack`, `Vite`, or bundlers required.

---

## 📂 Project Structure

```text
web_programlama/
├── index.html                  # Main entrance point
├── README.md                   # Project documentation (this file)
├── AGENTS.md                   # AI Agent instructions
├── assets/
│   ├── css/
│   │   └── style.css           # Custom styles, transitions, variables & theme definitions
│   ├── js/
│   │   └── main.js             # Form validation, slider, filters & theme logic
│   ├── docs/
│   │   └── kocaeli-gezi-rehberi.pdf  # Downloadable PDF travel guide
│   └── img/                    # Organized asset directory
│       ├── hero/               # Hero slider backgrounds
│       ├── places/             # Sightseeing cards
│       ├── foods/              # Culinary cards
│       └── gallery/            # Visual gallery
```

---

## 💻 How to Run Locally

Since this is a static website with zero build steps, you can run it directly:

1. **Option 1**: Double-click `index.html` to open it in any modern web browser.
2. **Option 2** (Recommended for local dev): Serve using any standard local development server (e.g., VS Code's Live Server, `npx serve`, or Python's `http.server`).

---

## 👤 Developer

- **Muhammet Berat Celik** - Design, Frontend Development, JS Interactions & Content
