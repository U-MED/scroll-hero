# Scroll Hero | Cinematic Supercar Animation

A high-performance, frame-by-frame scroll animation project built with a lightweight, framework-agnostic stack. This project features a seamless transition from a rotating supercar sequence to a premium dark-themed showcase.

## 🚀 Technologies Used & Functionality

This project utilizes a modern, hybrid tech stack to achieve high-performance animations without the weight of a framework:

- **HTML5 (Structure)**: 
  - Provides the semantic foundation for the viewport. 
  - Uses the `<canvas>`-like approach with `<img>` swapping for the car sequence and absolute layering for the HUD (Heads-Up Display).

- **CSS3 (Layout & Core Motion)**: 
  - Defined in `css/style.css`. 
  - Handles the base `100vh` section lockdowns, prevents horizontal layout breaks (`overflow-x: hidden`), and manages smooth transitions for background color shifts.

- **Tailwind CSS (Utility Styling)**: 
  - Used for rapid UI building and responsive adjustments. 
  - Handles positioning (`absolute`, `inset-0`), z-index layering, and flexbox centering without writing verbose CSS.

- **Bootstrap 5 (Grid & UI Components)**: 
  - Leverages the **Bootstrap Grid System** (`row`, `col`) for the final result screen. 
  - Ensures that statistical data points stay perfectly aligned and readable across different device widths using established typography classes.

- **JavaScript (Vanilla Logic)**: 
  - Located in `js/script.js`. 
  - Manages the **image preloading engine** to ensure all 78 frames are cached in the browser's memory before the user starts scrolling, preventing "flicker."

- **GSAP - GreenSock (Animation Engine)**: 
  - The "brain" of the project. 
  - Choreographs multiple complex animations: frame stepping, object horizontal movement (`xPercent`), and scale/opacity transitions simultaneously.

- **ScrollTrigger (Scroll orchestration)**: 
  - Bridges the gap between scroll position and animation time. 
  - Uses a `scrub` value of `1`, meaning the animation catches up to the scroll position perfectly, creating a "hand-controlled" feel.

---

### 🛡️ Why use CDNs (Tailwind, Bootstrap, GSAP)?

In this project, we prioritize **portability** and **performance**:
1. **Zero Configuration**: No need for `npm install` or local build steps. The project works instantly upon opening `index.html`.
2. **Optimized Delivery**: Files are served from global edge networks, often making them faster to load than local files if the user's browser has already cached them from other sites.
3. **GitHub Ready**: Perfect for GitHub Pages or static hosting where you want to keep the repository size small and avoid checking in heavy `node_modules` folders.
4. **Reliability**: Using official CDNs ensures that you are always using stable versions of these libraries.

## ✨ Key Features

- **78-Frame Image Sequence**: Smoothly animated supercar rotation triggered by user scroll.
- **Seamless Black Transition**: Dramatic background color shift and text reveal as the car moves out of frame.
- **Cinematic Reveal**: Delayed content entrance with a customized "bottom-to-top" slide effect for the final car showcasing.
- **Dynamic Statistical HUD**: Animated performance, engagement, and satisfaction metrics.
- **Fully Responsive**: Optimized for all screen sizes from mobile to ultra-wide desktops.

## 📁 Project Structure

```text
scroll-hero/
├── index.html         # Main project entry point (HTML / Bootstrap / Tailwind)
├── css/
│   └── style.css      # Custom styling and layout overrides
├── js/
│   └── script.js      # GSAP timeline logic and ScrollTrigger configuration
├── public/
│   ├── cars/          # Car rotation frame sequence (000-078)
│   └── car.png        # High-res asset for the final reveal
└── README.md          # Project documentation
```

## 🛠️ How to Run Locally

1. **Download/Clone** the repository to your local machine.
2. Ensure you have an **active internet connection** (required for Tailwind, Bootstrap, and GSAP CDNs).
3. Open **`index.html`** in any modern web browser (Chrome, Safari, Edge, or Firefox).
4. **Scroll down** to experience the animation.

## ⚙️ Customization

- **Animation Speed**: To adjust how fast the animation plays out, modify the `end: "+=5000"` value in `js/script.js`. A higher value makes the scroll longer/slower.
- **Transition Delay**: The wait time for the black screen can be adjusted by changing the labels (e.g., `move-out+=2.5`) in the GSAP timeline.

---
Created for Itz Fizz
