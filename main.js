var selected = false;

$(document).ready(function() {



  // var hoverArea = function(event) {
  //   $('#board').children().css("background-color", "transparent");
  //   // $(event.target).css("background-color", "red");
  //   $('#human').css("background-image", 'url(images/Arm-pain.jpg)');
  // }
// var armPain = $('#board').children().eq(6),
//               $('#board').children().eq(9),
//               $('#board').children().eq(8)


    // var boxes = $('#board').children()

    // for (var i = 0; i < boxes.length; i++) {
    //   if (i === 4) {
    //     $('#human').css("background-image", 'url(images/neck-pain.jpg)');
    //   }
    //   else if (i === 6 || i === 8 || i === 9) {
    //     $('#human').css("background-image", 'url(images/Arm-pain.jpg)');
    //   })
    // }
    //
var mouseOver = function mouseOver(){
$('.head').mouseover(function(){
  if (!selected) {
    $('#human').css("background-image", 'url(images/head-pain.jpg)');
    $('.body-part').text("head");
  }
}).mouseout(function () {
    $('#human').css('background-image', 'url(images/full-body.jpg)');
    $('#body-part').text("");
});


$('.neck').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/neck-pain.jpg)');
   $('.body-part').text("neck");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});

$('.arm').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/Arm-pain.jpg)');
   $('.body-part').text("arm");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});

$('.chest').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/Chest-pain.jpg)');
   $('.body-part').text("chest");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});

$('.stomach').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/Stomach-pain.jpg)');
   $('.body-part').text("abdomen");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});

$('.leg').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/Leg-pain.jpg)');
   $('.body-part').text("leg");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});
$('.lower-leg').mouseover(function(){
  if (!selected) {
   $('#human').css("background-image", 'url(images/Lower-Leg-pain.jpg)');
   $('.body-part').text("lower leg");
   }
}).mouseout(function () {
  $('#human').css('background-image', 'url(images/full-body.jpg)');
  $('#body-part').text("");

});

}


var click = function click(){

$('.head').click(function(){

    $('#pain-predicter').css("width", "%");
    $('#main').css("width", "60%");
    $('aside').css("width", "40%");
    $('#pain-message').css("display", "inline");
    $('#pain-predicter .body-part').text("");
    selected = true;
  })

$('.neck').click(function(){

    $('#pain-predicter').css("width", "%");
    $('#main').css("width", "60%");
    $('aside').css("width", "40%");
    $('#pain-message').css("display", "inline");
    $('#pain-predicter .body-part').text("");
    selected = true;
  })

  $('.arm').click(function(){

      $('#pain-predicter').css("display", "none");
      $('#main').css("width", "60%");
      $('aside').css("width", "40%");
      $('#pain-message').css("display", "inline");
      $('#pain-predicter .body-part').text("");

      selected = true;
    })

    $('.stomach').click(function(){

        $('#pain-predicter').css("width", "%");
        $('#main').css("width", "60%");
        $('aside').css("width", "40%");
        $('#pain-message').css("display", "inline");
        $('#pain-predicter .body-part').text("");

        selected = true;
      })

      $('.leg').click(function(){

          $('#pain-predicter').css("width", "%");
          $('#main').css("width", "60%");
          $('aside').css("width", "40%");
          $('#pain-message').css("display", "inline");
          $('#pain-predicter .body-part').text("");

          selected = true;
        })

        $('.lower-leg').click(function(){

            $('#pain-predicter').css("width", "%");
            $('#main').css("width", "60%");
            $('aside').css("width", "40%");
            $('#pain-message').css("display", "inline");
            $('#pain-predicter .body-part').text("");

            selected = true;
          })
}









mouseOver()

click()

// checkForClick()



// $('boxes').mouseover(checkForPain);


  // var checkForPain = function(event) {
  //   // var $boxes = $('#board').children();
  //   // var neckpain = $('#board').children().eq(4);
  //
  //   if ($(event.target) === $('#board').children().eq(4)) {
  //     $('#human').css("background-image", 'url(images/neck-pain.jpg)');
  //   }
  //       }
  //
  //
});
