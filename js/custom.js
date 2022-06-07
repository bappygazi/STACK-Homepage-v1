/* JS */
$(function () {
    //    sticky navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");
        if (scrolling >= 350) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });

    //    parallax logo

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");
        if (scrolling >= 100) {
            sticky.addClass("parallax__logo");
        } else {
            sticky.removeClass("parallax__logo");
        }
    });


    //  workplace owl-carouse
    $('#hero .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 5000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: [" ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                nav: false,
                items: 1

            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#portfolio .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 1250,
        navText: [" <i class='fal fa-long-arrow-left'> ", "<i class='fal fa-long-arrow-right'>"],
        responsive: {
            0: {
                nav: false,
                margin: 15,
                items: 1.1
            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            },
        }
    })
    //  services owl-carouse
    $('#services .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        navText: [" <i class='fal fa-long-arrow-left'></i> ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                nav: false,
                margin: 15,
                items: 1.1
            },
            750: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    //  services owl-carouse
    $('#testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 1200,
        navText: [" ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            750: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });
});