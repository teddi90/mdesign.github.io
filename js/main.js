jQuery(document).ready(function($) {
	$(".hamburger").on("click", function(){
	    $(this).toggleClass("hamburger__active");
	    $(".menu").toggleClass("menu__active");  
    });

	var wrap = $('.navigation');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1315) {
		      wrap.addClass('navigation__fixed');
		    } else {
		      wrap.removeClass('navigation__fixed');
		    }
	});

	var phone = $('.btn-phone');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1315) {
		      phone.addClass('btn-phone__fixed');
		    } else {
		      phone.removeClass('btn-phone__fixed');
		    }
	});

	var arrow = $('.btn-up');
	$(window).on('scroll', function(e) {
		if ($(this).scrollTop() > 1315) {
		      arrow.addClass('btn-up__fixed');
		    } else {
		      arrow.removeClass('btn-up__fixed');
		    }
	});

	$('.serv-info').on('click', function(event) {
	  var parentItem = $(this).parent();
	  parentItem.find('.serv-info__hidden').stop().slideToggle();
	  // parentItem.find('.btn-services:after').css({"content","МЕНШЕ"});
	 });

    $(".menu").on("click","a", function () {
	   $(".hamburger").removeClass("hamburger__active");
	   $(".menu").removeClass("menu__active");  
    });	

    $(".menu, .scroll").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
	});

	$(".btn-more").on("click", function(){
		event.preventDefault();
	    $('.hidden').toggleClass("show");
    });

	$('#slider').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  pauseOnHover:false,
	  arrows:false,
	  fade: true,
	  cssEase: 'linear'
	});

	$('.slider-what__work').slick({
	  dots: false,
	  infinite: true,
	  autoplay: false,
	  arrows:true,
	  fade: true,
	  cssEase: 'linear'
	});
	
   $('.features__slider').slick({
	  dots: true,
	  infinite: true,
	  arrows:false,
	  slidesToShow: 3,
  	  slidesToScroll: 3,
	  cssEase: 'linear'
	});

    $('.team__slider').slick({
	  dots: true,
	  infinite: true,
	  arrows:false,
	  slidesToShow: 4,
  	  slidesToScroll: 4,
	  cssEase: 'linear'
	});

	
}) 


