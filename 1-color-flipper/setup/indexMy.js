const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "I",];
const btn = document.getElementById('btn');
let blockColor = document.getElementById('block-color');

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}


btn.addEventListener('click', function () {
	let colorColor = "#";
	for (let i = 0; i < 6; i++) {
		colorColor += colors[getRandomNumber()];
	}
	console.log(colorColor);


	blockColor.style.backgroundColor = colorColor;
})