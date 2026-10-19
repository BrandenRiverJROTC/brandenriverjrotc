// The code in this file will load on every page of your site
$w.onReady(function () {
	let largeNavbarID = "#largeNavbar";
	let smallNavbarID = "#navbar";

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Element entered the viewport");
		$w(largeNavbarID).show();
		$w(smallNavbarID).hide();
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Element left the viewport");
		$w(largeNavbarID).hide();
		$w(smallNavbarID).show();
    });
	
});