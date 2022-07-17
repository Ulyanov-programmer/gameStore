const elementWithHorScrollSelectors = '.companies-row'
let elementWithHorScroll = document.querySelector(elementWithHorScrollSelectors)

function scrollHorizontally(e) {
	e = window.event || e;
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// Multiplied by 40
	elementWithHorScroll.scrollLeft -= (delta * 40);
	e.preventDefault();
}
// IE9, Chrome, Safari, Opera
elementWithHorScroll.addEventListener('mousewheel', scrollHorizontally, false, {passive: true});
// Firefox
elementWithHorScroll.addEventListener('DOMMouseScroll', scrollHorizontally, false);