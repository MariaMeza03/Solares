const header = document.querySelector('.header')

//*Menu
const toggle = document.querySelector('.header__mobile__top__toggle')
const menu = document.querySelector('.menu')
const main = document.querySelector('.main')

//*submenu Desktop
const submenuButton = document.querySelector('.header__desktop__pages--two')
const submenu = document.querySelector('.submenu')

//*submenu movil
const submenuButtonMovil = document.querySelector('.menu__link--two')
const submenuMovil = document.querySelector('.menu__link__submenu')

function toggleMenu() {
	menu.classList.toggle('menu--active')
	toggle.classList.toggle('header__mobile__top__toggle--active')
}
function DeleteMenu() {
	menu.classList.remove('menu--active')
}

function SubmenuDesktop(){
	submenu.classList.toggle('submenu--active')
	submenuButton.classList.toggle('header__desktop__pages--two--active')
}

function SubmenuMovil(){
	submenuMovil.classList.toggle('menu__link__submenu--active')
}

toggle.addEventListener('click', toggleMenu)
main.addEventListener('click', DeleteMenu)
submenuButton.addEventListener('click', SubmenuDesktop)
submenuButtonMovil.addEventListener('click',SubmenuMovil )