import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollPosition / maxScroll;
      setScrollY(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants for ripple effect
  const rippleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  // Sample text to scroll
  const scrollableText = "Scroll";

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Scrollable text on top */}
      <div className="absolute top-0 left-0 right-0 flex flex-col  h-16 z-10">
        <div className="flex">
          {scrollableText.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={rippleVariants}
              className="text-4xl font-bold mx-1"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Vertical line that reduces in height as you scroll */}
        <motion.div
          style={{ scaleY: 1 - scrollY }}
          className="w-[2px] bg-red origin-top mt-2"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 1 - scrollY }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
    </div>
  );
};

export default Scroll;
