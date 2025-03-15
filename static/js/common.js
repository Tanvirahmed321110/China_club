
import { closeButtonF, openModalF } from './utilitis.js';

console.log('hello')
// For Mobile Sidebar
const menuButton = document.getElementById('mobile-menu-btn')
const menuSidebar = document.getElementById('mobile-menu-sidebar')

menuButton.addEventListener('click', function () {
    const menuButtonIcon = menuButton.querySelector('i')

    if (menuButtonIcon.classList.contains('ri-menu-3-fill')) {
        menuButtonIcon.classList.remove('ri-menu-3-fill')
        menuButtonIcon.classList.add('ri-close-large-line')
    } else {
        menuButtonIcon.classList.remove('ri-close-large-line')
        menuButtonIcon.classList.add('ri-menu-3-fill')
    }

    menuSidebar.classList.toggle('active')
})

closeButtonF()



// open modal for trade exhibition
openModalF('trade-item-modal', '.trade-items .item');