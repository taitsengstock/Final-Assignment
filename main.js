$(document).ready(function() {



  // var hoverArea = function(event) {
  //   $('#board').children().css("background-color", "transparent");
  //   // $(event.target).css("background-color", "red");
  //   $('#human').css("background-image", 'url(images/Arm-pain.jpg)');
  // }




  var checkForPain = function(event) {
    // var $boxes = $('#board').children();
    // var neckpain = $('#board').children().eq(4);

    if ($(event.target) === $('#board').children().eq(4)) {
      $('#human').css("background-image", 'url(images/neck-pain.jpg)');
    }
        }


  $("#board").mouseenter(checkForPain);
});
