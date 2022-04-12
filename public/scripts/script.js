$('.image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '80px',
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});


$('.js-mobile-menu').on('click', function (e) {
    e.preventDefault();
    const $myLinks = $('#myLinks');
    $myLinks.toggle();
});


