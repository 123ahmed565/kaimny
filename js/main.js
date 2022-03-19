// modal search popup for mobile
$('a[href="#search"]').click(function () {
    event.preventDefault();
    $("#search-box").addClass("-open");
    setTimeout(function () {
      inputSearch.focus();
    }, 800);
});

$('a[href="#close"]').click(function () {
    event.preventDefault();
    $("#search-box").removeClass("-open");
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
      // escape key maps to keycode `27`
      $("#search-box").removeClass("-open");
    }
});

// swiper mini slider
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6.5,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 6.5,
            spaceBetween: 10,
        },
    }
});

// swiper testimonials
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 5,
    freeMode: true,
    autoplay:true,
    loop:true,
    navigation: {
        nextEl: '.fa-chevron-right',
        prevEl: '.fa-chevron-left',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        600: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    }
});