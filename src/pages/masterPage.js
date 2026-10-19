// The code in this file will load on every page of your site
$w.onReady(function () {
	$w("#header1").onViewportEnter(() => {
        console.log("Element entered the viewport");
    });

    $w("#header1").onViewportLeave(() => {
        console.log("Element left the viewport");
    });
	
});