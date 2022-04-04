const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

//menu start
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}
//menu end

//slick slider
$(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./img/next-arrow.svg" alt="next-arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./img/prev-arrow.svg" alt="prev-arrow"></button>',
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