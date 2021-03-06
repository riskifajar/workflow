// loader
$(window).on('load', function () { 
    $('.loader').delay(800).fadeOut('fast'); // will fade out the white DIV that covers the website. 
    $('.loader').delay(800).css({
        'overflow': 'visible'
    });
});
//scroll
$(window).on('load',function(){

$(function() {

    window.sr = ScrollReveal({reset: false});

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    } else {

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

    }

    sr.reveal('.vcard', {
        origin: 'right',
        duration: 2000,
    });

    sr.reveal('.about', {
        origin: 'right',
        duration: 2000,
    });

    sr.reveal('.title', {
        origin: 'right',
        duration: 2000,
    });

    sr.reveal('.skillbar', {
        origin: 'right',
        duration: 3000,
    });

    sr.reveal('.contact', {
        origin: 'right',
        duration: 3000,
    });
    sr.reveal('.peta', {
        origin: 'right',
        duration: 3000,
    });
})
});

// skill bar

$(document).ready(function () {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});

//SIDEBAR
$(document).ready(function(){
    $('#btn').click(function(){
        $('#btn, #box').toggleClass('active');
    });
});


