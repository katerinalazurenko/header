"use strict";

const menuOpen = document.querySelector('.icon-menu');
const menu = document.querySelector('.header__menu-wrapper');

menuOpen.addEventListener('click', () => {
    menuOpen.classList.toggle('icon-close');
    menuOpen.classList.toggle('icon-open');
    menu.classList.toggle('header__menu-wrapper_hidden')

})

const menuItems = document.querySelectorAll('.header__menu-item');

menuItems.forEach(el => {
    el.addEventListener('click', (e) => {
        menuItems.forEach(el => {
            if(el.classList.contains('header__menu-item_active')){
                el.classList.remove('header__menu-item_active')
            }
        })
        e.target.parentElement.classList.add('header__menu-item_active');
    })
})