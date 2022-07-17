//? your scripts //
const rowViewContentClass = 'products__body_rows'
const gridViewContentClass = 'products__body_grid'
const contentRowViewClass = 'product__body_row-view'
const contentGirdViewClass = 'product__body_grid-view'


let rowButton = document.querySelector('#rowView')
let gridButton = document.querySelector('#gridView')
let container = document.querySelector('.products__body')

let contentEls = document.querySelectorAll('.product__body')

if (rowButton)
	rowButton.addEventListener('click', changeContentVisible)

if (gridButton)
	gridButton.addEventListener('click', changeContentVisible)


function changeContentVisible(e: Event) {
	if (e.currentTarget == rowButton) {
		rowButton.classList.add('active')
		gridButton.classList.remove('active')

		container.classList.add(rowViewContentClass)
		container.classList.remove(gridViewContentClass)

		for (let content of contentEls) {
			content.classList.remove(contentGirdViewClass)
			content.classList.add(contentRowViewClass)
		}
	} else {
		gridButton.classList.add('active')
		rowButton.classList.remove('active')

		container.classList.remove(rowViewContentClass)
		container.classList.add(gridViewContentClass)

		for (let content of contentEls) {
			content.classList.remove(contentRowViewClass)
			content.classList.add(contentGirdViewClass)
		}
	}
}

