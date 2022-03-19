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
$(document).ready(function() {$(".circle").css('visibility','hidden')})
$(document).ready(function() {$(".circle2").css('visibility','hidden')})
$(document).ready(function() {$(".circle3").css('visibility','hidden')})
$(document).ready(function() {$(".circle4").css('visibility','hidden')})
$(document).ready(function() {$(".circle5").css('visibility','hidden')})
$(document).ready(function() {$(".circle6").css('visibility','hidden')})
$(document).ready(function() {$(".circle7").css('visibility','hidden')})
$(document).ready(function() {$(".circle8").css('visibility','hidden')})
$(document).ready(function() {$(".circle9").css('visibility','hidden')})
$(document).ready(function() {$(".circle10").css('visibility','hidden')})
$(document).ready(function() {$(".circle11").css('visibility','hidden')})
$(document).ready(function() {$(".circle12").css('visibility','hidden')})
$(document).ready(function() {$(".circle13").css('visibility','hidden')})
$(document).ready(function() {$(".moreChapters").css('display','none')})
$(document).ready(function() {$(".playIconCard1").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard2").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard3").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard4").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard5").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard6").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard7").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard8").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard9").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard10").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard11").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard12").css('visibility','hidden')})
$(document).ready(function() {$(".moreLike4").css('display','none')})
$(document).ready(function() {$(".dividerCard2").css('display','none')})
$(document).ready(function() {$(".playIconTrailer1").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer2").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer3").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer4").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer5").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer6").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer7").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer8").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer9").css('visibility','hidden')})



$(".carrosel-filmes1").mouseover(function() { $(".btn").css('visibility','visible'); })
$(".carrosel-filmes1").mouseout(function() { $(".btn").css('visibility','hidden'); })

$(".carrosel-filmes2").mouseover(function() { $(".btn1").css('visibility','visible'); })
$(".carrosel-filmes2").mouseout(function() { $(".btn1").css('visibility','hidden'); })

$(".carrosel-filmes3").mouseover(function() { $(".btn2").css('visibility','visible'); })
$(".carrosel-filmes3").mouseout(function() { $(".btn2").css('visibility','hidden'); })

$(".chapters").mouseover(function() { $(".circle").css('visibility','visible'); })
$(".chapters").mouseout(function() { $(".circle").css('visibility','hidden'); })

$(".chapters2").mouseover(function() { $(".circle2").css('visibility','visible'); })
$(".chapters2").mouseout(function() { $(".circle2").css('visibility','hidden'); })

$(".chapters3").mouseover(function() { $(".circle3").css('visibility','visible'); })
$(".chapters3").mouseout(function() { $(".circle3").css('visibility','hidden'); })

$(".chapters4").mouseover(function() { $(".circle4").css('visibility','visible'); })
$(".chapters4").mouseout(function() { $(".circle4").css('visibility','hidden'); })

$(".chapters5").mouseover(function() { $(".circle5").css('visibility','visible'); })
$(".chapters5").mouseout(function() { $(".circle5").css('visibility','hidden'); })

$(".chapters6").mouseover(function() { $(".circle6").css('visibility','visible'); })
$(".chapters6").mouseout(function() { $(".circle6").css('visibility','hidden'); })

$(".chapters7").mouseover(function() { $(".circle7").css('visibility','visible'); })
$(".chapters7").mouseout(function() { $(".circle7").css('visibility','hidden'); })

$(".chapters8").mouseover(function() { $(".circle8").css('visibility','visible'); })
$(".chapters8").mouseout(function() { $(".circle8").css('visibility','hidden'); })

$(".chapters9").mouseover(function() { $(".circle9").css('visibility','visible'); })
$(".chapters9").mouseout(function() { $(".circle9").css('visibility','hidden'); })

$(".chapters10").mouseover(function() { $(".circle10").css('visibility','visible'); })
$(".chapters10").mouseout(function() { $(".circle10").css('visibility','hidden'); })

$(".chapters11").mouseover(function() { $(".circle11").css('visibility','visible'); })
$(".chapters11").mouseout(function() { $(".circle11").css('visibility','hidden'); })

$(".chapters12").mouseover(function() { $(".circle12").css('visibility','visible'); })
$(".chapters12").mouseout(function() { $(".circle12").css('visibility','hidden'); })

$(".chapters13").mouseover(function() { $(".circle13").css('visibility','visible'); })
$(".chapters13").mouseout(function() { $(".circle13").css('visibility','hidden'); })

$(".card1").mouseover(function() { $(".circleCard1").css('visibility','visible'); })
$(".card1").mouseout(function() { $(".circleCard1").css('visibility','hidden'); })

$(".card2").mouseover(function() { $(".circleCard2").css('visibility','visible'); })
$(".card2").mouseout(function() { $(".circleCard2").css('visibility','hidden'); })

$(".card3").mouseover(function() { $(".circleCard3").css('visibility','visible'); })
$(".card3").mouseout(function() { $(".circleCard3").css('visibility','hidden'); })

$(".card4").mouseover(function() { $(".circleCard4").css('visibility','visible'); })
$(".card4").mouseout(function() { $(".circleCard4").css('visibility','hidden'); })

$(".card5").mouseover(function() { $(".circleCard5").css('visibility','visible'); })
$(".card5").mouseout(function() { $(".circleCard5").css('visibility','hidden'); })

$(".card6").mouseover(function() { $(".circleCard6").css('visibility','visible'); })
$(".card6").mouseout(function() { $(".circleCard6").css('visibility','hidden'); })

$(".card7").mouseover(function() { $(".circleCard7").css('visibility','visible'); })
$(".card7").mouseout(function() { $(".circleCard7").css('visibility','hidden'); })

$(".card8").mouseover(function() { $(".circleCard8").css('visibility','visible'); })
$(".card8").mouseout(function() { $(".circleCard8").css('visibility','hidden'); })

$(".card9").mouseover(function() { $(".circleCard9").css('visibility','visible'); })
$(".card9").mouseout(function() { $(".circleCard9").css('visibility','hidden'); })

$(".card10").mouseover(function() { $(".circleCard10").css('visibility','visible'); })
$(".card10").mouseout(function() { $(".circleCard10").css('visibility','hidden'); })

$(".card11").mouseover(function() { $(".circleCard11").css('visibility','visible'); })
$(".card11").mouseout(function() { $(".circleCard11").css('visibility','hidden'); })

$(".card12").mouseover(function() { $(".circleCard12").css('visibility','visible'); })
$(".card12").mouseout(function() { $(".circleCard12").css('visibility','hidden'); })

$(".contentTrailers1").mouseover(function() { $(".circleTrailer1").css('visibility','visible'); })
$(".contentTrailers1").mouseout(function() { $(".circleTrailer1").css('visibility','hidden'); })

$(".contentTrailers2").mouseover(function() { $(".circleTrailer2").css('visibility','visible'); })
$(".contentTrailers2").mouseout(function() { $(".circleTrailer2").css('visibility','hidden'); })

$(".contentTrailers3").mouseover(function() { $(".circleTrailer3").css('visibility','visible'); })
$(".contentTrailers3").mouseout(function() { $(".circleTrailer3").css('visibility','hidden'); })

$(".contentTrailers4").mouseover(function() { $(".circleTrailer4").css('visibility','visible'); })
$(".contentTrailers4").mouseout(function() { $(".circleTrailer4").css('visibility','hidden'); })

$(".contentTrailers5").mouseover(function() { $(".circleTrailer5").css('visibility','visible'); })
$(".contentTrailers5").mouseout(function() { $(".circleTrailer5").css('visibility','hidden'); })

$(".contentTrailers6").mouseover(function() { $(".circleTrailer6").css('visibility','visible'); })
$(".contentTrailers6").mouseout(function() { $(".circleTrailer6").css('visibility','hidden'); })


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

function change() {
  let i = document.getElementById("volume")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

$(".divider").on('click', function(){
    $('.moreChapters').toggle(0, function () {
        $(".divider").css('display','none')
        $(".divider2").css('display','block')
    })
})

$(".divider2").on('click', function(){
    $('.moreChapters').toggle(0, function () {
        $(".divider").css('display','block')
        $(".divider2").css('display','none')
    })
})


$("select").change( function() {
    if ($(this).val() === 'temp1') {
        $(".containerTemp1").css('display','block')
        $(".containerTemp2").css('display','none')
        $(".containerTemp3").css('display','none')
        $(".containerTemp4").css('display','none')
        $(".containerTemp5").css('display','none')
        $(".containerTemp6").css('display','none')
        $(".moreChapters").css('display','none')
    } else if ($(this).val() === 'temp2'){
        $(".containerTemp1").css('display','none')
        $(".containerTemp2").css('display','block')
        $(".containerTemp3").css('display','none')
        $(".containerTemp4").css('display','none')
        $(".containerTemp5").css('display','none')
        $(".containerTemp6").css('display','none')
        $(".moreChapters").css('display','none')
    } else if ($(this).val() === 'temp3'){
        $(".containerTemp1").css('display','none')
        $(".containerTemp2").css('display','none')
        $(".containerTemp3").css('display','block')
        $(".containerTemp4").css('display','none')
        $(".containerTemp5").css('display','none')
        $(".containerTemp6").css('display','none')
        $(".moreChapters").css('display','none')
    } else if ($(this).val() === 'temp4'){
        $(".containerTemp1").css('display','none')
        $(".containerTemp2").css('display','none')
        $(".containerTemp3").css('display','none')
        $(".containerTemp4").css('display','block')
        $(".containerTemp5").css('display','none')
        $(".containerTemp6").css('display','none')
        $(".moreChapters").css('display','none')
    } else if ($(this).val() === 'temp5'){
        $(".containerTemp1").css('display','none')
        $(".containerTemp2").css('display','none')
        $(".containerTemp3").css('display','none')
        $(".containerTemp4").css('display','none')
        $(".containerTemp5").css('display','block')
        $(".containerTemp6").css('display','none')
        $(".moreChapters").css('display','none')
    } else if ($(this).val() === 'temp6'){
        $(".containerTemp1").css('display','none')
        $(".containerTemp2").css('display','none')
        $(".containerTemp3").css('display','none')
        $(".containerTemp4").css('display','none')
        $(".containerTemp5").css('display','none')
        $(".containerTemp6").css('display','block')
        $(".divider").css('display','none')
        $(".divider2").css('display','none')
        $(".allEpisode1").css('display','block')
        $(".allEpisode2").css('display','none')
    }
})


$("select").change( function(){
    if ($(this).val() === 'allEpisode'){
        $(".blockTemp1").css('display','block')
        $(".blockTemp2").css('display','block')
        $(".blockTemp3").css('display','block')
        $(".blockTemp4").css('display','block')
        $(".blockTemp5").css('display','block')
        $(".blockTemp6").css('display','block')
        $(".allEpisode1").css('display','none')
        $(".allEpisode2").css('display','block')
        $(".divider").css('display','none')
        $(".divider2").css('display','none')
        $(".moreChapters").css('display','block')
    }
})

$(".dividerCard1").on('click', function(){
    $('.moreChapters').toggle(0, function () {
        $(".moreLike4").css('display','flex')
        $(".dividerCard1").css('display','none')
        $(".dividerCard2").css('display','flex')
        $(".playIconCard1").css('top','3030px')
        $(".playIconCard2").css('top','3030px')
        $(".playIconCard3").css('top','3030px')
        $(".playIconCard4").css('top','3410px')
        $(".playIconCard5").css('top','3410px')
        $(".playIconCard6").css('top','3410px')
        $(".playIconCard7").css('top','3750px')
        $(".playIconCard8").css('top','3750px')
        $(".playIconCard9").css('top','3750px')
    })
})

$(".dividerCard2").on('click', function(){
    $('.moreChapters').toggle(0, function () {
        $(".moreLike4").css('display','none')
        $(".dividerCard1").css('display','flex')
        $(".dividerCard2").css('display','none')
        $(".playIconCard1").css('top','2550px')
        $(".playIconCard2").css('top','2550px')
        $(".playIconCard3").css('top','2550px')
        $(".playIconCard4").css('top','2930px')
        $(".playIconCard5").css('top','2930px')
        $(".playIconCard6").css('top','2930px')
        $(".playIconCard7").css('top','3270px')
        $(".playIconCard8").css('top','3270px')
        $(".playIconCard9").css('top','3270px')
    })
})

$(".containerDividerFull1").on('click', function(){
    $('.circleDividerTrailers1').toggle(0, function () {
        $(".containerDividerFull1").css('display','none')
        $(".containerDividerFull2").css('display','block')
        $(".circleDividerTrailers1").css('display','none')
        $(".circleDividerTrailers2").css('display','flex')

        $(".contentTrailers7").mouseover(function() { $(".circleTrailer7").css('visibility','visible'); })
        $(".contentTrailers7").mouseout(function() { $(".circleTrailer7").css('visibility','hidden'); })

        $(".contentTrailers8").mouseover(function() { $(".circleTrailer8").css('visibility','visible'); })
        $(".contentTrailers8").mouseout(function() { $(".circleTrailer8").css('visibility','hidden'); })

        $(".contentTrailers9").mouseover(function() { $(".circleTrailer9").css('visibility','visible'); })
        $(".contentTrailers9").mouseout(function() { $(".circleTrailer9").css('visibility','hidden'); })
    })
})

$(".containerDividerFull2").on('click', function(){
    $('.circleDividerTrailers2').toggle(0, function () {
        $(".containerDividerFull1").css('display','block')
        $(".containerDividerFull2").css('display','none')
        $(".circleDividerTrailers1").css('display','flex')
        $(".circleDividerTrailers2").css('display','none')

        $(".contentTrailers7").mouseover(function() { $(".circleTrailer7").css('visibility','hidden'); })
        $(".contentTrailers7").mouseout(function() { $(".circleTrailer7").css('visibility','hidden'); })

        $(".contentTrailers8").mouseover(function() { $(".circleTrailer8").css('visibility','hidden'); })
        $(".contentTrailers8").mouseout(function() { $(".circleTrailer8").css('visibility','hidden'); })

        $(".contentTrailers9").mouseover(function() { $(".circleTrailer9").css('visibility','hidden'); })
        $(".contentTrailers9").mouseout(function() { $(".circleTrailer9").css('visibility','hidden'); })
    })
})
