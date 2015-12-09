$(document).ready(function()    {
	console.log("This is running") // To see if this is actually working in browser console log

	// Adding and removing the flip function with a delay
	$(".card").hover(function() {     
		
		console.log("Hover activate") // To see if this is actually working in browser console log
		
	    var self = $(this);    

	    self.addClass('flip');
	
	    window.setTimeout(function() {
	        self.removeClass('flip');
	    }, 3000);
	});


});
