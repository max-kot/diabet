
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

	const carboResult = (eval(inputCarboWeight.value) * eval(inputCarbo.value)) / carboDefault;

	const buResult = (carboResult / buDefault).toFixed(1);

	inputBU.value = `${buResult} ХЕ`;
})

convertBUSettingForm.addEventListener('submit', (e) => {
	e.preventDefault();

	carboDefault = convertBUSettingsCarbo.value;
	buDefault = convertBUSettingsBU.value;
	convertCarboUnit.innerHTML = convertBUSettingsCarbo.value;
	convertBUUnit.innerHTML = convertBUSettingsBU.value;

	closeModal();
})