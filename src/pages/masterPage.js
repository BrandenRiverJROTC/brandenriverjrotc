// The code in this file will load on every page of your site
$w.onReady(function () {
	// Grab ID of navbar
	let navbar = $w("#header1");
	// Check if navbar exists
	if(!navbar) {
		console.error("Navbar /w id ", navbar, "not found");
	}
	// Add event listener to window scroll
	window.addEventListener("scroll", function () {
		// Check if the user has scrolled down 50px from the top of the document
		if (window.scrollY > 50) {
			// Add a class to the navbar to change its background color
			navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
		} else {
			// Remove the class to revert the background color
			navbar.style.backgroundColor = "transparent";
		}
	});
});