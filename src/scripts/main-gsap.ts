import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { chapters, getChaptersWidth } from "./services";

const scroller = document.getElementById("scroller");

console.log(scroller?.getBoundingClientRect().width);

const DURATION = 100,
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
      // snap: {
      //   snapTo: "labels",
      //   duration: 0.1,
      //   ease: "power2.out",
      //   onComplete: () => {
      //     console.log(scroller?.style.transform);
      //   },
      // },
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
  timeline.fromTo(
    "#scroller",
    { x: -document.body.clientWidth },
    {
      x: "-100%",
      ease: EASE,
      duration: DURATION,
    },
    START
  );

  let count = 0;

  chapters.forEach((x, index) => {
    const chapter = document.getElementById(x);

    let width = index;

    if (chapter) {
      const chapterWidth = chapter.getBoundingClientRect().width;
      width = (chapterWidth / getChaptersWidth()) * 100;
    }

    timeline.addLabel(`label-${x}`, count);

    if (index === 0) {
      timeline.to(
        `.parallax-plane-1-${x}`,
        { x: "-200px", ease: EASE, duration: width },
        `label-${x}`
      );
    } else {
      timeline.fromTo(
        `.parallax-plane-1-${x}`,
        { x: "100px" },
        { x: "-100px", ease: EASE, duration: width },
        `label-${x}-=${width / 2}`
      );
    }

    count += width;
  });
};

window.addEventListener("load", initTimeline);
