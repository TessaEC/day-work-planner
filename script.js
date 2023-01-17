// Date to be displayed in header
var now = new Date();
$("#currentDay").text(now);

$(document).ready(function () {
    // function to listen for click on save button
    $('.saveBtn').on('click', function () {

        // set values for local storage
        var currentTime = $(this).parent().attr('id');
        var inputVal = $(this).siblings('.description').val();

        // saves the time and text input to local storage
        localStorage.setItem(currentTime, inputVal);

        // Shows alert from HTML on screen 
        $('.alert').show('fast').delay(2000).fadeOut('slow');
    });

    function updateBlocks() {
        // set current hour variable
        var hourNow = dayjs().hour();
        // jQuery loop to loop over the hour blocks
        $(".time-period").each(function () {
            var hourLoop = parseInt($(this).attr("id").split("-")[1]);
            /*checking time and setting classes from CSS to color text area according
            to current time */
            if (hourLoop === hourNow) {
                $(this).addClass('present')
            } else if (hourLoop < hourNow) {
                $(this).removeClass('present');
                $(this).addClass('past');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        });
    }
    // calls loop function  
    updateBlocks();
    /* sets the amount of time to run updateBlocks function to have current time
    updated */
    setInterval(updateBlocks, 12000);
    // gets the saved info from local storage  
    $('#time-9 .description').val(localStorage.getItem('time-9'));
    $('#time-10 .description').val(localStorage.getItem('time-10'));
    $('#time-11 .description').val(localStorage.getItem('time-11'));
    $('#time-12 .description').val(localStorage.getItem('time-12'));
    $('#time-13 .description').val(localStorage.getItem('time-13'));
    $('#time-14 .description').val(localStorage.getItem('time-14'));
    $('#time-15 .description').val(localStorage.getItem('time-15'));
    $('#time-16 .description').val(localStorage.getItem('time-16'));
    $('#time-17 .description').val(localStorage.getItem('time-17'));
})
