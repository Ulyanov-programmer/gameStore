const elementWithHorScrollSelectors = ".companies-row";
let elementWithHorScroll = document.querySelector(elementWithHorScrollSelectors);
function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  elementWithHorScroll.scrollLeft -= delta * 40;
  e.preventDefault();
}
elementWithHorScroll.addEventListener("mousewheel", scrollHorizontally, false, { passive: true });
elementWithHorScroll.addEventListener("DOMMouseScroll", scrollHorizontally, false);
