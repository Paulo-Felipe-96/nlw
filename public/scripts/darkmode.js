var buttonElement = document.querySelector('#page-home button');

buttonElement.onclick = function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
};