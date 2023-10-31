const convertBUForm = document.querySelector('.convertBU__form');
let convertBUSettingsCarbo = document.querySelector('#convertBU__carbo-default');
let convertBUSettingsBU = document.querySelector('#convertBU__bu-default');
const convertBUSettingForm = document.querySelector('.convertBU__form-settings');

let convertCarboUnit = document.querySelector('.carbo-unit span');
let convertBUUnit = document.querySelector('.bu-unit span');


let carboDefault = convertBUSettingsCarbo.value;
let buDefault = convertBUSettingsBU.value;
convertCarboUnit.innerHTML = convertBUSettingsCarbo.value;
convertBUUnit.innerHTML = convertBUSettingsBU.value;

convertBUForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let inputCarbo = convertBUForm.querySelector('#convertBU__carbo');
	let inputCarboWeight = convertBUForm.querySelector('#convertBU__carbo-weight');
	let inputBU = convertBUForm.querySelector('#convertBU__bu');

	const carboResult = (inputCarboWeight.value * inputCarbo.value) / carboDefault;

	const buResult = (carboResult / buDefault).toFixed(1);

	inputBU.value = buResult
})


//*--- MODAl ---*//
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

convertBUSettingForm.addEventListener('submit', (e) => {
	e.preventDefault();

	carboDefault = convertBUSettingsCarbo.value;
	buDefault = convertBUSettingsBU.value;
	convertCarboUnit.innerHTML = convertBUSettingsCarbo.value;
	convertBUUnit.innerHTML = convertBUSettingsBU.value;

	closeModal();
})