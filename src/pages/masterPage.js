// The code in this file will load on every page of your site
$w.onReady(function () {
	let header = "#header";
	let navbarID = "#navbar";

	$w(header).onViewportEnter(() => {
        console.log("Header entered the viewport");
		$w(navbarID).hide(navbarID);
    });

    $w(header).onViewportLeave(() => {
        console.log("Header left the viewport");
		$w(navbarID).show(navbarID);

    });
	
});