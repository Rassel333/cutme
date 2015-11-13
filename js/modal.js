$(document).ready(function() { 
	$('a.signup').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#signup-form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
    $('a.signin').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#signin-form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});

	$('#modal_close, #overlay').click( function(){ 
		$('#signup-form, #signin-form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});