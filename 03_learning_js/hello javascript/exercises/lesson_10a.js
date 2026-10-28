const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function toggleButton(button) {
    if (!button.classList.contains('is-toggled')) {
        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}