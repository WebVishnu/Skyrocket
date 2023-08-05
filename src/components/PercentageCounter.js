"use client"
import React, { useState, useEffect } from 'react';

const PercentageCounter = ({ targetPercentage, duration }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const startPercentage = currentPercentage;
    const difference = targetPercentage - startPercentage;
    let startTime = null;

    function animatePercentage(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newPercentage = Math.floor(startPercentage + difference * progress);
      setCurrentPercentage(newPercentage);
      if (progress < 1) {
        requestAnimationFrame(animatePercentage);
      }
    }

    const animationFrame = requestAnimationFrame(animatePercentage);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [currentPercentage, targetPercentage, duration]);

  return <div>rate By <span className='text-[#FF72AC]'> {currentPercentage}%</span></div>;
};

export default PercentageCounter;
