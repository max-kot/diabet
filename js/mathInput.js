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
		operationButton.innerHTML = mathOperations[key];
		mathBox.appendChild(operationButton);
	}

	parent.appendChild(mathBox);
}

let allInputParentEl = document.querySelectorAll('.mathtools');

allInputParentEl.forEach((inputParent) => {
	createMathTools(inputParent);
})