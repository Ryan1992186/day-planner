
// varaiables are set for the different hours of the day using Jquery (moment.js)
var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

// starts a function called setPlanner.
function setPlanner() {

    //determines the current day/month/year based on moment.js libarary linked into the HTML doc. 
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    // for each DOM element .time-block has it's own function.
    $(".time-block").each(function () {
        // within the .time-block function the variable ID is assigned to the DOM element of ID using Jquery
        var id = $(this).attr("id");
        // the variable schedule is written so when it is used, it knows to save the ID element written above into local storage. 
        var schedule = localStorage.getItem(id);
        //strict boolean operand to check to see if schedule is not blank, if not blank then saved to local storage. 
        if (schedule !== null) {
           $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();

//sets the Jqeury to give the (.saveBtn) class it's own variable. 

var input = document.createElement('input'); 
input.type = "text"; 
container.appendChild(input); 

var saveBtn = $(".saveBtn");

// when clicking saveBtn DOM element, it writes a function that saves both written time/and schedule to local storage. 
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    // displays saved local storage to the screen. upon refresh. 
    localStorage.setItem(time, schedule);
});
