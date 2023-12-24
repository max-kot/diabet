let mathOperations = {
	'plus': '+',
	'minus': '-',
	'divide': '/',
	'multiply': '*',
	'dot': '.',
	'bracketLeft': '(',
	'bracketRight': ')',
}

function createMathTools(parent) {
	let mathBox = document.createElement('div');
	mathBox.classList.add('mathtools__box');

	for (let key in mathOperations) {
		let operationButton = document.createElement('button');
		operationButton.setAttribute('type', 'button');
		operationButton.classList.add('mathtools__btn');
		operationButton.innerHTML = mathOperations[key];
		mathBox.appendChild(operationButton);
	}

	parent.appendChild(mathBox);
}

function createMathResult(parent) {
	let mathResult = document.createElement('div');
	mathResult.classList.add('mathtools__result');
	mathResult.innerHTML = 0;

	parent.appendChild(mathResult);
}

let allInputParentEl = document.querySelectorAll('.mathtools');

allInputParentEl.forEach((inputParent) => {
	createMathTools(inputParent);
	createMathResult(inputParent);
	let currentInput = inputParent.querySelector('input');

	currentInput.addEventListener('click', () => {
		allInputParentEl.forEach((inputParent) => inputParent.classList.remove('active'));
		inputParent.classList.add('active');
	})

	currentInput.addEventListener('focus', () => {
		allInputParentEl.forEach((inputParent) => inputParent.classList.remove('active'));

		inputParent.classList.add('active');
	})

	
	let mathResult = inputParent.querySelector('.mathtools__result');
	currentInput.addEventListener('input', () => {
		mathResult.innerHTML = currentInput.value ? eval(currentInput.value) : 0;
	})
	currentInput.addEventListener('change', () => {
		mathResult.innerHTML = currentInput.value ? eval(currentInput.value) : 0;
	})
	
	currentInput.addEventListener('blur', () => {
		allInputParentEl.forEach((inputParent) => inputParent.classList.remove('active'));
	})
})

function operationButtonHandler() {
	let allOperationButton = document.querySelectorAll('.mathtools__btn');

	allOperationButton.forEach((btn) => {

		btn.addEventListener('click', (e) => {
			const currentInput = e.target.parentElement.previousElementSibling;
			currentInput.value += btn.innerHTML;
			currentInput.focus();
		})
	})
}

operationButtonHandler();
