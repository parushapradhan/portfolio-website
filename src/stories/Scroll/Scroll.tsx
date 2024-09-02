import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const Scroll: React.FC = () => {
  const [lineHeight, setLineHeight] = useState(25); // Initial height is 25vh

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const shrinkFactor = (scrollTop / docHeight) * 25; // Calculate the amount to shrink
    const newHeight = 25 - shrinkFactor;

    // Ensure the line doesn't go below 0vh
    setLineHeight(newHeight > 0 ? newHeight : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="line-container">
        Scroll
      <div
        className="scroll-line"
        style={{ height: `${lineHeight}vh` }}
      ></div>
    </div>
  );
};

export default Scroll;
