$(document).ready(function(){
     $('.parallax').parallax();
     $(".hide-card").hide();
     $(".go-up").hide();
     $(".dropdown-trigger").dropdown();
     $('.sidenav').sidenav();
     $('body').css('display', 'none');
     $('body').fadeIn(800);
     
     $('.click').click(function(e) {
         
        e.preventDefault();
        newLocation = this.href;
        $('body').fadeOut('slow', newpage);
        });
        function newpage() {
        window.location = newLocation;
        }



     if ($(window).width() < 600) {
        
$('.show-cards').on('click', function(){
   
    $(".animation").animate({
        height: '3580px' 
    },1000)

    $(".hide-card").fadeIn('slow' , function(){
        $(".hide-card").show()
        
    })

    $(".show-cards").hide();
    $(".go-up").show();

})
$('.go-up').on('click' , function(){
    $(".animation").animate({
        height: '1810px' 
    },1000)

    $(".hide-card").fadeOut('slow' , function(){
    $(".hide-card").hide()
    
})
    $(".show-cards").show()
    $(".go-up").hide();
    
})
     }else{
$('.show-cards').on('click', function(){
   
    $(".animation").animate({
        height: '1260px' 
    },1000)

    $(".hide-card").fadeIn('slow' , function(){
        $(".hide-card").show()
        
    })

    $(".show-cards").hide();
    $(".go-up").show();

})
$('.go-up').on('click' , function(){
    $(".animation").animate({
        height: '680px' 
    },1000)

    $(".hide-card").fadeOut('slow' , function(){
    $(".hide-card").hide()
    
})
    $(".show-cards").show()
    $(".go-up").hide();
    
})
    }
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          
        });
      }
    }
  });

  var loop =  $('.header') = true;


 



// function loop(){
// $(".header").animate({
//     color: "#e0f2f1",
//     color: "#80cbc4",
//     color: "#26a69a",
//     color: "#00897b ",
//     color: "#00695c",
//     color: "#00695c",
    
// },1000 , 'linear' , function(){
//     loop()
// })

// }
// loop();


// function header(){
//     $('.header').css({right:0});
//     $(".header").animate({color: "#e0f2f1",color: "#00695c"},1000, 'linear', function(){
//         header();
//     } )
// }
// header();
});
       
  
    
  
// end of document ready

  