/* JS */
$(function () {
    //    sticky navbar
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".navbar");
        if (scrolling >= 20) {
            sticky.addClass("navbg");
        } else {
            sticky.removeClass("navbg");
        }
    });
    // // // toggle navbar button //
    // $(".navbar-toggler").on("click", function () {
    //     $(".navbar-brand").addClass("navbar__brand-none");
    // });
    // $(".btn-close").on("click", function () {
    //     $(".navbar-brand").removeClass("navbar__brand-none");
    // });

    //  workplace owl-carouse
    $('#hero .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        navText: [" ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
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
        navText: [" <i class='fal fa-long-arrow-left'> ", "<i class='fal fa-long-arrow-right'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
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
        navText: [" <i class='fal fa-long-arrow-left'></i> ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
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
        navText: [" ", "<i class='fal fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
});