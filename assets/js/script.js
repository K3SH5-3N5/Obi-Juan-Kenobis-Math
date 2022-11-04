const header = document.querySelector("header");
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};
