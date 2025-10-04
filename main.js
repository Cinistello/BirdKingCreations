function toggleHamburger() {
	const menu = document.getElementById("hamburgerMenu");
    const menuStyle = window.getComputedStyle(menu);

	if (menuStyle.display === "none") {
		menu.style.display = "flex";
		menu.style.width = "100%";
		document.body.style.overflow = 'hidden';
	}
	else {
		const menu = document.getElementById("hamburgerMenu");
		menu.style.width = "0";
		menu.style.display = "none";
		document.body.style.overflow = 'visible';
	}
}
