'use strict'

const menuLinkEl = Array.from(document.querySelectorAll('.menu__link'))

menuLinkEl.forEach((link) => {
  link.addEventListener('click', (e) => {
    let menuItemEls = link.closest('.menu__item')
    let subMenu = menuItemEls.querySelector('.menu_sub')
    if (subMenu && !subMenu.classList.contains('menu_active')) {
      e.preventDefault()
      subMenu.classList.add('menu_active')
    }
  })
})
