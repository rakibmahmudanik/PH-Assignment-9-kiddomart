# 🧸 KiddoMart - Online Toy Marketplace

A vibrant, fully responsive, and modern toy marketplace web application where users can browse, search, and manage their favorite toys. Built with a minimalist and clean aesthetic, the platform offers a seamless experience for toy enthusiasts and parents alike.

🌐 **[Live URL](https://)** _(Replace with your actual hosted link)_

---

## 🚀 Purpose

The primary goal of **KiddoMart** is to simplify and enrich the experience of discovering, showcasing, and purchasing toys online. It serves as a centralized marketplace where users can seamlessly explore diverse toy categories, view detailed specifications of individual products, and securely manage their personal toy listings and shopping carts through a protected user ecosystem.

---

## ✨ Key Features

- **🔒 Secure Authentication:** Implements robust Email/Password authentication and Google One-Click sign-in powered by Firebase Auth.
- **🛒 Interactive Cart & State Management:** Features a real-time, global cart state managed smoothly via modern React architecture. Adding items dynamically updates badge counters and instantly calculates totals.
- **👤 Protected User Profile:** A private, secure profile dashboard where authenticated users can view their information and update their display name or profile picture securely.
- **📱 Modern UI Layouts:** Crafted using the latest Tailwind CSS and DaisyUI components, ensuring a flawless visual and interactive experience across mobile devices, tablets, and desktops.
- **🎪 Dynamic Component Slides & Carousels:** Enhances the homepage visual layout using Swiper sliders for modern banners and React Fast Marquee for infinite looping testimonials or product highlights [cite: 1].
- **✨ Engaging UI Interactions:** Utilizes the AOS (Animate on Scroll) library to inject performance-optimized transitions and SweetAlert2/React-Toastify for beautiful, responsive user notification alerts.

---

## 📦 NPM Packages Used

The following dependencies were used to build the features of this application:

### Core & Routing

- **react** & **react-dom** – The foundational library for building the user interface.
- **react-router** – Handles all client-side routing, page navigation, and protected private paths.

### Backend & Data Fetching

- **firebase** – Powers user authentication (Email/Password and Google Login).
- **axios** – Used to fetch toy data from the database/API efficiently.

### UI Styling & Layouts

- **tailwindcss** & **@tailwindcss/vite** – Used for modern, responsive utility-first CSS styling.
- **daisyui** – Provides clean, ready-to-use UI components like cards, buttons, and tables.
- **swiper** – Powers the responsive touch sliders and product carousels.
- **react-fast-marquee** – Creates smooth, infinite looping banners and testimonials [cite: 1].

### Icons & Aesthetics

- **lucide-react** & **react-icons** – Provides clean vector icon packs for navigation, buttons, and action links.
- **aos** – Adds beautiful scroll-driven animations to elements as you browse the page.

### Alerts & Notifications

- **sweetalert2** – Used for crisp, responsive confirmation popups and modal alerts.
- **react-toastify** – Provides smooth toast notifications for quick user feedback (e.g., "Added to Cart!").

---

## 🛠️ Installation & Local Setup Guide

Follow these steps to set up and run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/rakibmahmudanik/PH-Assignment-9-kiddomart.git](https://github.com/rakibmahmudanik/PH-Assignment-9-kiddomart.git)
   ```
