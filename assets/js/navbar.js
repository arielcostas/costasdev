/** @type {HTMLElement} */
const header = document.querySelector('body > header');
/** @type {HTMLButtonElement} */
const toggleButton = document.querySelector('button#mobile-menu');

function toggleNavbar() {
	const present = header.classList.toggle('collapsed');

	if (present) {
		header.setAttribute('aria-expanded', 'true');
	} else {
		header.setAttribute('aria-expanded', 'false');
	}
}

toggleButton.addEventListener('click', toggleNavbar);