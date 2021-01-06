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


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()


// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.cognitive.microsofttranslator.com?78cc0e8fbac54eb5b04f83e86c0fd6b0', true)

request.onload = function () {

}

request.send()
