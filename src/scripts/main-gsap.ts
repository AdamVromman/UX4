import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const DURATION = 34,
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
      end: 30000,
      snap: { snapTo: "labels", duration: 0.1, ease: "power2.out" },
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

  for (let x = 0; x < 34; x++) {
    timeline.addLabel(`label-${x}`, x);

    if (x === 0) {
      timeline.to(
        `.parallax-plane-1-${x}`,
        { x: "-200px", ease: EASE, duration: 1 },
        `label-${x}`
      );
    } else {
      timeline.fromTo(
        `.parallax-plane-1-${x}`,
        { x: "100px" },
        { x: "-100px", ease: EASE, duration: 1 },
        `label-${x}-=0.5`
      );
    }
  }
};

window.addEventListener("load", initTimeline);
