let headerMiniNav = document.querySelector('#header-mini__nav');
let btnBar = document.querySelector('#btn--fa-bars');
let btnTimes = document.querySelector('#btn--fa-times');
let btnTestDriver = document.querySelector('#btn--test-driver');
let from1 = document.querySelector('#home-1__form-1');
let from1Close = document.querySelector('#from1__close');

btnBar.addEventListener('click', function() {
    headerMiniNav.style.display = 'block';
    btnBar.style.display = 'none';
    btnTimes.style.display = 'block';
});
btnTimes.addEventListener('click', function() {
    headerMiniNav.style.display = 'none';
    btnTimes.style.display = 'none';
    btnBar.style.display = 'block';
});
btnTestDriver.addEventListener('click', function() {
    from1.style.display = 'block';
})
from1Close.addEventListener('click', function() {
    from1.style.display = 'none'
})