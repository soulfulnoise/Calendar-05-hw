//box coloring

console.log(moment().format('LLL'));

$(".form-control").each(function () {
    console.log($(this).attr("time"));

    var time =$(this).attr("time");

    if(time < moment().hour()){ 
        $(this).addClass("past");
   
        console.log("past")
        
}

    if(time == moment().hour()){
        $(this).addClass("present");
        console.log("present")
    }

    if(time > moment().hour()){
        $(this).addClass("future");
        console.log("future")
    }

    //Saving to localStorage
   
  

});

