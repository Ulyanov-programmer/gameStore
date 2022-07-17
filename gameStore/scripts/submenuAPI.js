import Submenu, { SubmenuElementGroup, SubmenuOpenIvents } from "./modules/submenu.js";
new Submenu({ menuActiveClass: "show", buttonActiveClass: "active", disableOnEsc: true }, new SubmenuElementGroup({
  openIvent: SubmenuOpenIvents.Click,
  buttonsSelector: ".submenu-button",
  menusSelector: ".submenu-menu"
}));
