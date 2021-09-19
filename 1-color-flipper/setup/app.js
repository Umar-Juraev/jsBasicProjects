const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const bth = document.getElementById('btn');
const color = document.querySelector('.color');


function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}

bth.addEventListener('click', function () {

	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	console.log(randomNumber)
})


