$('.section-six__page').slick({
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: false,
                arrows: false,
                slidesToShow: 1,
                dots: false,
            }
        }
    ],
    prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./image/arrow-left.png"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="./image/arrow-left.png"/></button>`,
});