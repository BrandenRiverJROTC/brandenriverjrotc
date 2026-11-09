// The code in this file will load on every page of your site
$w.onReady(function () {
	let header = "#header";
	let navbarID = "#navbar";

	$w(header).onViewportEnter(() => {
		  $w(navbarID).hide(navbarID);
    });

    $w(header).onViewportLeave(() => {
		  $w(navbarID).show(navbarID);

    });
	
});