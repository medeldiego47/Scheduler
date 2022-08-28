
var currentTime = moment().format("HH") + ":00";

var domContainer = document.querySelector("#timeslot-container");
//inserting time and day and time into Current day

window.setInterval(function () {
  $("#currentDay").text(moment().format("ddd MM/DD h:mm:ss a"));
}, 1000);

//---Create the variables to save "time" text to local storage-------
var time1 = $("9").text();
var time2 = $("10").text();
var time3 = $("11").text();
var time4 = $("12").text();
var time5 = $("13").text();
var time6 = $("14").text();
var time7 = $("15").text();
var time8 = $("16").text();
var time9 = $("17").text();
var time10 = $("18").text();

//Current time done with moment.js
var currentTime = moment().hours();


//***FUNCTION: The function to render local storage information on page load
$(document).ready(function () {

    //-------Load from local storage-------
    $('#text-1').html(localStorage.getItem('time1'));
    $('#text-2').html(localStorage.getItem('time2'));
    $('#text-3').html(localStorage.getItem('time3'));
    $('#text-4').html(localStorage.getItem('time4'));
    $('#text-5').html(localStorage.getItem('time5'));
    $('#text-6').html(localStorage.getItem('time6'));
    $('#text-7').html(localStorage.getItem('time7'));
    $('#text-8').html(localStorage.getItem('time8'));
    $('#text-9').html(localStorage.getItem('time9'));
    $('#text-10').html(localStorage.getItem('time10'));



    //****FUNCTION: Save each slot & text to local storage when "Save" button clicked
    $('button').on("click", function () {
        localStorage.setItem('time1', $('#text-1').val());
        localStorage.setItem('time2', $('#text-2').val());
        localStorage.setItem('time3', $('#text-3').val());
        localStorage.setItem('time4', $('#text-4').val());
        localStorage.setItem('time5', $('#text-5').val());
        localStorage.setItem('time6', $('#text-6').val());
        localStorage.setItem('time7', $('#text-7').val());
        localStorage.setItem('time8', $('#text-8').val());
        localStorage.setItem('time9', $('#text-9').val());
        localStorage.setItem('time10', $('#text-10').val());
    });



    //***FUNCTION-------Color code each time-slot for past present and future------
    function colorCodeTime() {

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id'));

            if (currentTime < timeBlock) {
                $(this).addClass('future').removeClass("past present");
            }
            else if (currentTime > timeBlock) {
                $(this).addClass('past').removeClass("present future");
            }
            else if (currentTime === timeBlock) {
                $(this).addClass('present').removeClass("past future")
            }
        });


    }
    colorCodeTime()
});
