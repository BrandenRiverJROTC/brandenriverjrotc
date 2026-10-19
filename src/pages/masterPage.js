// The code in this file will load on every page of your site
$w.onReady(function () {
	let largeNavbarID = "#largeNavbar";

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Element entered the viewport");
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Element left the viewport");
    });
	
});