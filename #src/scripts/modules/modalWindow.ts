import { elementIsExistWithLog, returnScrollbarWidth } from "./general.js"

interface ModalWindowMenuArgs {
	/** 
		Selector of buttons for opening modal windows.
		For correct work, you need to add the attribute [data-modal-link="idOfModal"]
		`(attention, every modal element must contain an id)`
	*/
	modalLinksSelector: string
	/** Selector of buttons for closing modal windows (should be in html of modal). */
	modalClosersSelector: string
	/** 
		Selector of burger-menu, need for correct work with it.
		Not required.
	*/
	burgerMenuSelector?: string
}

export default class ModalWindowMenu {
	private static modalLinks: NodeListOf<HTMLElement>
	private static modalClosers: NodeListOf<HTMLElement>
	private static burgerMenuClasslist: DOMTokenList
	private static UNLOCK: boolean = true
	public static transitionTimeout: number

	constructor(arg: ModalWindowMenuArgs) {
		if (!elementIsExistWithLog('ModalWindowMenu',
			arg.modalLinksSelector, arg.modalClosersSelector)) {
			return
		}

		if (arg.burgerMenuSelector)
			ModalWindowMenu.burgerMenuClasslist = document.querySelector(arg.burgerMenuSelector).classList

		ModalWindowMenu.modalLinks = document.querySelectorAll(arg.modalLinksSelector)

		for (let modalLink of ModalWindowMenu.modalLinks) {
			modalLink.addEventListener("click", () => {
				let modalId = modalLink.dataset.openModalId

				if (modalId) {
					let modal = document.getElementById(modalId)

					ModalWindowMenu.transitionTimeout = parseFloat(getComputedStyle(modal)
						.getPropertyValue('transition-duration')) * 1000

					this.showOrHideModal(modal)
				}
			})
		}

		ModalWindowMenu.modalClosers = document.querySelectorAll(arg.modalClosersSelector)

		for (let modalCloser of ModalWindowMenu.modalClosers) {
			modalCloser.addEventListener("click", () =>
				this.closeModal(modalCloser.closest('.modal-window'), true)
			)
		}


		document.addEventListener('keydown', (key) => {
			if (key.code != 'Escape') return

			let activeModal = document.querySelector<HTMLElement>('.modal-window.active')
			activeModal ? this.closeModal(activeModal, true) : false
		})
	}


	private showOrHideModal(modalElement) {
		if (modalElement && ModalWindowMenu.UNLOCK) {
			let activeModal = document.querySelector<HTMLElement>('.modal-window.active')

			activeModal ? this.closeModal(activeModal, false) : this.toggleBodyScroll(false)

			modalElement.classList.add("active")
		}
		modalElement.addEventListener("click", (e) => {

			// Checks if the pressed element has a CONTENT parent, if not, closes the modal.
			if (e.target.closest('.modal-window__content') == null) {
				this.closeModal(modalElement, true)
			}
		})
	}

	private closeModal(modalWindow: HTMLElement, bodyIsScrollable: boolean) {
		if (ModalWindowMenu.UNLOCK == false) return

		modalWindow.classList.remove("active")

		setTimeout(() => {
			bodyIsScrollable ? this.toggleBodyScroll(true) : false

		}, ModalWindowMenu.transitionTimeout * 2)
	}

	private toggleBodyScroll(toggleScrollOn: boolean) {
		if (this.chekPossibileSwitchScroll(toggleScrollOn)) {
			document.body.style.paddingRight = ''
			document.body.style.overflow = ''
		} else {
			document.body.style.paddingRight = returnScrollbarWidth() + 'px'
			document.body.style.overflow = 'hidden'
		}

		ModalWindowMenu.UNLOCK = false

		// Prevents a new window from opening too quickly.
		setTimeout(() => {
			ModalWindowMenu.UNLOCK = true
		}, ModalWindowMenu.transitionTimeout * 2)
	}


	private chekPossibileSwitchScroll(toggleOnValue: boolean) {
		if (ModalWindowMenu.burgerMenuClasslist) {
			if (!ModalWindowMenu.burgerMenuClasslist.contains('active') && toggleOnValue) {
				return true
			} else {
				return false
			}
		} else {
			return toggleOnValue
		} 
		
	}
}