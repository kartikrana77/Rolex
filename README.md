# ⌚ Rolex Yacht-Master II - Ultra-Premium Landing Page
 <!-- Replace with your actual hero screenshot -->

A hyper-premium, Awwwards-level cinematic scrollytelling landing page built for the Rolex Yacht-Master II. This project transforms a standard product page into an interactive, luxury editorial experience. As the user scrolls, a high-resolution 192-frame image sequence of the watch dissects and reassembles perfectly synced to smooth storytelling beats and 3D interactions.

## ✨ Features

*   **Cinematic Scrollytelling**: A sticky `HTML5 <canvas>` preloads 192 ultra-high-definition frames, mapping playback precisely to the user's scroll progress for a buttery-smooth product reveal.
*   **Modern Bento Box Layout**: Editorial copy is beautifully contained within a CSS Grid-powered glassmorphism "Bento Box" layout. Translucent backgrounds, blur filters, and tight spacing evoke a modern luxury aesthetic.
*   **Fluid Interactions & Animations**: Integrated with Framer Motion, all text blocks elegantly slide from hidden to visible as they enter the viewport. Hover states on buttons are precisely timed with ease-in delays.
*   **Interactive 3D Elements**: Uses React Three Fiber to render an abstract, rotating 3D mechanical gear inside a bento box that subtly reacts to the user's mouse position on the screen.
*   **Luxury Custom Cursor**: The native cursor is replaced with an interactive gold dot and a delayed trailing ring that smoothly scales and snaps to interactive elements (buttons, links).
*   **Buttery Smooth Scrolling**: Powered by `React Lenis`, native scrolling is hijacked to provide a high-end, zero-stutter scrolling experience standard on top-tier design websites.

---

## 📸 Screenshots

<img width="1920" height="921" alt="Rolex Yacht-Master II _ Master the moment and 2 more pages - Personal - Microsoft​ Edge 08-07-2026 00_37_40" src="https://github.com/user-attachments/assets/f508acc2-abe5-45b0-b1bc-0469f818c788" />

<img width="1920" height="921" alt="Rolex Yacht-Master II _ Master the moment and 2 more pages - Personal - Microsoft​ Edge 08-07-2026 00_37_46" src="https://github.com/user-attachments/assets/254efce9-50b4-438b-b313-24c3ed6033cd" />

<img width="1920" height="918" alt="Rolex Yacht-Master II _ Master the moment and 2 more pages - Personal - Microsoft​ Edge 08-07-2026 00_37_55" src="https://github.com/user-attachments/assets/1b4b46e6-8b98-44f3-97ef-6a244dd747ca" />


<img width="1920" height="921" alt="Rolex Yacht-Master II _ Master the moment and 2 more pages - Personal - Microsoft​ Edge 08-07-2026 00_38_04" src="https://github.com/user-attachments/assets/9993768f-71c6-40bf-a58c-ac8c8941c1a6" />

<img width="1920" height="918" alt="Rolex Yacht-Master II _ Master the moment and 2 more pages - Personal - Microsoft​ Edge 08-07-2026 00_38_11" src="https://github.com/user-attachments/assets/50eee159-18b3-4a77-abfc-d619db94a36d" />



## 🛠️ Tech Stack & Implementation Details

This project is built using modern front-end web technologies designed for peak performance and aesthetics:

### Core Framework
*   **[Next.js 14](https://nextjs.org/) (App Router)**: The React framework utilized for its robust structure, server-side rendering capabilities, and seamless routing.
*   **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety and improves developer experience across the complex React components.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Used for rapid, utility-first styling. Extended with custom luxury color palettes (`#050505` background, `#0050FF` Royal Blue, `#FFD700` Gold) and gradients.

### Animation & Interactivity
*   **[Framer Motion](https://www.framer.com/motion/)**: The powerhouse behind the scroll-linked animations, text slide-ins, custom cursor physics (springs), and complex hover states.
*   **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & Drei**: A React wrapper for Three.js used to render lighting, shadows, and the interactive floating 3D gear.
*   **[Lenis](https://lenis.studiofreight.com/)**: A lightweight smooth scroll library that fundamentally alters how the page moves, providing momentum and weight to the user's scroll wheel.
*   **HTML5 Canvas**: Used instead of a video player to achieve perfectly frame-accurate scrub-playback of the watch image sequence tied to scroll progress.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kartikrana77/Rolex.git
   cd Rolex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *This will install all necessary packages including Next.js, Framer Motion, Three.js, and Lenis.*

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to experience the landing page.

---

## 📁 Project Structure

```text
rolex-yacht-master-ii/
├── app/
│   ├── layout.tsx         # Global layout wrapping Lenis Smooth Scroll & Custom Cursor
│   ├── page.tsx           # Main assembly of Navbar, Canvas Sequence & Bento Boxes
│   └── globals.css        # Tailwind directives and custom scrollbar CSS
├── components/
│   ├── CanvasSequence.tsx # The <canvas> engine for scroll-linked frame playback
│   ├── CustomCursor.tsx   # Framer Motion cursor logic
│   ├── InteractiveGear.tsx# Three.js 3D mechanical element
│   ├── Navbar.tsx         # Glassmorphic top navigation
│   ├── SmoothScroll.tsx   # React Lenis wrapper
│   └── StoryBeats.tsx     # The core Bento Box grid and editorial content
├── public/
│   └── assets/
│       └── frames/        # The 192 ultra-high-resolution watch frames
└── package.json           # Dependencies
```

---

## 🔒 Environment Variables

This project is entirely front-end driven and currently **does not require any `.env` files or API keys** to run. All data and assets are self-contained. 

*(If you plan to add backend features, forms, or analytics later, create a `.env.local` file and ensure it is listed in your `.gitignore`)*

---

*Designed and engineered as a showcase of modern web storytelling and creative development.*
