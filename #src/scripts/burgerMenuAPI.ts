import BurgerMenu, {autoPaddingOptions} from './modules/burgerMenu.js'

new BurgerMenu({
	burgerSelector: '#burgerButton',
	burgerMenuSelector: '.burger-menu',
	buttonsSelector: '.fs-element',
	autoPadding: new autoPaddingOptions('.header__top'),
	menuActiveClass: 'active',
	burgerActiveClass: 'active',
	closingByClickOnElement: false,
})