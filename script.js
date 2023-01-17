var now = new Date();
$("#currentDay").text(now);

$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    var currentTime = $(this).parent().attr('id');
    var inputVal = $(this).siblings('.description').val();


    localStorage.setItem(currentTime, inputVal);
  });

  function updateBlocks() {
    var hourNow = dayjs().hour();

    $(".time-period").each(function() {
        var hourLoop = parseInt($(this).attr("id").split("-")[1]);

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