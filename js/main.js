$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

/*--------button model ----*/

//modal1---------------------
$(document).ready(function(){
    $("#myBtn1").click(function(){
        $("#myModal1").modal();
    });
});

//modal2-------------------------
$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myModal2").modal();
    });
});

//modal3------------------
$(document).ready(function(){
    $("#myBtn3").click(function(){
        $("#myModal3").modal();
    });
});

//modal4------------------
$(document).ready(function(){
    $("#myBtn4").click(function(){
        $("#myModal4").modal();
    });
});

//modal5------------------
$(document).ready(function(){
    $("#myBtn5").click(function(){
        $("#myModal5").modal();
    });
});

//modal6------------------
$(document).ready(function(){
    $("#myBtn6").click(function(){
        $("#myModal6").modal();
    });
});

