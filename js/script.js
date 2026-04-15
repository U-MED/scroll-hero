// Initialize GSAP & ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const frameCount = 78;
const animationObj = { frame: 0 };
const carFrame = document.getElementById("carFrame");

// 1. Preload Images
const images = [];
for (let i = 0; i <= frameCount; i++) {
    const img = new Image();
    img.src = `public/cars/car_${String(i).padStart(3, "0")}.jpg`;
    images.push(img);
}

// 2. Initial States
gsap.set("#content", { opacity: 0, y: 50, color: "#ffffff" });
gsap.set("#bgCar", { opacity: 0, y: 600, scale: 0.9 });
gsap.set(".stat-label", { color: "#cccccc" });
gsap.set("h2", { color: "#ffffff" });

// 3. Create Scroll Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=4500",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    },
});

// A. Car Sequence Animation
tl.to(animationObj, {
    frame: frameCount,
    duration: 4,
    snap: "frame",
    ease: "none",
    onUpdate: () => {
        const currentFrame = Math.floor(animationObj.frame);
        if (carFrame) {
            carFrame.src = `public/cars/car_${String(currentFrame).padStart(3, "0")}.jpg`;
        }
    },
});

// B. Transition to Black & Move Out
tl.to("#hero, #mainContainer", { backgroundColor: "#000000", duration: 1.5 }, "move-out");
tl.to("#carFrame", {
    x: "150%",
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
}, "move-out");

// C. Welcome Text & Bottom Car Reveal
tl.to("#content", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
}, "move-out+=2.5");

tl.to("#bgCar", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 2.5,
    ease: "power2.out",
}, "move-out+=3");

// D. Hold at the end
tl.to({}, { duration: 2 });
