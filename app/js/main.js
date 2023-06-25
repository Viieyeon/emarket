const menuBtn = document.querySelector('.header-burger');
const header = document.querySelector('.header');
const menuOff = document.querySelector('.burger__off');
const inputClear = document.querySelector('.icon__clear');


menuBtn.addEventListener('click', () => {
    header.classList.add('open');
})

menuOff.addEventListener('click', () => {
    header.classList.remove('open');
})

inputClear.addEventListener('click', () => {
    document.getElementById('headerSearch').value = '';
})

