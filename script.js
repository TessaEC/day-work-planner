// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
    // var now = dayjs().format('dddd, MMMM DD, YYYY hh:mm A');
  var now = new Date();
  $("#currentDay").text(now);

  $('.saveBtn').click(function () {
    var currentTime = $(this).parent().attr('id');
    var inputVal = $(this).siblings('.description').val();


    localStorage.setItem(currentTime, inputVal);
  });
  function updateBlocks() {
    var hourNow= dayjs().hour();

    $(".time-period").each(function() {
        var hourLoop = parseInt($(this).attr('id').split('-')[1]);

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
  updateBlocks()

  setInterval(updateBlocks, 12000);

  $('#time-9 .description').val(localStorage.getItem('hour-9'));
  $('#time-10 .description').val(localStorage.getItem('time-10'));
  $('#time-11 .description').val(localStorage.getItem('time-11'));
  $('#time-12 .description').val(localStorage.getItem('time-12'));
  $('#time-13 .description').val(localStorage.getItem('time-13'));
  $('#time-14 .description').val(localStorage.getItem('time-14'));
  $('#time-15 .description').val(localStorage.getItem('time-15'));
  $('#time-16 .description').val(localStorage.getItem('time-16'));
  $('#time-17 .description').val(localStorage.getItem('time-17'));
});

      // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


// var hours = [9,10,11,12,13,14,15,16,17]

// function showTimeBlocks(){
//     var timeBlock = ""

//     for(var i = 0; i< hours.length; i++){
//         currentHour = hours[i]
//         var amPm = currentHour < 12 ? "AM" : "PM";

//         timeBlock += 
//         `<div id="${currentHour}" class="row time-block">
//             <div class="col-2 col-md-1 hour text-center py-3">${currentHour}${amPm}</div>
//             <textarea class="col-8 col-md-10 description" rows="3" id="text-${currentHour}"> </textarea>
//             <button class="btn saveBtn col-2 col-md-1" data-hour="${currentHour}" aria-label="save">
//             <i> class="fas fa-save" aria-hidden="true"></i>
//             </button>
//         </div>`
    
//         $("#apply-time").html(timeBlock);

//         showTimeBlocks();
//         }
//     }
// });
