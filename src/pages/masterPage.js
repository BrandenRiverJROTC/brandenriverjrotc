// The code in this file will load on every page of your site
$w.onReady(function () {
	let largeNavbarID = "largeNavbar";
	let navbarID = "navbar";

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Element entered the viewport");
		/* Hide smaller navbar && show larger navbar
		$w(navbarID).hide();
		$w(largeNavbarID).show(); */
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Element left the viewport");
		/* Hide larger navbar & show smaller navbar
		$w(largeNavbarID).hide();
		$w(navbarID).show(); */
    });
	
});