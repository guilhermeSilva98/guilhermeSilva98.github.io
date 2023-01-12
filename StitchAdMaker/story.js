$( document ).ready(function() {


	var baseText
	var storyImage;
	var scale = 1;
	var nomeCarro;
	var anoCarro;
	var entrada;
	var parcela;
	var selo;
	var position = 1080/2.3;
	var selo = new Image();

	

$('.selo').on('change', function(e){
	selo.src = 'badges/'+$(this).data('selo')+'.png';
})

$('#criarStory').on('click', function(e){

	e.preventDefault();
	$('#adStoryCanvas').clearCanvas();
	$('#baixarImagem').removeClass('hidden');
	$('#baixarImagem').on('click', function(e){
		$(this).attr('download', nomeCarro);
		$(this).attr('href', $('#adStoryCanvas').getCanvasImage('png'));
	})


	//DESCOMENTAR
	baseText = $('#fld-texto').val().split(/(?:\r?\n)+/);

	var infos = baseText[2].split('$');

	entrada = parseInt(infos[1]);
	parcela = parseInt(infos[2]);

	anoCarro = baseText[0].slice(0,4);
	nomeCarro = baseText[0].slice(5);


	$('#adStoryCanvas').addLayer({
		
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/1.15), y: 625,
		fontSize: 30,
		fontFamily: 'Montserrat',
		text: '/MÊS',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/1.24), y: 540,
		fontSize: 200,
		fontFamily: 'Bebas Neue, cursive',
		text: parcela,
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#614a1a',
		x: (1080/1.45), y: 520,
		fontSize: 150,
		fontFamily: 'Bebas Neue, cursive',
		text: '$',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/1.35), y: 410,
		fontSize: 80,
		fontFamily: 'Bebas Neue, cursive',
		text: entrada,
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#614a1a',
		x: (1080/1.48), y: 410,
		fontSize: 80,
		fontFamily: 'Bebas Neue, cursive',
		text: '$',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#6d6c6a',
		x: (1080/1.2), y: 418,
		fontSize: 200,
		fontFamily: 'Bebas Neue, cursive',
		text: '+',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/1.33), y: 350,
		fontSize: 28,
		fontFamily: 'Montserrat, cursive',
		text: 'ENTRADA DE',
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/2), y: 160,
		fontSize: 40,
		fontFamily: 'Montserrat, cursive',
		text: anoCarro, //anoCarro
		maxWidth: 800
	}).drawText({
		layer: true,
		index: 2,
		fillStyle: '#F0AF39',
		x: (1080/2), y: 230,
		fontSize: 80,
		fontFamily: 'Bebas Neue, cursive',
		text: nomeCarro, //nomeCarro
		maxWidth: 800
	}).addLayer({
		type: 'image',
		index:1,
		source: selo,
		x: (1080/1.27), y: 790,
		scale:0.75
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