import{returnScrollbarWidth as o,elementIsExistWithLog as l}from"./general.js";const e=class{constructor(t){if(!!l("BurgerMenu",t.burgerSelector,t.burgerMenuSelector,t.buttonsSelector)&&(e.burger=document.querySelector(t.burgerSelector),e.menu=document.querySelector(t.burgerMenuSelector),e.autoPaddingOptions=t.autoPadding,e.closingByClickOnElement=t.closingByClickOnElement,t.burgerActiveClass&&(e.burgerActiveClass=t.burgerActiveClass),t.menuActiveClass&&(e.menuActiveClass=t.menuActiveClass),t.autoPadding&&(e.menu.style.paddingTop=`${e.autoPaddingOptions.elementHeight}px`),e.burger.addEventListener("click",this.toggleNavmenu),e.closingByClickOnElement)){e.buttons=document.querySelectorAll(t.buttonsSelector);for(let n of e.buttons)n.addEventListener("click",this.hideNavmenu)}}toggleNavmenu(){let t=o();e.autoPaddingOptions&&(e.menu.style.paddingTop=`${e.autoPaddingOptions.elementHeight}px`),e.burger.classList.toggle(e.burgerActiveClass),document.body.style.overflow!="hidden"?document.body.style.overflow="hidden":document.body.style.overflow="",document.body.style.paddingRight=`${t}px`,e.header.style.paddingRight=`${t}px`,e.menu.classList.toggle(e.menuActiveClass)}hideNavmenu(){let t=o();e.burger.classList.remove(e.burgerActiveClass),document.body.style.overflow=="hidden"?document.body.style.overflow="":document.body.style.overflow="hidden",document.body.style.paddingRight=`${t}px`,e.menu.classList.remove(e.menuActiveClass)}};let i=e;i.header=document.querySelector("header"),i.closingByClickOnElement=!0,i.burgerActiveClass="active",i.menuActiveClass="active";export{i as default};export class autoPaddingOptions{constructor(t){if(l("autoPaddingOptions",t)){let n=document.querySelector(t);this.elementHeight=n.clientHeight}}}
