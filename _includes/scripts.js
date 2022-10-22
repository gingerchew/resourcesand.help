
// Navbar
document.addEventListener("DOMContentLoaded", () => {
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});

const resourceUpdate = document.getElementById('resourceUpdate'),
	resourceForm = document.getElementById('resourceForm');
let dialogOpen = false;
const closeModal = ({ target }) => {
	if (target === resourceForm) {
		resourceForm.close();
		dialogOpen = false;
		document.removeEventListener('click', closeModal, true);
	}
};
resourceUpdate.addEventListener('click', () => {
	if (dialogOpen) {
		resourceForm.close();
		dialogOpen = false
	} else {
		resourceForm.showModal();
		document.addEventListener('click', closeModal, true);
		dialogOpen = true;
	}
});

const details = document.querySelectorAll('details');
const closeAll = (el) => details.forEach($el => $el !== el && $el.removeAttribute('open'));
details.forEach(el => {
	el.addEventListener('toggle', (e) => e.target.hasAttribute('open') && closeAll(e.target));
});