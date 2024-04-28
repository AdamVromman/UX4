import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

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

  timeline.to("#circle-top", { rotate: 540, ease: "none", duration: 5 }, 0);
  timeline.to("#circle-bottom", { rotate: -540, ease: "none", duration: 5 }, 0);
};

window.addEventListener("load", initTimeline);
