/*Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages */

var browserName
function launchBrowser(browserName) {
    if (browserName==="chrome") {
        console.log("Browser is Chrome");
    } else {
        console.log("Browser is not a chrome. Could be Firefox or Edge!!!");
    }
}

launchBrowser("chrome");

var testType = "smoke"
switch (testType) {
    case "break":
        console.log("Break hour");
        break;
    case "regression":
        console.log("Regression day");
        break;
    case "sanity":
        console.log("Sanity time");
        break;
    default:
        console.log("Smoke hour");
        break;
}