import { useState, useEffect } from 'react';
import Intro from '../slides/1-intro';
import WhatItIsnt from '../slides/2-what-it-isnt';
import WhatItIs from '../slides/3-what-it-is';
import WhatDoesItLookLike from '../slides/4-what-does-it-look-like';
import WhatDoesItLookLike2 from '../slides/5-what-does-it-look-like-2';
import IsntThatShit from '../slides/6-isnt-that-shit';
import ButWhy from '../slides/7-but-why';
import Responsive from '../slides/8-responsive';
import Pseudo from '../slides/9-pseudoclasses';

export default function Home() {
  const [slide, setSlide] = useState(1);

  const slideToComponent = (slideIdx) => {
    const slides = {
      1: <Intro />,
      2: <WhatItIsnt />,
      3: <WhatItIs />,
      4: <WhatDoesItLookLike />,
      5: <WhatDoesItLookLike2 />,
      6: <IsntThatShit />,
      7: <ButWhy />,
      8: <Responsive />,
      9: <Pseudo />,
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
