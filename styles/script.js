const burgerBut = document.querySelector('.burger__block')
const navbar = document.querySelector('.navbar')
const navbarList = document.querySelector('.navbar__list')

function burgerClick() {
    burgerBut.addEventListener('click',() =>{
        burgerBut.classList.toggle('burgerActive')
        navbarList.classList.toggle('navbarListActive')
        navbar.classList.toggle('navbarActive')
    })
}burgerClick()

// 