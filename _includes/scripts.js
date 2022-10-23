((resourceForm, resourceUpdate) => {
	let dialogOpen = false,
	closeModal = ({ target }) => {
		if (target === resourceForm) {
			resourceForm.close();
			dialogOpen = false;
			document.removeEventListener("click", closeModal, true);
		}
	},
	closeAll = (el,details) => details.forEach($el => $el !== el && $el.removeAttribute('open')),
	burger = document.querySelector(".navbar-burger");
	
	// Navbar
	burger.addEventListener('click', () => {
		burger.classList.toggle("is-active");
		document.getElementById(burger.dataset.target).classList.toggle("is-active");
	})
	resourceUpdate.addEventListener("click", () => {
		if (dialogOpen) {
			resourceForm.close();
			dialogOpen = false
		} else {
			resourceForm.showModal();
			document.addEventListener('click', closeModal, true);
			dialogOpen = true;
		}
	});
	
	document.querySelectorAll('details').forEach((el,i,t) => el.addEventListener('toggle', ({target:e}) => e.hasAttribute('open') && closeAll(e,t)));
})(document.getElementById('resourceForm'), document.getElementById('resourceUpdate'));