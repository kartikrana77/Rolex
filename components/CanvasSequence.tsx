"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 192;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // frame_00000.png to frame_00191.png
      const frameNumber = i.toString().padStart(5, '0');
      img.src = `/assets/frames/frame_${frameNumber}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Draw the first frame once everything is loaded
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (index: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = imgs[index];
    if (!img) return;

    // The frames are likely 16:9 or similar. We should draw them covering or containing the canvas
    // A high-end Apple style usually contains the product nicely in the center.
    // Assuming frames have dark background matching #050505
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate aspect ratio for cover/contain. We'll use 'cover' logic if we want to fill, 
    // but typically for product spins, 'contain' with centered drawing is better.
    // Let's use a contain-like approach that scales up based on height.
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    // We want the watch to be nicely sized. 
    // If it's a floating watch on a matched background, we can just cover.
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    // Fill the background to ensure no seams if the aspect ratio doesn't perfectly match
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // Map scroll progress (0 to 1) to frame index (0 to 191)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(Math.round(latest));
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div className="sticky top-0 left-0 w-full h-screen bg-[#050505] -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
