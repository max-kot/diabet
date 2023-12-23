let database = [
	{
		name: 'Хлеб',
		carbonUnits: 50,
		info: '1 кусок хлеба (25 г.) = 1 ХЕ',
	},
	{
		name: 'Пелемени',
		carbonUnits: 25,
		info: '1 штуке (12 г.) = 0.2 ХЕ',
	},
	{
		name: 'Каша овсяная хлопья',
		carbonUnits: 63,
		info: '1 ложке сухой массы (12 г.) = 0.6 ХЕ',
	},
]

const databaseBtnEl = document.querySelector('.btn-database');
const databaseTableEl = document.querySelector('.database__table tbody');

function renderTable() {
	for (let key in database) {
		databaseTableEl.innerHTML += `<tr><td>${database[key].name}</td><td class="database__carbonUnits">${database[key].carbonUnits}</td><td>${database[key].info}</td></tr>`
	}
}

renderTable();
const allDatabseItemEl = databaseTableEl.querySelectorAll('tr');
let inputCarbo = document.querySelector('#convertBU__carbo');

allDatabseItemEl.forEach((item) => {
	item.addEventListener('click', () => {
		allDatabseItemEl.forEach((item) => item.classList.remove('active'));
		item.classList.add('active');

		// устанавливаем значение для углеводов
		let currentCarbonUnits = item.querySelector('.database__carbonUnits').innerHTML;
		inputCarbo.value = currentCarbonUnits;

		closeModal();
	})
})

// убираем из активных продуктов при изменении числа в импуте
inputCarbo.addEventListener('change', () => {
	allDatabseItemEl.forEach((item) => item.classList.remove('active'));
})
