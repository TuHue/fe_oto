let btnBar = document.querySelector('#btn--fa-bars');
let btnTimes = document.querySelector('#btn--fa-times');
let headerMiniNav = document.querySelector('#header-mini__nav');

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