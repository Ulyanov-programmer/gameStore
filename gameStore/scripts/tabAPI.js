import Tab, { ToggleTabsEvent } from "./modules/tab.js";
new Tab({
  btnsSelector: ".buy-form__tab-button",
  contentBlocksSelector: ".buy-form__tab-item",
  fadeEffect: false,
  buttonsActiveClass: "active",
  contentActiveClass: "active",
  autoHeight: true,
  animationDuration: 500,
  toggleTabsBy: ToggleTabsEvent.Click
});
new Tab({
  btnsSelector: ".profile-tabs__button",
  contentBlocksSelector: ".profile-tabs__content-item",
  fadeEffect: false,
  buttonsActiveClass: "active",
  contentActiveClass: "active",
  autoHeight: true,
  animationDuration: 500,
  toggleTabsBy: ToggleTabsEvent.Click
});
