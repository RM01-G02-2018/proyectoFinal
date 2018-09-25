
//alerta al seleccionar los enlaces de las redes sociales
$('#facebook').click(function(){
        alert("Este enlace te mandara al perfil del creador");
    });
    $('#correo').click(function(){
        alert("Este enlace te mandara al correo del creador");
    });
  
    // barra de navegacion 
        //tomamos la altura
    var altura = $('nav').offset().top;
    //verificamos el scroll
    $(window).on('scroll', function(){
        //si escroll es mayor a altura
        if ( $(window).scrollTop() > altura ){
            $('nav').addClass('NavFixed');
        } else {
            $('nav').removeClass('NavFixed');
        }
    });

    //funcion de botones del nav
        //boton de novedades
    $("#Ir-novedades").on("click", function(Evento){
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#Novedades").offset().top - 90
        }, 500);
    });
        //boton de Categorias
    $("#Ir-categorias").on("click", function(Evento){
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#Categorias").offset().top - 120
        }, 500);
    });

//Efecto en texto
//
$(document).ready(function(){
    $('.logo-header').hover(function(){
        //color de texto al ser seleccionado con el puntero
        $(this).css('color','rgba(165, 75, 75, 0.925)');
    
    },function(){
            //color del texto cuando el puntero salga 
        $(this).css('color','rgba(198, 200, 204, 0.925) ');
    });
});

$(document).ready(function(){
    $('.color').hover(function(){
        //color de texto al ser seleccionado con el puntero
        $(this).css('color','rgba(165, 75, 75, 0.925)');
    
    },function(){
            //color del texto cuando el puntero salga 
        $(this).css('color','rgba(198, 200, 204, 0.925) ');
    });
});


//ver o ocultar 
$(document).ready(function(){ 
    $('.alternar-respuesta').on('click',function(e){
        $(this).parent().next().toggle();
        e.preventDefault();
    });
    $('#alternar-todo').on('click',function(e){
        $('.respuesta').toggle('slow');
        e.preventDefault();
    });
});





    //efecto de imagenes
    $(document).ready(function(){
        $('.zoom').hover(function() {
            $(this).addClass('transition');
        }, function() {
            $(this).removeClass('transition');
        });
    });

    //efecto de mas contenido .aside-item de
    $(document).ready(function(){
        $('.aside-item').hover(function() {
            $(this).addClass('transition');
        }, function() {
            $(this).removeClass('transition');
        });
    });



// slider
$(document).ready(function(){
	var imgItems = $('.slider2 li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination2').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider2 li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination2 li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination2 li').click(pagination);
	$('.right2 span').click(nextSlider);
	$('.left2 span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 2000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination2 li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination2 li').css({'color': '#858585'});
		$('.pagination2 li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination2 li').css({'color': '#858585'});
		$('.pagination2 li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider2 li').hide(); // Ocultamos todos los slides
		$('.slider2 li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});
