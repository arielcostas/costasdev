/** @type {HTMLElement} */
const header = document.querySelector('body > header');
/** @type {HTMLButtonElement} */
const toggleButton = document.querySelector('button#mobile-menu');

function toggleNavbar() {
	header.classList.toggle('collapsed');
}

toggleButton.addEventListener('click', toggleNavbar);