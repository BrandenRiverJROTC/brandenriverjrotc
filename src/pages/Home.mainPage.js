// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here
    let completed = "#completed";

    let upcoming = "#upcoming";
    let upcomingText = $w(upcoming).text;
    let upcomingTextArray = [];

    // Foreach character in...
    let arrayEntry;
    for (c=0; c<upcomingText.length; c++)
    {
        if(c=='#') {
            upcomingTextArray.push(arrayEntry);
        } else {
            arrayEntry += c;
        }
    }

    console.log(upcomingTextArray);

    // To select an element by ID use: $w('#elementID')
    // Click 'Preview' to run your code
});
