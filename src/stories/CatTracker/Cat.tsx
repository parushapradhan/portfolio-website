import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment
} from "@rive-app/react-canvas";
import './Cat.css';

const Cat: React.FC = () => {
  const { rive, RiveComponent } = useRive({
    src:
      "background.riv",
    autoplay: true,
    stateMachines: "Cat",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    })
  });

  const [maxWidth, setMaxWidth] = useState();
  const [maxHeight, setMaxHeight] = useState();

  const xAxisInput = useStateMachineInput(rive, "Cat", "xAxis", 0);
  const yAxisInput = useStateMachineInput(rive, "Cat", "yAxis", 0);

  // Track the scroll position
  const { scrollY } = useScroll();

  // Map the scroll position to different speed factors for layers
  const y1 = useTransform(scrollY, [0, 1000], [0, 700]); // Slower layer
  const y2 = useTransform(scrollY, [0, 1000], [0, 400]); // Faster layer


  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setMaxWidth(bodyRect.right);
      setMaxHeight(bodyRect.bottom);
    }
  }, []);

  useEffect(() => {
    const update = (e) => {
      if (maxWidth && maxHeight && yAxisInput && xAxisInput) {
        xAxisInput.value = (e.x / maxWidth) * 100;
        yAxisInput.value = 100 - (e.y / maxHeight) * 100;
      }
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

  return (
    <div>
    <motion.div style={{ y: y2, zIndex: 1, }}>
      <RiveComponent className="full-screen" />
    </motion.div>
  </div>
  );
};

export default Cat;
