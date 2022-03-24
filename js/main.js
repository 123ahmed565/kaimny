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

// preloader
window.onload = function () {
    document.querySelector(".preloaders").style.display = "none";
};

// to top
const scrollBtn = document.querySelector(".scroll-to-top");
const upperbar = document.querySelector(".upperbar");

scrollBtn.style.display = "none";

scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop <= 100) {
    scrollBtn.style.display = "none";
    } else {
    scrollBtn.style.display = "block";
    }
});

// swiper categories
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
            spaceBetween: 5,
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

// swiper page product details
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    loop: false,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: "horizontal",
        freeMode: false,
        },
        600: {
        slidesPerView: 2,
        spaceBetween: 20,
        direction: "horizontal",
        },
        1000: {
        slidesPerView: 5,
        spaceBetween: 60,
        direction: "vertical",
        },
        1024: {
        slidesPerView: 4.5,
        spaceBetween: 20,
        direction: "vertical",
        },
    },
    });

// show small img to big image page product details
$(".vertical-swiper img").mouseover(function () {
    var imageSrc = $(this).attr("src");
    $(".block img").attr("src", imageSrc);
});