import SpoilerMenu from "./modules/spoiler.js";
new SpoilerMenu({
  btnsSelector: ".buy-form__spoiler-btn",
  contentBlocksSelector: ".buy-form__spoiler-content",
  maxWorkWidth: 1e4,
  animationDuration: 300,
  buttonActiveClass: "active",
  contentActiveClass: "active"
});
