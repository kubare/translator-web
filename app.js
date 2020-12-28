const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

function navbar() {
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active');
}
menu.addEventListener('click', navbar);

function output_from_textarea() {
    var text = document.getElementById('inputjs').value;
    document.getElementById('outputjs').innerHTML = text;
}
document.getElementById('submitjs').addEventListener('click', output_from_textarea);