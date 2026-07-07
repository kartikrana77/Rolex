"use client";

import { motion } from "framer-motion";
import InteractiveGear from "./InteractiveGear";

// Reusable animation variants for text sliding in
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20, mass: 1 } 
  },
};

const bentoVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 25, mass: 1 }
  }
};

export default function StoryBeats() {
  return (
    <div className="relative w-full z-10 text-white pb-32">
      {/* 
        HERO SECTION (Overview) - Remains full screen text overlaid on the watch 
      */}
      <section id="overview" className="h-[150vh] flex flex-col items-center justify-center pt-20 px-6 text-center pointer-events-none">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariant}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl">
            Rolex Yacht-Master II
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-6">
            Master the moment.
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light">
            Precision and power crafted for those who command the sea.
          </p>
        </motion.div>
      </section>

      {/* BENTO BOX GRID LAYOUT BEGINS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative pointer-events-auto">
        
        {/* Engineering Section */}
        <motion.section 
          id="engineering"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bentoVariant}
          className="col-span-1 md:col-span-12 p-10 md:p-16 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={textVariant}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Crafted for precision.
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6">
                The Yacht-Master II is designed to meet the needs of professional sailors. This regatta chronograph features the world's first programmable countdown with a mechanical memory, providing essential synchronization at the starting sequence of a race.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
                Every component—from the high-performance oscillator to the paraflex shock absorbers—is engineered to withstand the extreme conditions of competitive sailing, ensuring absolute reliability when seconds matter most.
              </p>
              <button className="group relative px-8 py-4 rounded-full overflow-hidden bg-white/10 hover:bg-white/20 transition-all duration-500 ease-out border border-white/20 hover:border-white/40">
                <span className="relative z-10 font-semibold text-white group-hover:tracking-widest transition-all duration-500">Discover Engineering</span>
              </button>
            </motion.div>
            
            <div className="h-[400px] w-full rounded-2xl bg-black/50 border border-white/5 overflow-hidden">
               {/* 3D Interactive Gear Element */}
               <InteractiveGear />
            </div>
          </div>
        </motion.section>

        {/* Movement Section */}
        <motion.section 
          id="movement"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bentoVariant}
          className="col-span-1 md:col-span-7 p-10 md:p-12 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl relative"
        >
           <motion.div variants={textVariant}>
            <h3 className="text-3xl font-bold mb-4">Calibre 4161</h3>
            <h4 className="text-xl text-accent-gold mb-6">A Masterpiece of Mechanical Artistry</h4>
            <p className="text-white/70 font-light leading-relaxed mb-6">
              The heart of the Yacht-Master II is the calibre 4161, a self-winding mechanical chronograph movement entirely developed and manufactured by Rolex. Its architecture, manufacturing quality, and innovative features make it singularly precise and reliable.
            </p>
            <p className="text-white/70 font-light leading-relaxed">
              Consisting of over 360 components, some of which are made using UV-LiGA micro-manufacturing technology, the calibre 4161 is a testament to Rolex's relentless pursuit of perfection. It took over 35,000 hours of development to bring this marvel to life.
            </p>
          </motion.div>
        </motion.section>

        {/* Small Data Bento */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bentoVariant}
          className="col-span-1 md:col-span-5 p-10 md:p-12 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col justify-center items-center text-center relative"
        >
          <motion.div variants={textVariant}>
            <div className="text-6xl md:text-8xl font-bold text-accent-blue mb-4">72<span className="text-4xl text-white/50">h</span></div>
            <p className="text-xl text-white/80 font-medium">Power Reserve</p>
            <p className="text-sm text-white/50 mt-4 max-w-xs mx-auto">
              Equipped with a high-capacity barrel, guaranteeing approximately 72 hours of uninterrupted performance.
            </p>
          </motion.div>
        </motion.section>

        {/* Craftsmanship Section */}
        <motion.section 
          id="craftsmanship"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bentoVariant}
          className="col-span-1 md:col-span-12 p-10 md:p-16 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl mt-6 relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={textVariant} className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Luxury in motion.
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Forged from 18 ct gold and highly resistant Oystersteel, the Yacht-Master II is as durable as it is striking. The Ring Command bezel operates not merely as a visual element, but interfaces directly with the movement itself.
              </p>
            </motion.div>
            
            <motion.div variants={textVariant} className="md:col-span-1 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-3">Cerachrom Insert</h4>
              <p className="text-white/60 font-light text-sm">
                The blue Cerachrom bezel insert in ceramic is virtually scratchproof, corrosion-resistant, and its color remains unaffected by ultraviolet rays. The numerals and graduations are coated in gold via PVD.
              </p>
            </motion.div>

            <motion.div variants={textVariant} className="md:col-span-1 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold mb-3">Oyster Bracelet</h4>
              <p className="text-white/60 font-light text-sm">
                The Oyster bracelet is a perfect alchemy of form and function. It features an Oysterlock folding safety clasp and the Easylink comfort extension link, allowing the wearer to increase the length by 5 mm.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Bento */}
        <motion.section 
          id="buy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={bentoVariant}
          className="col-span-1 md:col-span-12 p-16 md:p-24 rounded-[2rem] bg-gradient-to-br from-black/80 to-[#0A0A0C] backdrop-blur-2xl border border-white/10 shadow-2xl mt-6 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/20 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div variants={textVariant} className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Precision reborn.
            </h2>
            <h3 className="text-2xl md:text-3xl text-white/90 font-medium mb-12">
              Yacht-Master II — crafted for command.
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 rounded-full overflow-hidden bg-white hover:bg-white/90 transition-all duration-500 ease-in text-background">
                <span className="relative z-10 font-semibold text-lg transition-transform duration-500 group-hover:scale-105 inline-block">Experience Yacht-Master II</span>
              </button>
              <button className="group relative px-8 py-4 rounded-full overflow-hidden bg-transparent border border-white/30 hover:border-white transition-all duration-500 ease-in text-white">
                <span className="relative z-10 font-semibold text-lg transition-transform duration-500 group-hover:scale-105 inline-block">See full specs</span>
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
