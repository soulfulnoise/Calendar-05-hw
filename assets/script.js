// Header time
var currentHeaderDate = moment().format('LLL');
$("#currentDay").text(currentHeaderDate);



//box coloring


$(".form-control").each(function () {
    console.log($(this).attr("time"));

    var time = $(this).attr("time");

    if (time < moment().hour()) {
        $(this).addClass("past");

        console.log("past")

    }

    if (time == moment().hour()) {
        $(this).addClass("present");

        console.log("present")
    }

    if (time > moment().hour()) {
        $(this).addClass("future");

        console.log("future")
    }
});



//local Storage
// saves data to be used in localStorage
$("8").val(localStorage.getItem("8"))



