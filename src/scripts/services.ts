export const chapters = [
  "title-card",
  "intro",
  "project-poster",
  "start",
  "brainstorms",
  "target-audience",
  "ecosystem-mapping",
  "target-audience-interview",
  "design-principles",
  "competitor-analysis",
  "alphabet",
  "flipped-assumptions",
  "biases",
  "crazy-8",
  "random-words",
  "converging-voting",
  "converging-personas",
  "convering-feature-matrix",
  "goals",
  "written-guidelines",
  "user-scenarios",
  "storyboards",
  "user-stories",
  "user-journeys",
  "prototype-technical-logic",
  "prototype-1",
  "prototype-2",
  "prototype-ipad",
  "prototype-app",
  "test-1",
  "test-2",
  "test-3",
  "conclusions",
];

export const getChaptersWidth = () => {
  let totalWidth = 0;

  const chapters = document.getElementsByClassName("chapter");
  for (const chapter of chapters) {
    totalWidth += chapter.getBoundingClientRect().width;
  }

  return totalWidth;
};
