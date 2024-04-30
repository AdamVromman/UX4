import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const DURATION = 33,
  EASE = "none",
  START = 0;

const initTimeline = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      pin: true,
      start: "top top",
      scrub: 1,
      end: 20000,
    },
  });

  timeline.to(
    "#circle-top",
    { rotate: 1080, ease: EASE, duration: DURATION },
    START
  );
  timeline.to(
    "#circle-bottom",
    { rotate: -1080, ease: EASE, duration: DURATION },
    START
  );
  timeline.to(
    "#scroller",
    { x: "-100%", ease: EASE, duration: DURATION },
    START
  );

  for (let x = 0; x < 33; x++) {
    console.log(x);
    timeline.addLabel(`label-${x}`, x);
  }

  // timeline.to(
  //   ".parallax-plane-1",
  //   { x: "-200px", ease: EASE, duration: DURATION },
  //   START
  // );
};

window.addEventListener("load", initTimeline);
