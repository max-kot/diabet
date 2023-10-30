const convertBUForm = document.querySelector('.convertBU__form');
const carboDefault = 100;
const buDefault = 12;

convertBUForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let inputCarbo = convertBUForm.querySelector('#convertBU__carbo');
	let inputCarboWeight = convertBUForm.querySelector('#convertBU__carbo-weight');
	let inputBU = convertBUForm.querySelector('#convertBU__bu');
	
	const carboResult = (inputCarboWeight.value * inputCarbo.value) / carboDefault;

	const buResult = Math.floor(carboResult / buDefault);
	console.log(carboResult, buResult);
	inputBU.value = buResult
})