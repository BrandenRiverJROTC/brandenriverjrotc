// The code in this file will load on every page of your site
$w.onReady(function () {
	let largeNavbarID = "#largeNavbar";
	let navbarID = "#navbar";

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Element entered the viewport");
		$w("#largeNavbar").show();
		$w("#navbar").hide();
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Element left the viewport");
		$w("#largeNavbar").hide();
		$w("#navbar").show();
    });
	
});