"use client"
import { useEffect, useState } from "react";


import { motion, useScroll, useTransform } from 'framer-motion';
import Cat from "@/stories/CatTracker/Cat";
// import Scroll from "@/stories/Scroll/Scroll";
import Scroll from "@/components/Scroll";
import Projects from "@/components/Projects/Projects";

export default function App() {


  // Track the scroll position
  const { scrollY } = useScroll();

  // Map the scroll position to different speed factors for layers
  const y1 = useTransform(scrollY, [0, 1000], [0, 700]); // Slower layer
  const y2 = useTransform(scrollY, [0, 1000], [0, 400]); // Faster layer

  return <>
    {/* <div className="section flex h-screen flex-col-reverse items-center justify-center text-left lg:flex-row">
      <div className="mb-10 flex flex-col items-center lg:mb-0 lg:w-1/2">
        <div>
          <motion.div style={{ y: y1, zIndex: 2, }}>
            <h1 className="mb-10 font-monospace text-4xl text-black lg:text-8xl">
              Hi! My name is <span className="bold">Parusha Pradhan</span>
              <div className="text-3xl">
                I am a web developer from Nepal.
              </div>
            </h1>
              
          </motion.div>
        </div>
      </div>
      <div data-testid="hero-img" className="mb-10 flex w-1/2 items-center justify-center">
        <Cat/>
      </div>
    </div> */}

    <div className="section">
      {/* <Scroll/> */}
    </div>
    <Projects/>

  </>;
}
