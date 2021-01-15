import { useState, useEffect } from 'react';
import Intro from '../slides/1-intro';
import WhatItIsnt from '../slides/2-what-it-isnt';
import WhatItIs from '../slides/3-what-it-is';

export default function Home() {
  const [slide, setSlide] = useState(1);

  const slideToComponent = (slideIdx) => {
    const slides = {
      1: <Intro />,
      2: <WhatItIsnt />,
      3: <WhatItIs />,
    };

    return slides[slideIdx];
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        setSlide(slide + 1);
      } else if (e.key === 'ArrowLeft') {
        setSlide(slide - 1);
      }
    });
  });

  return (
    <>
      { slideToComponent(slide)}
    </>
  );
}
