const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const createInputChecked = $('.create__input-checked')

createInputChecked.addEventListener('click', () => {
    createInputChecked.classList.toggle('active')
})