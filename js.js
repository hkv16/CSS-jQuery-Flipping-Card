
$( document ).ready(function() {

	// Adding and removing the flip function with a delay
	$(".panel").mouseenter(function() {            
	    var self = $(this);    
	
	    self.addClass('flip');
	
	    window.setTimeout(function() {
	        self.removeClass('flip');
	    }, 3000);
	});


});
