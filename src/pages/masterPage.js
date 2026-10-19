// The code in this file will load on every page of your site
$w.onReady(function () {
	let header = "#header";
	let navbarID = "#navbar";

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Header entered the viewport");
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Header left the viewport");
    });
	
});