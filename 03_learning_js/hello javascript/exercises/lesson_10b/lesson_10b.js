const testButton = document.querySelector('.js-button');
console.log(testButton.classList.contains('js-button'));

function toggleButton(button) {
    const allButtons = document.querySelectorAll('.toggle-button');
    allButtons.forEach(btn => btn.classList.remove('is-toggled'));

    button.classList.add('is-toggled');
}
