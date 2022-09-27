
$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  // console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});

// progress bars

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:80%;transition:1s all;");
    p[1].setAttribute("style", "width:25%;transition:1.5s all;");
    p[2].setAttribute("style", "width:70%;transition:1.7s all;");
    p[3].setAttribute("style", "width:70%;transition:2s all;");
    p[4].setAttribute("style", "width:85%;transition:2.3s all;");
    // p[5].setAttribute("style", "width:95%;transition:2.5s all;");


  },
   offset: '90%'
});

// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});


var filterizd = $('.filter-container').filterizr({
  animationDuration: .5,

});

// $('.img-loaded').imagesLoaded()
//   .done( function( instance ) {
//     var filterizd = $('.filter-container').filterizr({
//        animationDuration: .5,
//
//     });
//   });


  var typed = new Typed(".element", {
  strings: ["Yannic", "a Developer","a Designer","a win for humanity"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 150,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
});


$('a').smoothScroll({

  speed:2000,
});






function validateContact() {
  var valid = true;	
  $(".demoInputBox").css('background-color','');
  $(".info").html('');
  if(!$("#userName").val()) {
      $("#userName-info").html("(required)");
      $("#userName").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#userEmail").val()) {
      $("#userEmail-info").html("(required)");
      $("#userEmail").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
      $("#userEmail-info").html("(invalid)");
      $("#userEmail").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#subject").val()) {
      $("#subject-info").html("(required)");
      $("#subject").css('background-color','#FFFFDF');
      valid = false;
  }
  if(!$("#content").val()) {
      $("#content-info").html("(required)");
      $("#content").css('background-color','#FFFFDF');
      valid = false;
  }
  return valid;
}

 $("#submit").click(function(){
   sendContact();
 });

function sendContact() {
  var valid;	
  valid = validateContact();
  if(valid) {
      $.ajax({
          url: "contact.php",
          data:'userName='+$("#userName").val()+'&userEmail='+
          $("#userEmail").val()+'&subject='+
          $("#subject").val()+'&content='+
          $("#content").val(),
          type: "POST",
          cache:false,
          success:function(data){
              $("#mail-status").html(data);
          },
          error: function () {
            console.log("errorr :(")
          }
      });
  }
}



});
