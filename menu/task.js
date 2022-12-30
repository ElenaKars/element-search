'use strict'

const menuLinkEl = Array.from(document.querySelectorAll('.menu__link'))
const menuItem = Array.from(document.querySelectorAll('.menu__item'))

menuItem.forEach((item) => {
  const parentEl = item.closest('.menu_sub')

  menuLinkEl.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link) {
        e.preventDefault()
      }
      parentEl.classList.toggle('menu_active')
    })
  })
})
