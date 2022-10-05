
$( document ).ready(function() {

	var carros;

	$('#StoryCanvas').addLayer({
		type: 'image',
		source: 'StoryOverlayTop.png',
		x: (1080/2), y: 195
	}).addLayer({
		type: 'image',
		source: 'StoryOverlayBottom.png',
		x: (1080/2), y:1570
	}).drawLayers();
	


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
})


$('#storyImageUpload input').on('change', function(e){
	$('#storyImageUpload').addClass('hidden');
	$('#baixarImagem').removeClass('hidden');
	var storyImage = new Image();
	storyImage.src = URL.createObjectURL(e.target.files[0]);
	var scale = 0.8
	$('#StoryCanvas').addLayer({
		type: 'image',
		name: 'storyImage',
	  	source: storyImage,  
	  	x: (1080/2), y: 1080/2,
		scale:scale,
		draggable: true
	}).addLayer({
		type: 'image',
		source: 'storyOverlayUp.png',
		x: (1080/2), y: 98
	}).addLayer({
		type: 'image',
		source: 'storyOverlayBottom.png',
		x: (1080/2), y: 915
	}).drawLayers();

	// $('.resizeButton').on('click',function(e){
	// 	e.preventDefault();
	// 	if($(this).data('resize') == 'Up'){
	// 		$('#storyPostCanvas').setLayer('storyImage',{
	// 			scale:scale+0.2
	// 		}).drawLayers();
	// 		scale=scale+0.2
	// 	}else if($(this).data('resize') == 'Down'){
	// 		$('#storyPostCanvas').setLayer('storyImage',{
	// 			scale:scale-0.2
	// 		}).drawLayers();
	// 		scale=scale-0.2
	// 	}
	// })

	// $('#baixarImagem').on('click', function(e){
	// 	$(this).attr('href', $('#storyPostCanvas').getCanvasImage('png'));
	// })

});








});