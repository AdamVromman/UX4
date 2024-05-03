const main = () => {
  const visiblePageWidthItems =
    document.getElementsByClassName("visible-page-width");
  for (let item of visiblePageWidthItems) {
    const HTMLItem = item as HTMLElement;
    HTMLItem.style.minWidth = `${
      document.body.clientWidth - window.innerHeight / 4
    }px`;
  }
};

window.addEventListener("load", main);
