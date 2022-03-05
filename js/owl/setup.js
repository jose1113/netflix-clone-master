var dots = $('.owl-dot')
var owl = $('.owl-carousel')
var owl2 = $("#first-carousel")

owl.owlCarousel({
    loop:false,
    margin:7,
    nav:false,
    dots: false,
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

owl2.owlCarousel({
    loop:false,
    margin:7,
    nav:false,
    dots: false,
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$("#botao_anterior").on('click', function(){
    owl2.trigger('prev.owl.carousel')
})

$("#botao_proximo").on('click', function(){
    owl2.trigger('next.owl.carousel')
})

window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true")
        window.location.href = "./logo/logo.html"
    }
}

function emcima1() {
    document.getElementById("img1").src = "./trailer/The-Umbrella-Academy-Trailer-oficial-[HD]-Netflix.gif"
}

function sair1() {
    document.getElementById("img1").src = "./img/mini1.jpg"
}
