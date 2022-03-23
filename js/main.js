$(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next">NEXT</button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev">PREV</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });
})