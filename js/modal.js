
const modalWrapper = document.querySelector('.modal-wrapper');
const allModalOpenBtn = document.querySelectorAll('.btn-modal');
const allModal = document.querySelectorAll('.modal');

allModalOpenBtn.forEach((openBtn) => {
	openBtn.addEventListener('click', (e) => {
		let id;
		e.preventDefault();

		if (e.target.tagName === 'A') {
			id = openBtn.getAttribute('href');
		} else {
			id = openBtn.getAttribute('data-modal-href');
		}


		if (modalWrapper.classList.contains('active')) {
			modalWrapper.classList.remove('active');
		} else {
			modalWrapper.classList.add('active');
		}

		let modal = modalWrapper.querySelector(id);
		const modalCloseBtn = modal.querySelector('.modal__close-btn');

		if (modal.classList.contains('active')) {
			modal.classList.remove('active');
		} else {
			modal.classList.add('active');
		}

		modalCloseBtn.addEventListener('click', () => {
			modalWrapper.classList.remove('active');
			modal.classList.remove('active');
		})

		modalWrapper.addEventListener('click', (e) => {
			if (e.target.classList.contains('modal-wrapper')) {
				modalWrapper.classList.remove('active');
				modal.classList.remove('active');
			}
		})
	})
})

const closeModal = () => {
	modalWrapper.classList.remove('active');

	allModal.forEach((modal) => {
		modal.classList.remove('active');
	})
}



