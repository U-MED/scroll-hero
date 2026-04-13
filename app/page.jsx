"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const frameCount = 78;
    const obj = { frame: 0 };

    // 🔥 preload frames (optimized)
    for (let i = 0; i <= frameCount; i += 2) {
      const img = new Image();
      img.src = `/cars/car_${String(i).padStart(3, "0")}.jpg`;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=6000",
        scrub: 2,
        pin: true,
      },
    });

    // 🎬 FRAME ANIMATION
    tl.to(obj, {
      frame: frameCount,
      duration: 4,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frame = Math.floor(obj.frame);
        const img = document.getElementById("car");
        if (img) {
          img.src = `/cars/car_${String(frame).padStart(3, "0")}.jpg`;
        }
      },
    });

    // 🚗 MOVE FRAMES RIGHT
    tl.to("#car", {
      x: window.innerWidth * 1.3,
      duration: 2.5,
      ease: "power1.inOut",
    });

    // ✨ CONTENT APPEARS (CENTERED)
    tl.to("#content", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // 🚗 BG CAR RISES FROM BELOW
    tl.fromTo(
      "#bgCar",
      {
        y: window.innerHeight,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power3.out",
      }
    );

  }, []);

  return (
    <main className="h-[200vh] bg-black text-white">

      <section
        id="hero"
        className="h-screen w-full relative overflow-hidden flex items-center justify-center"
      >

        {/* 🔵 BACKGROUND CAR */}
        <img
          id="bgCar"
          src="/car.png"
          alt="top car"
          className="
            absolute 
            w-[80vw] max-w-[600px] 
            left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 
            opacity-0 
            z-0
            pointer-events-none
          "
        />

        {/* 🟡 CONTENT (CENTERED + RESPONSIVE) */}
        <div
          id="content"
          className="
            absolute 
            inset-0 
            flex flex-col items-center justify-center 
            text-center 
            px-4 
            opacity-0 
            z-10
          "
        >
          <h1 className="
            text-xl sm:text-3xl md:text-5xl 
            tracking-[0.2em] md:tracking-[0.3em]
            whitespace-nowrap
          ">
            WELCOME ITZ FIZZ
          </h1>

          <div className="
            flex flex-wrap justify-center gap-6 md:gap-10 
            mt-8 md:mt-12
          ">
            <div>
              <h2 className="text-2xl md:text-3xl">95%</h2>
              <p className="text-gray-400 text-sm md:text-base">Performance</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl">80%</h2>
              <p className="text-gray-400 text-sm md:text-base">Engagement</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl">99%</h2>
              <p className="text-gray-400 text-sm md:text-base">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* 🔴 FRAME ANIMATION */}
        <img
          id="car"
          src="/cars/car_000.jpg"
          alt="frame animation"
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />

      </section>

    </main>
  );
}