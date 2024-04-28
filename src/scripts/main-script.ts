const main = () => {
  const visiblePageWidthItems =
    document.getElementsByClassName("visible-page-width");
  for (let item of visiblePageWidthItems) {
    const HTMLItem = item as HTMLElement;
    HTMLItem.style.width = `${window.innerWidth - window.innerHeight / 4}px`;
  }
};

window.addEventListener("load", main);
