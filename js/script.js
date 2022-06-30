window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const menuItems = document.querySelectorAll(".menu_link")
	const hamburger = document.querySelector(".hamburger");

	function toggleActiveClasses() {
		menu.classList.toggle("menu_active");
		hamburger.classList.toggle("hamburger_active");
	}

	hamburger.addEventListener("click", toggleActiveClasses);
	menuItems.forEach(item => item.addEventListener("click", toggleActiveClasses));
});

