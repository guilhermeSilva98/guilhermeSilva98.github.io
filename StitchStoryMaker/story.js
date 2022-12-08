$( document ).ready(function() {

	var storyImage;
	var scale = 1;
	var nomeCarro;
	var anoCarro;
	var entrada;
	var parcela;
	var selo;
	var position = 1920/2.5;
	var selo = new Image();

	

$('.selo').on('change', function(e){
	selo.src = 'badges/'+$(this).data('selo')+'.png';
	console.log(selo);
})

$('#criarStory').on('click', function(e){
	e.preventDefault();
	$('#adStoryCanvas').clearCanvas();
	$('#baixarImagem').removeClass('hidden');
	$('#baixarImagem').on('click', function(e){
		$(this).attr('href', $('#adStoryCanvas').getCanvasImage('png'));
	})

	var infoCarro = $('#fld-nomeCarro').val();
	anoCarro = infoCarro.slice(0,4);
	nomeCarro = infoCarro.slice(5);

	entrada = '$'+$('#fld-entrada').val().slice(0,1)+'.'+$('#fld-entrada').val().slice(1)+',00';
	parcela = $('#fld-parcela').val();

	$('#adStoryCanvas').addLayer({
		
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/2), y: 1770,
		fontSize: 80,
		fontFamily: 'Montserrat',
		text: '/MÊS',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: ((1080/3)+50), y: 1630,
		fontSize: 300,
		fontFamily: 'Bebas Neue, cursive',
		text: parcela,
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: ((1080/4)-80), y: 1560,
		fontSize: 100,
		fontFamily: 'Bebas Neue, cursive',
		text: '$',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/4), y: 1440,
		fontSize: 100,
		fontFamily: 'Bebas Neue, cursive',
		text: entrada,
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#6d6c6a',
		x: (1080/2.4), y: 1440,
		fontSize: 200,
		fontFamily: 'Bebas Neue, cursive',
		text: '+',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/4), y: 1350,
		fontSize: 40,
		fontFamily: 'Montserrat, cursive',
		text: 'ENTRADA DE',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/2), y: 220,
		fontSize: 40,
		fontFamily: 'Montserrat, cursive',
		text: anoCarro,
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/2), y: 290,
		fontSize: 80,
		fontFamily: 'Bebas Neue, cursive',
		text: nomeCarro,
		maxWidth: 800
	}).addLayer({
		type: 'image',
		index:1,
		source: selo,
		x: (1080/1.4), y: 1350
	}).addLayer({
		type: 'image',
		index:1,
		source: 'StoryOverlayTop.png',
		x: (1080/2), y: 195
	}).addLayer({
		type: 'image',
		index:1,
		source: 'StoryOverlayBottom.png',
		x: (1080/2), y:1575
	}).addLayer({
		type: 'image',
		name: 'storyImage',
	  	source: storyImage,  
	  	x: (1080/2), y: position,
		scale:scale,
		draggable: true,
		index:0,
	});

	$('#adStoryCanvas').drawLayers();
});


$('#fld-imagem').on('change', function(e){
	storyImage = new Image();
	storyImage.src = URL.createObjectURL(e.target.files[0]);
});


$('.adjustBtn').on('click',function(e){
	e.preventDefault();
	if($(this).data('resize') == 'Up'){
		$('#adStoryCanvas').setLayer('storyImage',{
			scale:scale+0.2
		}).drawLayers();
		scale=scale+0.2
	}else if($(this).data('resize') == 'Down'){
		$('#adStoryCanvas').setLayer('storyImage',{
			scale:scale-0.2
		}).drawLayers();
		scale=scale-0.2
	}else if($(this).data('nudge') == 'Up'){
		$('#adStoryCanvas').setLayer('storyImage',{
			y:position-10
		}).drawLayers();
		position = position-10;
	}else if($(this).data('nudge') == 'Down'){
		$('#adStoryCanvas').setLayer('storyImage',{
			y:position+10
		}).drawLayers();
		position = position+10;
	}
})








});