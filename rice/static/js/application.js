$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		 });
	});
	
	$('#logo').click(function() {
		$('html, body').animate({ scrollTop: 0}, 1000)
	});

	$('#round-shaped-rice').click(function() {
		$('#submit-kind').val('round-shaped-rice');
		$('#submit-kind-text').text('Round Shaped Rice');
		$('#round-shaped-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#sticky-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#japanese-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#wheat').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$(this).css({'border-style' : 'solid', 'border-width' : '5px', 'border-color' : '#d4cdbe'});
	});

	$('#sticky-rice').click(function() {
		$('#submit-kind').val('sticky-rice');
		$('#submit-kind-text').text('Sticky Rice');
		$('#round-shaped-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#sticky-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#japanese-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#wheat').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$(this).css({'border-style' : 'solid', 'border-width' : '5px', 'border-color' : '#d5e2df'});
	});

	$('#japanese-rice').click(function() {
		$('#submit-kind').val('japanese-rice');
		$('#submit-kind-text').text('Japanese Rice');
		$('#round-shaped-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#sticky-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#japanese-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#wheat').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$(this).css({'border-style' : 'solid', 'border-width' : '5px', 'border-color' : '#d9bde5'});
	});

	$('#wheat').click(function() {
		$('#submit-kind').val('wheat');
		$('#submit-kind-text').text('Wheat');
		$('#round-shaped-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#sticky-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#japanese-rice').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$('#wheat').css({'border-style' : '', 'border-width' : '', 'border-color' : ''});
		$(this).css({'border-style' : 'solid', 'border-width' : '5px', 'border-color' : '#bfa9a7'});
	});

   	$('#area-select').select2({
    	placeholder: "Select a Province"
	}); 

   	$('#area-select').change(function() {
   		$('#submit-area').val($('#area-select').val());
   		$('#submit-area-text').text($('#area-select').val());
   	})

	$('#area i').bind('click', function() {
		$('#area-select').select2('open');
	});

	$('#submit-button').click(function() {
		if($('#submit-kind').val() == "" || $('#submit-area').val() == "") {
			return false;
		}
		else { 
			$('#riceform').submit();
		}
	});
});