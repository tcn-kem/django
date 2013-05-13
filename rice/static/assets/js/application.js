var terrainSelected = 0;
var north = ["Uthai Thani", "Nakhon Sawan", "Phetchabun", "Phichit", "Kamphaeng Phet", "Tak", "Sukhothai", 
				"Phitsanulok", "Uttaradit", "Phrae", "Lampang", "Lamphun", "Chiang Mai", "Mae Hong Son",
				"Chiang Rai", "Phayao", "Nan"];
var central = ["Phetchaburi", "Ratchaburi", "Samut Sakhon", "Nonthaburi", "Nakhon Pathom", "Bangkok", "Samut Prakan",
				"Samut Songkhram", "Pathum Thani", "Kanchanaburi", "Suphanburi", "Ayutthaya", "Nakhon Nayok",
				"Ang Thong", "Chainat", "Lopburi", "Saraburi", "Singburi", "Sa Kaeo", "Prachinburi", "Chachoengsao"];
var northeast = ["Nakhon Ratchasima", "Buriram", "Surin", "Sisaket", "Ubon Ratchathani", "Amnat Charoen",
				"Yasothon", "Roi Et", "Maha Sarakham", "Khon Kaen", "Chaiyaphum", "Loei", "Nongbua Lamphu",
				"Udon Thani", "Kalasin", "Mukdahan", "Sakon Nakhon", "Nakhon Phanom", "Nong Khai", "Bueng Kan"];
var east = ["Chonburi", "Rayong", "Chanthaburi", "Trat"];
var south = ["Prachuap Khiri Khan", "Chumphon", "Ranong", "Surat Thani", "Phangnga", "Phuket", "Nakhon Si Thammarat",
				"Krabi", "Phattalung", "Satun", "Songkla", "Pattani", "Yala", "Narathiwat", "Trang"];

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

	$('#banner-slide').bjqs({
			animtype : 'slide',
			width : 600,
			height: 500,
			centercontrols : false,
			showmarkers : false,
			automatic : false, 
			centermarkers : true,
			nexttext : '<i class="icon-angle-right icon-4x" style="margin-top: -380px; margin-left: 610px; position: absolute;"></i>',
			prevtext : '<i class="icon-angle-left icon-4x" style="margin-top: -380px; margin-left: -120px; position: absolute;"></i>',
			randomstart : false, 
			responsive : false
    });

    $('.bjqs-prev, .bjqs-next').click(function() {
    	if(terrainSelected == 0) 
    	{
    		$('#step3').css('background-image', "url('assets/img/moor-lakes-opabin-highland-yoho-national-park-british-columbia-canada-800x1280.jpg')");
    		$('#selected-terrain').text('Highland');
    	}
    	else 
    	{
    		$('#step3').css('background-image', "url('assets/img/House-on-a-plain.jpg')");
			$('#selected-terrain').text('Lowland');    		
    	}
		if(terrainSelected == 0) terrainSelected = 1;
		else terrainSelected = 0;
    });

    $('input[name="area"]').change(function() {
    	var areaSelected = $('input[name="area"]:checked').val();
    	$('#area').text($('input[name="area"]:checked').val());
        $('#province-list').empty();
        if(areaSelected == "North") {
            $.each(north, function(index, province) {
                $('#province-list').append($("<option></option>").attr("value", index).text(province));
            });
        }
        else if(areaSelected == "Central") {
            $.each(central, function(index, province) {
                $('#province-list').append($("<option></option>").attr("value", index).text(province));
            });   
        }
        else if(areaSelected == "North East") {
            $.each(northeast, function(index, province) {
                $('#province-list').append($("<option></option>").attr("value", index).text(province));
            });
        }
        else if(areaSelected == "East") {
            $.each(east, function(index, province) {
                $('#province-list').append($("<option></option>").attr("value", index).text(province));
            });
        }
        else {
            $.each(south, function(index, province) {
                $('#province-list').append($("<option></option>").attr("value", index).text(province));
            });
        }
        
    });

    $('#province-list').change(function() {
        var provinceSelected = $('#province-list option:selected').text();
        $('#area-selected').text('Selected: ' + provinceSelected);
        $('#selected-province').text(provinceSelected);
    });

	$('.bjqs-prev, .bjqs-next').click(function() {
		if(terrainSelected == 0) 
		{
			$('#step3').css('background-image', "url('assets/img/moor-lakes-opabin-highland-yoho-national-park-british-columbia-canada-800x1280.jpg')");
			$('#selected-terrain').text('Highland');
			$('#submit-terrain').val('highland');
		}
		else 
		{
			$('#step3').css('background-image', "url('assets/img/House-on-a-plain.jpg')");
			$('#selected-terrain').text('Lowland');    		
			$('#submit-terrain').val('lowland');
		}
		if(terrainSelected == 0) terrainSelected = 1;
		else terrainSelected = 0;
	});

	$('input[name="area"]').change(function() {
		var areaSelected = $('input[name="area"]:checked').val();
		$('#area').text($('input[name="area"]:checked').val());
		$('#province-list').empty();
		if(areaSelected == "North") {
			$.each(north, function(index, province) {
				$('#province-list').append($("<option></option>").attr("value", index).text(province));
			});
		}
		else if(areaSelected == "Central") {
			$.each(central, function(index, province) {
				$('#province-list').append($("<option></option>").attr("value", index).text(province));
			});   
		}
		else if(areaSelected == "North East") {
			$.each(northeast, function(index, province) {
				$('#province-list').append($("<option></option>").attr("value", index).text(province));
			});
		}
		else if(areaSelected == "East") {
			$.each(east, function(index, province) {
				$('#province-list').append($("<option></option>").attr("value", index).text(province));
			});
		}
		else {
			$.each(south, function(index, province) {
				$('#province-list').append($("<option></option>").attr("value", index).text(province));
			});
		}

	});

	$('#province-list').change(function() {
		var provinceSelected = $('#province-list option:selected').text();
		$('#area-selected').text('Selected: ' + provinceSelected);
		$('#selected-province').text(provinceSelected);
		$('#submit-area').val(provinceSelected);
	});
	
	// Step 1
	$('#step1 .rounded-shape').click(function() {
		$('#step1 .kind').text('Rounded Shape');
		$('#selected-kind').text('Rounded Shape');
		$('#submit-kind').val('round-shaped-rice');
		$('#step1 .kind-detail').text('Rounded Detail')
	});
	
	$('#step1 .sticky').click(function() {
		$('#step1 .kind').text('Sticky');
		$('#selected-kind').text('Sticky');
		$('#submit-kind').val('sticky-rice');
		$('#step1 .kind-detail').text('Sticky Detail')
	});
	
	$('#step1 .japanese').click(function() {
		$('#step1 .kind').text('Japanese Rice');
		$('#selected-kind').text('Japanese Rice');
		$('#submit-kind').val('japanese-rice');
		$('#step1 .kind-detail').text('Japanese Detail')
	});
	
	$('#step1 .barley').click(function() {
		$('#step1 .kind').text('Barley');
		$('#selected-kind').text('Barley');
		$('#submit-kind').val('barley-rice');
		$('#step1 .kind-detail').text('Barley Detail')
	});
	
	$('#step1 .wheat').click(function() {
		$('#step1 .kind').text('Wheat');
		$('#selected-kind').text('Wheat');
		$('#submit-kind').val('wheat');
		$('#step1 .kind-detail').text('Wheat Detail')
	});

	$('#submit-form').click(function() {
		
		if($('#submit-kind').val() == "" || $('#submit-area').val() == "") {
			alert('invalid');
			return false;
		}
		else { 
			alert('valid');
			$('#riceform').submit();
		}
	});
});