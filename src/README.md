# Portfolio – Full Stack Engineer Showcase

This is a personal developer portfolio built with **React + Vite**, designed to showcase full-stack engineering experience, cloud-native projects, and real-world system design work. The portfolio emphasizes performance, maintainability, and production-ready patterns while remaining simple to extend.

---

## ✨ Key Features

- Modular React component architecture
- Vite-powered development and optimized builds
- GitHub Pages–compatible asset handling
- Responsive UI with Tailwind CSS
- Accordion-based content sections for scannability
- Support for both image and video project previews
- Clean separation of content, components, and static assets

---

## 🧱 Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Build Tooling:** Vite
- **Icons:** react-icons
- **Version Control:** Git + GitHub
- **Deployment Target:** GitHub Pages (`/Portfolio/` base path)

---

## 📁 Project Structure

Portfolio/
├── public/
│ ├── images/
│ ├── screenshots/
│ ├── BioHlth-screenshots/
│ └── videos/
│
├── src/
│ ├── components/
│ │ ├── Hero.jsx
│ │ ├── Skills.jsx
│ │ ├── Experience.jsx
│ │ ├── ProjectsDropdown.jsx
│ │ ├── ScreenshotGallery.jsx
│ │ ├── AccordionCard.jsx
│ │ ├── OpenSource.jsx
│ │ └── ContactModal.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── README.md
└── package.json

---

## 🧠 Key Implementation Decisions

### 1. **Public Asset Handling (Vite + GitHub Pages)**

All images and videos are stored in the `/public` directory and referenced using:

```js
import.meta.env.BASE_URL


Example:

imgSrc: `${import.meta.env.BASE_URL}screenshots/bhde-app.png`


This ensures:

Compatibility with local development

Correct resolution when deployed under /Portfolio/

No broken assets on GitHub Pages

Important: Assets in /public should never be imported directly into components.

2. Tech Stack Rendering (Skills Section)

The Tech Stack is rendered via a dedicated Skills.jsx component using a categorized data structure. Each skill is displayed as a badge-style button, allowing for:

Easy reordering or expansion

Consistent visual hierarchy

Clean separation of data and presentation

3. Accordion-Based Content Layout

Key sections (Projects, Experience, Open Source, Tech Stack) use a reusable AccordionCard component to:

Improve readability

Reduce visual overload

Allow recruiters to quickly scan relevant sections

4. Screenshot & Video Support

The ScreenshotGallery component supports project previews using image assets. Video support can be added by extending the component to conditionally render <video> elements when a videoSrc is present.

🚀 Running the Project Locally
npm install
npm run dev


Local dev server:

http://localhost:5173/Portfolio/

🧪 Common Pitfalls (Solved)

❌ Broken images due to incorrect /public paths

❌ techStack is not defined runtime errors

❌ Vite Fast Refresh issues caused by mixed exports

❌ Case-sensitive path mismatches on macOS

All resolved by:

Consistent asset referencing

Single source of truth for Tech Stack data

Proper component props usage

Restarting Vite after structural changes

📌 Future Enhancements

Add video previews to ScreenshotGallery

Lazy-load project assets for performance

Extract project data into a JSON or CMS-backed source

Add light/dark theme toggle

Add automated tests for core components

👤 Author

Jylian Summers
Senior Full Stack Engineer
Specializing in scalable systems, cloud-native architectures, and data-intensive applications.

📄 License

This project is for personal portfolio use.
All content and code are © Jylian Summers.




