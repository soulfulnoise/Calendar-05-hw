
// Current Date and Time for Header
function getHeaderDate() {
    var currentHeaderDate = moment().format('LLL');
    $("#currentDay").text(currentHeaderDate);
}

