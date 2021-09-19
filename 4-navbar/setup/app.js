// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navTuggle = document.querySelector('.nav-tuggle');
const links = document.querySelector('.links');

navTuggle.addEventListener('click', function () {
	links.classList.toggle('show-links');
	navTuggle.classList.toggle('burger');
})
