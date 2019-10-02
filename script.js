$(document).ready(function () {


    /* Sticky Nav */
    $('.js--section-projects').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '10px'
    });

    /* Scroll on Button */
    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-projects').offset().top }, 1000);
    });

    $('.js--scroll-to-skills').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-skills').offset().top }, 1000);
    });

    /* Navigation Scroll*/


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    /* Mobile Nav */
    $('.js--nav--icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav--icon ion-icon');

        nav.slideToggle(200);


    })





});


