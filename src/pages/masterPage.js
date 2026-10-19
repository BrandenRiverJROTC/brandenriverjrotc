// The code in this file will load on every page of your site
$w.onReady(function () {
	let largeNavbarID = "#largeNavbar";
	let navbarID = "#navbar";
	const el = $w(largeNavbarID);

	$w(largeNavbarID).onViewportEnter(() => {
        console.log("Element entered the viewport");
		console.log("Element:", el);
   	 	console.log("Viewport leave:", typeof el.onViewportLeave);
    	console.log("Viewport enter:", typeof el.onViewportEnter);
    });

    $w(largeNavbarID).onViewportLeave(() => {
        console.log("Element left the viewport");
		console.log("Element:", el);
    	console.log("Viewport leave:", typeof el.onViewportLeave);
    	console.log("Viewport enter:", typeof el.onViewportEnter);
    });
	
});