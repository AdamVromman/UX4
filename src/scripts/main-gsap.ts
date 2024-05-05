import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  alphabetAnimation,
  biasesAnimation,
  brainstormAnimation,
  chapters,
  designPrinciplesAnimation,
  flippedAssumptionsAnimation,
  getChaptersWidth,
  randomWordsAnimation,
  targetAudienceAnimation,
  userScenariosAnimation,
  userStoriesAnimation,
  votingAnimation,
} from "./services";

const DURATION = 100,
  EASE = "none",
  START = 0;

const initTimeline = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      pin: true,
      start: "top top",
      scrub: 1,
      end: 30000,
    },
  });

  timeline.to(
    "#circle-top",
    { rotate: 1980, ease: EASE, duration: DURATION },
    START
  );
  timeline.to(
    "#circle-bottom",
    { rotate: -1980, ease: EASE, duration: DURATION },
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

      console.log(x + ": " + chapterWidth);
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

  timeline = brainstormAnimation(timeline);
  timeline = targetAudienceAnimation(timeline);
  timeline = designPrinciplesAnimation(timeline);
  timeline = alphabetAnimation(timeline);
  timeline = flippedAssumptionsAnimation(timeline);
  timeline = biasesAnimation(timeline);
  timeline = randomWordsAnimation(timeline);
  timeline = votingAnimation(timeline);
  timeline = userScenariosAnimation(timeline);
  timeline = userStoriesAnimation(timeline);
};

window.addEventListener("load", initTimeline);
