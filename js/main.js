$(document).ready(function(){

  var color = [
    " #3A66E6", 
    " #1BC9E4",
    " #FF754A", 
    "#FF4A4A",
    "#161617", 
    "#9B59B6"
  ]

  var typed = new Typed('.type', {
    strings: [ 
      " Web Designer",
      " Ux Designer",
      " Front End Developer",
    ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
  });


  $('[data-toggle="tooltip"]').tooltip();


  
  $(window).scroll(function(){
    if($(this).scrollTop()>60){
      $("nav").addClass("nav-sticky");
    }else{
      $("nav").removeClass("nav-sticky");
    }
  })


  //trager the nice scroll
  $("body").niceScroll({
    cursorcolor: '#000',
    cursorwidth: '8px',
    cursorborder: '1px solid #000',
  });

  $(".comment-container").niceScroll({
    cursorcolor: '#9B59B6',
    cursoropacitymin: .8,
    cursorwidth: '8px',
    cursorborder: '1px solid #9B59B6',
  })


})




// 