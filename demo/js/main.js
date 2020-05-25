// alert("huhu 1");






(function($){
    // use $ here safely

    // document ready
    $(function() {
    	console.log( "ready!" );
    	
    	
        // // use defaulte and/or data-attr	
    	$('.toggleHeight').toggleMoreLess();
    	
    	// // set options
    	// // toggleAtHeight will be overwritten with data-attr if set
    	// $('.toggleHeight').toggleMoreLess({
    	//     duration:        500,       // Dauer der Animation, standard: 500
        //     easing:          "swing",    // Easing-Effekt, standard:  "swing"
        //     toggleAtHeight:  400	     // Höhe in px, standard 400, can be overwritten with data-attr
    	// });
   
            
            
    });
})(jQuery);