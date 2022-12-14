
$( document ).ready(function() {

	var carros;
	
	$('#myCanvas').drawImage({
		source: 'carDataBg.png',
		x: (1080/2), y: (1080/2)
	});
	
	$('#soldPostCanvas').addLayer({
		type: 'image',
		source: 'soldOverlayUp.png',
		x: (1080/2), y: 98
	}).addLayer({
		type: 'image',
		source: 'soldOverlayBottom.png',
		x: (1080/2), y: 915
	}).drawLayers();
	
	$.ajax({
	  url: "carData.json",
	  type: 'GET',
	  dataType: 'json'
	}).done(function(e) {
	
		for (var i = 0; i <= e.length - 1; i++) {
			$('#carros').append("<option value='"+i+"'>"+e[i].carName+"</option>")
			// console.log(e[i].carName);
		}
	
		$("#carros").on("change", function(evt){
			// console.log(e[$(this).val()].carName);
			$('#carName').text(e[$(this).val()].carName);
			$('#milhagem').text(e[$(this).val()].Milhagem);
			$('#motor').text(e[$(this).val()].Motor);
			$('#sist').text(e[$(this).val()].SistemaTransmissao);
			$('#trim').text(e[$(this).val()].Trim);
			$('#mpg').text(e[$(this).val()].MPG);
			$('#transm').text(e[$(this).val()].Transmissao);
			$('#price').text(e[$(this).val()].carPrice);
	
	
			var ano = e[$(this).val()].carName.slice(0,4);
	
	
	
			$('#myCanvas').drawImage({
			  source: 'carDataBg.png',
			  x: (1080/2), y: (1080/2)
			});
	
			$('#myCanvas').drawText({
			  fillStyle: '#F0AF39',
			  x: (1080/2), y: 230,
			  fontSize: 80,
			  fontFamily: 'Bebas Neue, cursive',
			  text: (e[$(this).val()].carName),
			  maxWidth: 800
			});
	
			$('#myCanvas').drawText({
			  fillStyle: '#F0AF39',
			  x: (1080/2), y: 900,
			  fontSize: 150,
			  fontFamily: 'Bebas Neue, cursive',
			  text: (e[$(this).val()].carPrice)
			});
		})
	});
	
	$('#tabSelector button').on('click', function(e){
		if ($(this).attr('class') != 'active'){
			$('#tabSelector button').removeClass('active');
			$(this).addClass('active');
			$('.tabContent').addClass('hidden');
			var targetTab = $('#'+$(this).data('target'));
			targetTab.removeClass('hidden');
		}
	})
	


$('#soldImageUpload input').on('change', function(e){
	$('#soldImageUpload').addClass('hidden');
	$('#baixarImagem').removeClass('hidden');
	var soldImage = new Image();
	soldImage.src = URL.createObjectURL(e.target.files[0]);
	var scale = 0.8
	$('#soldPostCanvas').addLayer({
		type: 'image',
		name: 'soldImage',
	  	source: soldImage,  
	  	x: (1080/2), y: 1080/2,
		scale:scale,
		draggable: true
	}).addLayer({
		type: 'image',
		source: 'soldOverlayUp.png',
		x: (1080/2), y: 98
	}).addLayer({
		type: 'image',
		source: 'soldOverlayBottom.png',
		x: (1080/2), y: 915
	}).drawLayers();

	$('.resizeButton').on('click',function(e){
		e.preventDefault();
		if($(this).data('resize') == 'Up'){
			$('#soldPostCanvas').setLayer('soldImage',{
				scale:scale+0.2
			}).drawLayers();
			scale=scale+0.2
		}else if($(this).data('resize') == 'Down'){
			$('#soldPostCanvas').setLayer('soldImage',{
				scale:scale-0.2
			}).drawLayers();
			scale=scale-0.2
		}
	})

	$('#baixarImagem').on('click', function(e){
		$(this).attr('href', $('#soldPostCanvas').getCanvasImage('png'));
	})

	// soldImage.onload = function(){
	// 	// var image = $('#soldPostCanvas').getCanvasImage('png');
	// 	// $('#baixarImagem').attr('download', 'sold.png');
	// 	// $('#baixarImagem').attr('href', image);
		
		
	// }

});


$('#removerImagem').on('click', function(){
	$('#baixarImagem').addClass('hidden');
	$('#soldPostCanvas').removeLayer('soldImage').drawLayers();
	$('#soldPostCanvas').addLayer({
		type: 'image',
		source: 'soldOverlayUp.png',
		x: (1080/2), y: 98
	}).addLayer({
		type: 'image',
		source: 'soldOverlayBottom.png',
		x: (1080/2), y: 915
	}).drawLayers();
	$('#soldImageUpload').removeClass('hidden');
});








});