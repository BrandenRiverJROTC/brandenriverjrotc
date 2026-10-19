// The code in this file will load on every page of your site
$w.onReady(function () {
	// Grab ID of navbar
	let navbar = $w("#header1");
	// Check if navbar exists
	if(navbar) {
		console.error("Navbar /w id ", navbar, "not found");
	}
});