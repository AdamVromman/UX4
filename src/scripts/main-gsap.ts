import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const DURATION = 5,
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
      end: 5000,
    },
  });

  timeline.to(
    "#circle-top",
    { rotate: 540, ease: EASE, duration: DURATION },
    START
  );
  timeline.to(
    "#circle-bottom",
    { rotate: -540, ease: EASE, duration: DURATION },
    START
  );
  timeline.to(
    "#scroller",
    { x: "-100%", ease: EASE, duration: DURATION },
    START
  );

  timeline.to(
    ".parallax-plane-1",
    { x: "200px", ease: EASE, duration: DURATION },
    START
  );
};

window.addEventListener("load", initTimeline);
