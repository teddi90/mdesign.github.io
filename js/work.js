jQuery(document).ready(function($) {
	$('.js-show-mobile').click(function(){
		$(this).toggleClass('is-active');
		$('.b-mobile-nav').addClass('is-active');
	});

	$(document).click( function(event){
		if( $(event.target).closest(".b-mobile-nav__inner, .js-show-mobile").length)
			return;
		$('.b-mobile-nav').removeClass('is-active');
		$('.b-hamburger').removeClass('is-active');
		event.stopPropagation();
	});
	$('.menu-item > a ').click(function(){
		$(this).toggleClass('is-active');
		$('.b-mobile-nav').addClass('is-active');
	});

	var wrap = $('.navigation');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1439) {
		      wrap.addClass('navigation__fixed');
		    } else {
		      wrap.removeClass('navigation__fixed');
		    }
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

	var phone = $('.btn-phone');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1439) {
		      phone.slideDown().addClass('btn-phone__fixed');
		    } else {
		      phone.slideUp().removeClass('btn-phone__fixed');
		    }
	});

	var arrow = $('.btn-up');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1439) {
		      arrow.slideDown().addClass('btn-up__fixed');
		    } else {
		      arrow.slideUp().removeClass('btn-up__fixed');
		    }
	});

	$('.serv-info').on('click', function(event) {
	  var parentItem = $(this).parent();
	  parentItem.find('.serv-info__hidden').stop().slideToggle();
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

            top = $(id).offset().top -52;

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

	
}) 


