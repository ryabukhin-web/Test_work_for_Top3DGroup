"use strict";

jQuery(function () {

    jQuery(".dropdown").click(function () {
        if (jQuery(".dropdown__list").is(':visible') && jQuery(this).children(".dropdown__list").is(':hidden')) {
            jQuery(".dropdown__list").hide();
            jQuery(this).children(".dropdown__list").slideToggle();
        } else {
            jQuery(this).children(".dropdown__list").slideToggle();
        }
    });

    jQuery(".dropdown__item").click(function () {
        jQuery(this).parent().parent().children(".dropdown__text").html(jQuery(this).html());
    });

    jQuery(document).click(function (event) {
        if(!jQuery(event.target).closest('.dropdown').length && !jQuery(event.target).is('.dropdown__list')) {
            jQuery(".dropdown__list").hide();
        }     
    });

    jQuery("._dropdown-block__button").click(function () {

        if (jQuery("._dropdown-block__list").is(':visible') && jQuery(this).next("._dropdown-block__list").is(':hidden')) {
            jQuery("._dropdown-block__list").hide();
            jQuery(this).next("._dropdown-block__list").slideToggle();
        } else {
            jQuery(this).next("._dropdown-block__list").slideToggle();
        }
    });

    jQuery(document).click(function (event) {
        if(!jQuery(event.target).closest('.dropdown').length && !jQuery(event.target).is('.dropdown__list')) {
            jQuery(".dropdown__list").hide();
        } 
        if(!jQuery(event.target).closest('._dropdown-block').length && !jQuery(event.target).is('.dropdown-block__list')) {
            jQuery("._dropdown-block__list").hide();
        }   
    });

    jQuery('._open-menu').click(function() {
        jQuery(this).next('.top-menu__list').toggleClass('open');
        jQuery('body').toggleClass('_fixed-page');
    });

    jQuery('._close-menu').click(function() {
        jQuery(this).parent('.top-menu__list').toggleClass('open');
        jQuery('.top-menu__drop').hide();
        jQuery('body').toggleClass('_fixed-page');
    });

    jQuery(".top-menu__arrow").click(function(e) {
		if (jQuery(window).width() <= 767) {
            jQuery(this).parent(".top-menu__link").parent(".top-menu__item").children(".top-menu__drop").slideToggle();
            e.preventDefault();
		}
	});
});

jQuery('.slider__list').slick({
    slidesToShow: 1,
    arrows : false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

jQuery('.carousel__list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});


