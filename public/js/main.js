$(window).on('load', function () {

    /* -----------------------------------
                1. Preloader
    ----------------------------------- */
    $("#preloader").delay(1000).addClass('loaded');

    /* -----------------------------------
            3. Isotope Portfolio Setup
    ----------------------------------- */
    if ($('.portfolio-items').length) {
        var $elements = $(".portfolio-items"),
            $filters = $('.portfolio-filter ul li');
        $elements.isotope();

        $filters.on('click', function () {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }

});

$(document).ready(function () {
    "use strict";

    /* -----------------------------------
            5. Active Current Link
    ----------------------------------- */
    $('.header-main ul li a').on('click', function () {
        if ($('.header-main.on').length) {
            $('.header-main').removeClass('on');
        }
    });

    /* -----------------------------------
        6. Mobile Toggle Click Setup
    ----------------------------------- */
    $('.header-toggle').on('click', function () {
        $('.header-main').toggleClass('on');
    });

    /* -----------------------------------
                9. Portfolio Tilt Setup
    ----------------------------------- */
    $('.pt-portfolio .portfolio-items .item figure').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });

    /* -----------------------------------
          10. Portfolio Image Link
    ----------------------------------- */
    $(".portfolio-items .image-link").magnificPopup({
        type: "image"
    });

});
