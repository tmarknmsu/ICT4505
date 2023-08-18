document.addEventListener("DOMContentLoaded", function () {

    
    
    
      // Toggle the list down
   
    $( function() {
      // run the currently selected effect
      function runEffect() {
        // get effect type from
      //   var selectedEffect = $( "#effectTypes" ).val();
   
        // Most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( "blind" === "scale" ) {
          options = { percent: 50 };
        } else if ( "blind" === "size" ) {
          options = { to: { width: 200, height: 60 } };
        }
   
        // Run the effect
        $( "#effect" ).toggle( "blind", options, 500 );

      };
   
      // Set effect from select menu value
      $( "#hamburger" ).on( "click", function() {
        runEffect();
      });
    } );


    // Parallax effect for the static picture
    window.addEventListener('scroll', function () {
      const parallax = document.querySelector('.staticPicture');
      let scrollPosition = window.scrollY;
      parallax.style.transform = 'translateY(' + scrollPosition * -0.1 + 'px)';
    });


    
    
  });
  