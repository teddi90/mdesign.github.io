jQuery(document).ready(function($) {
	
	// mobile menu

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.mobile-nav').toggleClass('is-active');
	});

	$(document).click( function(event){
		if( $(event.target).closest(".nav-inner, .hamburger").length)
			return;
		$('.mobile-nav').removeClass('is-active');
		$('.hamburger').removeClass('is-active');
		event.stopPropagation();
	});

	 $('.menu-item > a ').click(function(){
		$('.mobile-nav').removeClass('is-active');
		$('.hamburger').removeClass('is-active');
	});

	$('.b-mobile-close ').click(function(){
		$('.mobile-nav').removeClass('is-active');
		$('.hamburger').removeClass('is-active');
	});

	// $(".mobile-nav").swipe( {
	// 	swipeLeft:function() {
	// 		$('.hamburger').removeClass('is-active');
	// 		$(".mobile-nav").removeClass('is-active');
	// 	},
	// 	threshold:50
	// });

	var wrap = $('.navigation');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1448) {
		      wrap.addClass('navigation__fixed');
		    } else {
		      wrap.removeClass('navigation__fixed');
		    }
	});
	
	var phone = $('.btn-phone');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1448) {
		      phone.slideDown().addClass('btn-phone__fixed');
		    } else {
		      phone.slideUp().removeClass('btn-phone__fixed');
		    }
	});

	var arrow = $('.btn-up');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1448) {
		      arrow.slideDown().addClass('btn-up__fixed');
		    } else {
		      arrow.slideUp().removeClass('btn-up__fixed');
		    }
	});
		
    $(".menu, .scroll").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({scrollTop: top}, 1500);
	});

	$(".menu-item").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top -50;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({scrollTop: top}, 1500);
	});

	 $('.btn-more').on('click', function(event) {
		 event.preventDefault();
		 var innerBText = $(this).text(); // Внутрішній текст кнопки

		 if (innerBText == 'Показати більше робіт') {
		  $(this).text('Приховати роботи');
		  // Тут можна поставити slideDown();
		  $('.hidden').slideDown().toggleClass("show");
		 } else {
		  $(this).text('Показати більше робіт');
		  // Тут slideUp();
		  $('.hidden').slideUp().removeClass("show");
		 }
	});

	$('.input__field').each(function() {
        var $parentSpan = $(this).parent('span');
        if ($(this).val().trim() !== "") {
            $parentSpan.addClass('input--filled');
        } else {
            $parentSpan.removeClass('input--filled');
        }
    });
    $('.input__field').focusout(function(event) {
        var $parentSpan = $(this).parent('span');
        if ($(this).val().trim() !== "") {
            $parentSpan.addClass('input--filled');
            $parentSpan.removeClass('input--hoshi-error');
        } else {
            $parentSpan.removeClass('input--filled');
        }
    }); 

     $('#input-tell, #modal__input-tell').mask('(000) 000-00-00'); //maska input

	$('#slider').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  pauseOnHover:false,
	  arrows:true,
	  fade: true,
	  cssEase: 'linear',
	  nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><div>',
  	  prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><div>'
	});

	$('.slider-what__work1').slick({
	  dots: false,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows:true,
	  fade: true,
	   cssEase: 'linear',
	  nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><div>',
  	  prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><div>'
	});

	$('.slider-what__work2').slick({
		  dots: false,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 4000,
		  arrows:true,
		  fade: true,
		   cssEase: 'linear',
		  nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><div>',
	  	  prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><div>'
		});

	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
}) 


