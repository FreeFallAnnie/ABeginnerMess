

$(document).ready(function(){
    $('.product a').css('cursor' , 'pointer').click(function(){
      $('.modal').fadeOut();
      var modal = $(this).attr('data-modal');
      if($(modal).is(':visible') == true) {
        $(modal).fadeOut();
      } else {
        $(modal).fadeIn();
      }
    });
  });

  // When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}