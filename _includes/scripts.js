((doc, resourceForm, resourceUpdate, aEL, clk) => {
	let getById = doc.getElementById,
	dialogOpen = false,
	closeModal = ({ target }) => {
		if (target === resourceForm) {
			resourceForm.close();
			dialogOpen = false;
			doc.removeEventListener(clk, closeModal, true);
		}
	},
	closeAll = (el,details) => details.forEach($el => $el !== el && $el.removeAttribute('open'));
	
	// Navbar
	doc[aEL]("DOMContentLoaded", () => doc.querySelectorAll(".navbar-burger")
		.forEach((el) => el[aEL](clk, () => {
				const target = el.dataset.target;
				const $target = getById(target);
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			})
		)
	);
	resourceUpdate[aEL](clk, () => {
		if (dialogOpen) {
			resourceForm.close();
			dialogOpen = false
		} else {
			resourceForm.showModal();
			doc[aEL](clk, closeModal, true);
			dialogOpen = true;
		}
	});
	
	doc.querySelectorAll('details').forEach((el,i,t) => el[aEL]('toggle', ({target:e}) => e.hasAttribute('open') && closeAll(e,t)));
})(document, document.getElementById('resourceUpdate'), document.getElementById('resourceForm'), 'addEventListener', 'click');