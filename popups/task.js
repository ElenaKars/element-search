'use strict'

let modalMainEl = document.getElementById('modal_main')
let modalSuccessEl = document.getElementById('modal_success')

let btnsEls = document.querySelector('.btn')
let showSuccess = document.querySelector('.show-success')

let modalCloseEls = document.querySelectorAll('.modal__close')

modalMainEl.classList.add('modal_active')

modalCloseEls.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', () => {
    modalCloseBtn.closest('.modal').classList.remove('modal_active')
  })
})

showSuccess.addEventListener('click', () => {
  modalSuccessEl.classList.add('modal_active')
})
