
(function ($) {
     'use strict';
       	
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["Nice to meet you.", "I live in Arlington, TX.", "I love programming.", "I am a software developer."],    /* You can change the home section typing text from here and do not use "&" use "and" */
            typeSpeed: 50,
            backDelay: 1000,
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

   })(jQuery);