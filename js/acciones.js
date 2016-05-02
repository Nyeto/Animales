//JavaScript
	
$(document).ready(function(e){	
$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
	//precarga el sonido
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('cerdo','audio/cerdo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('chivo','audio/chivo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('gallo','audio/gallo.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('ganzos','audio/ganzos.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('leon','audio/leon.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('puma','audio/puma.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('rana','audio/rana.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('gorila','audio/gorila.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('monos','audio/monos.mp3',function(){},function(e){alert('Error '+e);});

	
	//reproducir las notas
	
	$('.nota').bind('touchstart', function(){$(this).addClass('tocada'); audio.play($(this).attr('id'));});
	$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
	
	
	},false); //deviceready
});//ready