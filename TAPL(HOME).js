$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        document.querySelector(".topul").classList.toggle("active");
    });
    let nav = document.querySelector(".Topnav");
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        // document.querySelector(".Out").classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
        // document.querySelector(".Out").classList.remove("sticky");
      }
    }
    $(window).resize(function () {
        // This will fire each time the window is resized:
        if ($(window).width() >= 860) {
          // if larger or equal
          
          if ($( ".Out" ).hasClass( "active" )) 
          {
        
            document.querySelector(".hamburger").click();

          }
        } 
    }).resize();
    

    window.addEventListener('scroll', reveal);
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');
      console.log("reveals",reveals);
      for (var i = 0; i < reveals.length; i++) {
        console.log("reveal");
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < (windowheight - revealpoint)) {
          reveals[i].classList.add('active');
  
        }
        else {
          reveals[i].classList.remove('active');
        }
      }
    }

    // slideshow code
    
    //
});
