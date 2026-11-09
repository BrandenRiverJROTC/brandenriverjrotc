// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here
    const monthNames = new Map();
    monthNames.set("january", 1)
    monthNames.set("feburary", 2)
    monthNames.set("feburary", 3)
    monthNames.set("feburary", 4)
    monthNames.set("feburary", 5)
    monthNames.set("feburary", 6)
    monthNames.set("feburary", 7)
    monthNames.set("feburary", 8)

    let dateObject = new Date();
    let currentDate = new dateObject.getMonth();
    console.log(currentDate);

    let upcoming = "#upcoming";
    let upcomingText = $w(upcoming).text;
    let upcomingTextArray = [];
    
    let completed = "#completed";
    let completedText = $w(completed).text;
    let completedTextArray = [];

    // Foreach character in...
    let arrayEntry = ""
    let arrayIndex = 0;
    let character = "";
    for (let c=0; c<upcomingText.length; c++)
    {
        if(character=='#') {
            upcomingTextArray.push(arrayEntry);
            arrayIndex++;
            arrayEntry = " ";

        } else {
            arrayEntry += character;
        }
    }

    console.log(upcomingTextArray);

    // To select an element by ID use: $w('#elementID')
    // Click 'Preview' to run your code
});
