
(function(){
	
	$.smallBox=function(opciones){
		opciones=$.extend({
			titulo:    	undefined,
			subtitulo: 	undefined,
			contenido: 	undefined,
			fa: 		undefined,
			fa2: 		undefined,
			img:       	undefined,
			colorboxone: '',
			timeout:4000,
		},opciones);
		var html='';
		html+='<div class="smallBox-contenedor" >'
html+='				<div class="smallBox-foto"><img src="'+opciones.img+'"></div>'
html+='				<div class="smallBox-contenido " align="center">'	
html+='					<div class="smallBox-textocontenedor" align="left" >'
html+='			 			<span class="smallBox-titulo" >'+opciones.titulo+'</span>'
html+='			 			<span class="smallBox-subtitulo" >'+opciones.subtitulo+'</span>'
html+='					</div>'
html+='					<div class="smallBox-pico"></div>'
html+='			<div class="smallBox-cajaColor" style="background-color: '+opciones.colorboxone+'"><div class="smallBox-colorTexto"><i class="'+opciones.fa+'"></i> '+opciones.contenido+'</div>'
html+='				<div class="smallBox-colorIcon"><i class="'+opciones.fa2+' '+'fa-2x"></i></div></div>'
html+='		<div class="smallBox-sombra"></div>'

html+='	</div>'
html+='</div>';
$('body').append(html);
animar_entrada();
setTimeout(function(){
	animar_salida();
},opciones.timeout);
	};
	function animar_salida(){
		var $smallBox='';
		$smallBox = $(".smallBox-contenedor");
		var tl= new TimelineMax();
			tl.to(  $smallBox,1,{ x:"+=100px"})
				.to(  $smallBox,1,{ opacity:0,onComplete:remover_smallBox},"-=1");
	}
	function remover_smallBox(){
		$(".smallBox-contenedor").remove();
	}
	function animar_entrada(){
		var $smallBox='';
		$smallBox = $(".smallBox-contenedor");
		var tl= new TimelineMax();
			tl.from(  $smallBox,1.3,{ x:"+=100px",ease: Bounce.easeOut})
				.from(  $smallBox,1,{ opacity:0},"-=1.3");
	}

	

	
})();