"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  
  // Fade in navbar background after scrolling 50px
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.75)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.05)"]
  );

  const links = [
    { name: "Overview", id: "#overview" },
    { name: "Engineering", id: "#engineering" },
    { name: "Movement", id: "#movement" },
    { name: "Craftsmanship", id: "#craftsmanship" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 flex items-center justify-between px-8 py-4"
    >
      <div className="flex-1">
        <a href="#overview" onClick={(e) => handleScrollTo(e, "#overview")} className="text-white/90 font-bold tracking-wide uppercase text-sm cursor-pointer">
          Rolex Yacht-Master II
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.id}
            onClick={(e) => handleScrollTo(e, link.id)}
            className="text-white/60 hover:text-white transition-colors duration-500 ease-out relative group py-2"
          >
            {link.name}
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </a>
        ))}
      </div>
      
      <div className="flex-1 flex justify-end">
        <button 
          onClick={() => document.querySelector("#buy")?.scrollIntoView({ behavior: "smooth" })}
          className="px-5 py-2 rounded-full text-xs font-semibold text-white relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500 ease-in-out">Experience</span>
          <div className="absolute inset-0 bg-cta-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <motion.div 
            className="absolute inset-[1px] bg-[#050505] rounded-full z-0"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </button>
      </div>
    </motion.nav>
  );
}
