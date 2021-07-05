$(function(){

	$('.info__tab').on('click', function(e){
		e.preventDefault();
		$('.info__tab').removeClass('info__tab--active');
		$(this).addClass('info__tab--active');
		$('.info__tabs-content').removeClass('info__tabs-content--active')
		$($(this).attr('href')).addClass('info__tabs-content--active')
	});

	$('.info__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
	});
	$('.sponsor__slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dotsClass:'sponsor__dots',
		prevArrow:'<svg class="slick-prevarrow" width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5607 0.46473C17.0932 0.997264 17.1416 1.83059 16.7059 2.41781L16.5607 2.58605L3.622 15.5254L16.5607 28.4647C17.0932 28.9973 17.1416 29.8306 16.7059 30.4178L16.5607 30.5861C16.0281 31.1186 15.1948 31.167 14.6076 30.7313L14.4393 30.5861L0.439341 16.5861C-0.0931931 16.0535 -0.141605 15.2202 0.294104 14.633L0.439341 14.4647L14.4393 0.46473C15.0251 -0.121056 15.9749 -0.121056 16.5607 0.46473Z" fill="#8FAEE6"/></svg>',
		nextArrow:'<svg class="slick-nextarrow" width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.43934 30.5607C-0.0931933 30.0281 -0.141605 29.1948 0.294104 28.6076L0.43934 28.4393L13.378 15.5L0.43934 2.56066C-0.0931933 2.02813 -0.141605 1.1948 0.294104 0.607576L0.43934 0.439341C0.971873 -0.0931931 1.8052 -0.141605 2.39242 0.294104L2.56066 0.439341L16.5607 14.4393C17.0932 14.9719 17.1416 15.8052 16.7059 16.3924L16.5607 16.5607L2.56066 30.5607C1.97487 31.1464 1.02513 31.1464 0.43934 30.5607Z" fill="#8FAEE6"/></svg>',
		responsive: [
			{
				breakpoint: 1390,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.for__content-button,.tabs-content__button').on('click', function(e){
		$('.modal').addClass('modal--active')
		$('body').css('overflow', 'hidden')
	});
	$('.modal__exit').on('click', function(e){
		$('.modal').removeClass('modal--active')
		$('body').css('overflowY', 'scroll')
	});
	$('.header__burger').on('click', function(e){
		$('.nav__items').toggleClass('nav__items--active')
		$('.info__tabs').toggleClass('info__tabs--active')
	})

});