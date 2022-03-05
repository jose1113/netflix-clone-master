var dots = $('.owl-dot')
var owl = $('.owl-carousel')
var owl1 = $("#first-carousel")
var owl2 = $("#second-carousel")
var owl3 = $("#third-carousel")

owl.owlCarousel({
    loop: false,
    margin: 7,
    nav: false,
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

owl1.owlCarousel({
    loop: false,
    margin: 7,
    nav: false,
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
    loop: false,
    margin: 7,
    nav: false,
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

owl3.owlCarousel({
    loop: false,
    margin: 7,
    nav: false,
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
    owl1.trigger('prev.owl.carousel')
})
$("#botao_proximo").on('click', function(){
    owl1.trigger('next.owl.carousel')
})

$("#botao_anterior1").on('click', function(){
    owl2.trigger('prev.owl.carousel')
})
$("#botao_proximo1").on('click', function(){
    owl2.trigger('next.owl.carousel')
})

$("#botao_anterior2").on('click', function(){
    owl3.trigger('prev.owl.carousel')
})
$("#botao_proximo2").on('click', function(){
    owl3.trigger('next.owl.carousel')
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

$(document).ready(function() {$(".btn").css('visibility','hidden')})
$(document).ready(function() {$(".btn1").css('visibility','hidden')})
$(document).ready(function() {$(".btn2").css('visibility','hidden')})

$(".carrosel-filmes1").mouseover(function() { $(".btn").css('visibility','visible'); })
$(".carrosel-filmes1").mouseout(function() { $(".btn").css('visibility','hidden'); })

$(".carrosel-filmes2").mouseover(function() { $(".btn1").css('visibility','visible'); })
$(".carrosel-filmes2").mouseout(function() { $(".btn1").css('visibility','hidden'); })

$(".carrosel-filmes3").mouseover(function() { $(".btn2").css('visibility','visible'); })
$(".carrosel-filmes3").mouseout(function() { $(".btn2").css('visibility','hidden'); })

document.getElementById("year").innerHTML = new Date().getFullYear();

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

document.getElementById("codigoFooter").innerHTML = "{" + getRandomString(33) + "}";