const header = document.querySelector('.header')

//*Menu
const toggle = document.querySelector('.header__mobile__top__toggle')
const menu = document.querySelector('.menu')

function toggleMenu() {
	menu.classList.toggle('menu--active')
	toggle.classList.toggle('header__mobile__top__toggle--active')
}

toggle.addEventListener('click', toggleMenu)
