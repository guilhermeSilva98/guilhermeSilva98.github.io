$( document ).ready(function() {

	var baseText
	var storyImage;
	var scale = 1;
	var nomeCarro;
	var anoCarro;
	var entrada;
	var parcela;
	var cashPrice;
	var selo;
	var position = 1920/2.3;
	var selo = new Image();

	

	

$('.selo').on('change', function(e){
	selo.src = 'badges/'+$(this).data('selo')+'.png';
})

$('#criarStory').on('click', function(e){
	e.preventDefault();
	$('#adStoryCanvas').clearCanvas();
	$('#baixarImagem').removeClass('hidden');
	$('#baixarImagem').on('click', function(e){
		$(this).attr('download', anoCarro+' '+nomeCarro);
		$(this).attr('href', $('#adStoryCanvas').getCanvasImage('png'));
	})

	const text = $('#fld-texto').val();
	const entryRegex = /Entrada\s\$(\d+)/;
	const monthlyRegex = /\+\s\$(\d+)\s/;
	const singleRegex = /\$(\d+)\s/;

	const entryMatch = text.match(entryRegex);
	const monthlyMatch = text.match(monthlyRegex);
	const singleMatch = text.match(singleRegex);

	let entryPrice = 0;
	let monthlyPrice = 0;
	let singlePrice = 0;

	if (entryMatch && monthlyMatch) {
		entryPrice = parseInt(entryMatch[1]);
		monthlyPrice = parseInt(monthlyMatch[1]);
	} else if (singleMatch) {
		singlePrice = parseInt(singleMatch[1]);
	}

	

	baseText = $('#fld-texto').val().split(/(?:\r?\n)+/);

	anoCarro = baseText[0].slice(0,4);
	nomeCarro = baseText[0].slice(5);

	if (entryPrice && monthlyPrice) {
		entrada = "$"+entryPrice
		parcela = monthlyPrice

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
			x: (1080/2), y: 250,
			fontSize: 40,
			fontFamily: 'Montserrat, cursive',
			text: anoCarro,
			maxWidth: 800
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: (1080/2), y: 320,
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
			x: (1080/2), y: 250
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
	} else if (singlePrice) {
		cashPrice = singlePrice

		$('#adStoryCanvas').addLayer({
		
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: (1080/3)-30, y: 1650,
			fontSize: 60,
			fontFamily: 'Montserrat',
			text: 'CASH PRICE',
			maxWidth: 800
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: ((1080/3)-30), y: 1540,
			fontSize: 250,
			fontFamily: 'Bebas Neue, cursive',
			text: cashPrice,
			maxWidth: 800
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: ((1080/4)-170), y: 1500,
			fontSize: 100,
			fontFamily: 'Bebas Neue, cursive',
			text: '$',
			maxWidth: 800
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: (1080/2), y: 250,
			fontSize: 40,
			fontFamily: 'Montserrat, cursive',
			text: anoCarro,
			maxWidth: 800
		}).drawText({
			layer: true,
			index: 2,
			fillStyle: '#F0AF39',
			x: (1080/2), y: 320,
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
			x: (1080/2), y: 250
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
	}

	
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