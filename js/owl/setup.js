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
            items:1,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
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
            items:1,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
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
            items:1,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
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
            items:1,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
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
$(document).ready(function() {$(".playIconCard13").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard14").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard15").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard16").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard17").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard18").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard19").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard20").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard21").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard22").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard23").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard24").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard25").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard26").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard27").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard28").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard29").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard30").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard31").css('display','none')})
$(document).ready(function() {$(".playIconCard32").css('display','none')})
$(document).ready(function() {$(".playIconCard33").css('display','none')})
$(document).ready(function() {$(".playIconCard34").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard35").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard36").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard37").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard38").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard39").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard40").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard41").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard42").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard43").css('display','none')})
$(document).ready(function() {$(".playIconCard44").css('display','none')})
$(document).ready(function() {$(".playIconCard45").css('display','none')})
$(document).ready(function() {$(".playIconCard46").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard47").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard48").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard49").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard50").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard51").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard52").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard53").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard54").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard55").css('display','none')})
$(document).ready(function() {$(".playIconCard56").css('display','none')})
$(document).ready(function() {$(".playIconCard57").css('display','none')})
$(document).ready(function() {$(".playIconCard58").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard59").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard60").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard61").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard62").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard63").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard64").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard65").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard66").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard67").css('display','none')})
$(document).ready(function() {$(".playIconCard68").css('display','none')})
$(document).ready(function() {$(".playIconCard69").css('display','none')})
$(document).ready(function() {$(".playIconCard70").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard71").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard72").css('visibility','hidden')})
$(document).ready(function() {$(".moreLike4").css('display','none')})
$(document).ready(function() {$(".dividerCard2").css('display','none')})
$(document).ready(function() {$(".divider2").css('display','none')})
$(document).ready(function() {$(".playIconTrailer1").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer2").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer3").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer4").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer5").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer6").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer7").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer8").css('visibility','hidden')})
$(document).ready(function() {$(".playIconTrailer9").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard19").css('display','none')})
$(document).ready(function() {$(".playIconCard20").css('display','none')})
$(document).ready(function() {$(".playIconCard21").css('display','none')})
$(document).ready(function() {$(".moreLike8").css('display','none')})
$(document).ready(function() {$(".moreLike12").css('display','none')})
$(document).ready(function() {$(".moreLike16").css('display','none')})
$(document).ready(function() {$(".moreLike20").css('display','none')})
$(document).ready(function() {$(".moreLike24").css('display','none')})
$(document).ready(function() {$(".dividerCard4").css('display','none')})
$(document).ready(function() {$(".dividerCard6").css('display','none')})
$(document).ready(function() {$(".dividerCard8").css('display','none')})
$(document).ready(function() {$(".dividerCard10").css('display','none')})
$(document).ready(function() {$(".dividerCard12").css('display','none')})



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

$(".card13").mouseover(function() { $(".circleCard13").css('visibility','visible'); })
$(".card13").mouseout(function() { $(".circleCard13").css('visibility','hidden'); })

$(".card14").mouseover(function() { $(".circleCard14").css('visibility','visible'); })
$(".card14").mouseout(function() { $(".circleCard14").css('visibility','hidden'); })

$(".card15").mouseover(function() { $(".circleCard15").css('visibility','visible'); })
$(".card15").mouseout(function() { $(".circleCard15").css('visibility','hidden'); })

$(".card16").mouseover(function() { $(".circleCard16").css('visibility','visible'); })
$(".card16").mouseout(function() { $(".circleCard16").css('visibility','hidden'); })

$(".card17").mouseover(function() { $(".circleCard17").css('visibility','visible'); })
$(".card17").mouseout(function() { $(".circleCard17").css('visibility','hidden'); })

$(".card18").mouseover(function() { $(".circleCard18").css('visibility','visible'); })
$(".card18").mouseout(function() { $(".circleCard18").css('visibility','hidden'); })

$(".card19").mouseover(function() { $(".circleCard19").css('visibility','visible'); })
$(".card19").mouseout(function() { $(".circleCard19").css('visibility','hidden'); })

$(".card20").mouseover(function() { $(".circleCard20").css('visibility','visible'); })
$(".card20").mouseout(function() { $(".circleCard20").css('visibility','hidden'); })

$(".card21").mouseover(function() { $(".circleCard21").css('visibility','visible'); })
$(".card21").mouseout(function() { $(".circleCard21").css('visibility','hidden'); })

$(".card22").mouseover(function() { $(".circleCard22").css('visibility','visible'); })
$(".card22").mouseout(function() { $(".circleCard22").css('visibility','hidden'); })

$(".card23").mouseover(function() { $(".circleCard23").css('visibility','visible'); })
$(".card23").mouseout(function() { $(".circleCard23").css('visibility','hidden'); })

$(".card24").mouseover(function() { $(".circleCard24").css('visibility','visible'); })
$(".card24").mouseout(function() { $(".circleCard24").css('visibility','hidden'); })

$(".card25").mouseover(function() { $(".circleCard25").css('visibility','visible'); })
$(".card25").mouseout(function() { $(".circleCard25").css('visibility','hidden'); })

$(".card26").mouseover(function() { $(".circleCard26").css('visibility','visible'); })
$(".card26").mouseout(function() { $(".circleCard26").css('visibility','hidden'); })

$(".card27").mouseover(function() { $(".circleCard27").css('visibility','visible'); })
$(".card27").mouseout(function() { $(".circleCard27").css('visibility','hidden'); })

$(".card28").mouseover(function() { $(".circleCard28").css('visibility','visible'); })
$(".card28").mouseout(function() { $(".circleCard28").css('visibility','hidden'); })

$(".card29").mouseover(function() { $(".circleCard29").css('visibility','visible'); })
$(".card29").mouseout(function() { $(".circleCard29").css('visibility','hidden'); })

$(".card30").mouseover(function() { $(".circleCard30").css('visibility','visible'); })
$(".card30").mouseout(function() { $(".circleCard30").css('visibility','hidden'); })

$(".card31").mouseover(function() { $(".circleCard31").css('visibility','visible'); })
$(".card31").mouseout(function() { $(".circleCard31").css('visibility','hidden'); })

$(".card32").mouseover(function() { $(".circleCard32").css('visibility','visible'); })
$(".card32").mouseout(function() { $(".circleCard32").css('visibility','hidden'); })

$(".card33").mouseover(function() { $(".circleCard33").css('visibility','visible'); })
$(".card33").mouseout(function() { $(".circleCard33").css('visibility','hidden'); })

$(".card34").mouseover(function() { $(".circleCard34").css('visibility','visible'); })
$(".card34").mouseout(function() { $(".circleCard34").css('visibility','hidden'); })

$(".card35").mouseover(function() { $(".circleCard35").css('visibility','visible'); })
$(".card35").mouseout(function() { $(".circleCard35").css('visibility','hidden'); })

$(".card36").mouseover(function() { $(".circleCard36").css('visibility','visible'); })
$(".card36").mouseout(function() { $(".circleCard36").css('visibility','hidden'); })

$(".card37").mouseover(function() { $(".circleCard37").css('visibility','visible'); })
$(".card37").mouseout(function() { $(".circleCard37").css('visibility','hidden'); })

$(".card38").mouseover(function() { $(".circleCard38").css('visibility','visible'); })
$(".card38").mouseout(function() { $(".circleCard38").css('visibility','hidden'); })

$(".card39").mouseover(function() { $(".circleCard39").css('visibility','visible'); })
$(".card39").mouseout(function() { $(".circleCard39").css('visibility','hidden'); })

$(".card40").mouseover(function() { $(".circleCard40").css('visibility','visible'); })
$(".card40").mouseout(function() { $(".circleCard40").css('visibility','hidden'); })

$(".card41").mouseover(function() { $(".circleCard41").css('visibility','visible'); })
$(".card41").mouseout(function() { $(".circleCard41").css('visibility','hidden'); })

$(".card42").mouseover(function() { $(".circleCard42").css('visibility','visible'); })
$(".card42").mouseout(function() { $(".circleCard42").css('visibility','hidden'); })

$(".card43").mouseover(function() { $(".circleCard43").css('visibility','visible'); })
$(".card43").mouseout(function() { $(".circleCard43").css('visibility','hidden'); })

$(".card44").mouseover(function() { $(".circleCard44").css('visibility','visible'); })
$(".card44").mouseout(function() { $(".circleCard44").css('visibility','hidden'); })

$(".card45").mouseover(function() { $(".circleCard45").css('visibility','visible'); })
$(".card45").mouseout(function() { $(".circleCard45").css('visibility','hidden'); })

$(".card46").mouseover(function() { $(".circleCard46").css('visibility','visible'); })
$(".card46").mouseout(function() { $(".circleCard46").css('visibility','hidden'); })

$(".card47").mouseover(function() { $(".circleCard47").css('visibility','visible'); })
$(".card47").mouseout(function() { $(".circleCard47").css('visibility','hidden'); })

$(".card48").mouseover(function() { $(".circleCard48").css('visibility','visible'); })
$(".card48").mouseout(function() { $(".circleCard48").css('visibility','hidden'); })

$(".card49").mouseover(function() { $(".circleCard49").css('visibility','visible'); })
$(".card49").mouseout(function() { $(".circleCard49").css('visibility','hidden'); })

$(".card50").mouseover(function() { $(".circleCard50").css('visibility','visible'); })
$(".card50").mouseout(function() { $(".circleCard50").css('visibility','hidden'); })

$(".card51").mouseover(function() { $(".circleCard51").css('visibility','visible'); })
$(".card51").mouseout(function() { $(".circleCard51").css('visibility','hidden'); })

$(".card52").mouseover(function() { $(".circleCard52").css('visibility','visible'); })
$(".card52").mouseout(function() { $(".circleCard52").css('visibility','hidden'); })

$(".card53").mouseover(function() { $(".circleCard53").css('visibility','visible'); })
$(".card53").mouseout(function() { $(".circleCard53").css('visibility','hidden'); })

$(".card54").mouseover(function() { $(".circleCard54").css('visibility','visible'); })
$(".card54").mouseout(function() { $(".circleCard54").css('visibility','hidden'); })

$(".card55").mouseover(function() { $(".circleCard55").css('visibility','visible'); })
$(".card55").mouseout(function() { $(".circleCard55").css('visibility','hidden'); })

$(".card56").mouseover(function() { $(".circleCard56").css('visibility','visible'); })
$(".card56").mouseout(function() { $(".circleCard56").css('visibility','hidden'); })

$(".card57").mouseover(function() { $(".circleCard57").css('visibility','visible'); })
$(".card57").mouseout(function() { $(".circleCard57").css('visibility','hidden'); })

$(".card58").mouseover(function() { $(".circleCard58").css('visibility','visible'); })
$(".card58").mouseout(function() { $(".circleCard58").css('visibility','hidden'); })

$(".card59").mouseover(function() { $(".circleCard59").css('visibility','visible'); })
$(".card59").mouseout(function() { $(".circleCard59").css('visibility','hidden'); })

$(".card60").mouseover(function() { $(".circleCard60").css('visibility','visible'); })
$(".card60").mouseout(function() { $(".circleCard60").css('visibility','hidden'); })

$(".card61").mouseover(function() { $(".circleCard61").css('visibility','visible'); })
$(".card61").mouseout(function() { $(".circleCard61").css('visibility','hidden'); })

$(".card62").mouseover(function() { $(".circleCard62").css('visibility','visible'); })
$(".card62").mouseout(function() { $(".circleCard62").css('visibility','hidden'); })

$(".card63").mouseover(function() { $(".circleCard63").css('visibility','visible'); })
$(".card63").mouseout(function() { $(".circleCard63").css('visibility','hidden'); })

$(".card64").mouseover(function() { $(".circleCard64").css('visibility','visible'); })
$(".card64").mouseout(function() { $(".circleCard64").css('visibility','hidden'); })

$(".card65").mouseover(function() { $(".circleCard65").css('visibility','visible'); })
$(".card65").mouseout(function() { $(".circleCard65").css('visibility','hidden'); })

$(".card66").mouseover(function() { $(".circleCard66").css('visibility','visible'); })
$(".card66").mouseout(function() { $(".circleCard66").css('visibility','hidden'); })

$(".card67").mouseover(function() { $(".circleCard67").css('visibility','visible'); })
$(".card67").mouseout(function() { $(".circleCard67").css('visibility','hidden'); })

$(".card68").mouseover(function() { $(".circleCard68").css('visibility','visible'); })
$(".card68").mouseout(function() { $(".circleCard68").css('visibility','hidden'); })

$(".card69").mouseover(function() { $(".circleCard69").css('visibility','visible'); })
$(".card69").mouseout(function() { $(".circleCard69").css('visibility','hidden'); })

$(".card70").mouseover(function() { $(".circleCard70").css('visibility','visible'); })
$(".card70").mouseout(function() { $(".circleCard70").css('visibility','hidden'); })

$(".card71").mouseover(function() { $(".circleCard71").css('visibility','visible'); })
$(".card71").mouseout(function() { $(".circleCard71").css('visibility','hidden'); })

$(".card72").mouseover(function() { $(".circleCard72").css('visibility','visible'); })
$(".card72").mouseout(function() { $(".circleCard72").css('visibility','hidden'); })

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

function change1() {
  let i = document.getElementById("volume1")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change2() {
  let i = document.getElementById("volume2")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change3() {
  let i = document.getElementById("volume3")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change4() {
  let i = document.getElementById("volume4")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change5() {
  let i = document.getElementById("volume5")

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
        $(".divider2").css('display','flex')
    })
})

$(".divider2").on('click', function(){
    $('.moreChapters').toggle(0, function () {
        $(".divider").css('display','flex')
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

$(".dividerCard3").on('click', function(){
    $('.moreLike8').toggle(0, function () {
        $(".moreLike8").css('display','flex')
        $(".dividerCard3").css('display','none')
        $(".dividerCard4").css('display','flex')
        $(".playIconCard19").css('display','flex')
        $(".playIconCard20").css('display','flex')
        $(".playIconCard21").css('display','flex')
    })
})

$(".dividerCard4").on('click', function(){
    $('.moreLike8').toggle(0, function () {
        $(".moreLike8").css('display','none')
        $(".dividerCard3").css('display','flex')
        $(".dividerCard4").css('display','none')
        $(".playIconCard19").css('display','none')
        $(".playIconCard20").css('display','none')
        $(".playIconCard21").css('display','none')
    })
})

$(".dividerCard5").on('click', function(){
    $('.moreLike12').toggle(0, function () {
        $(".moreLike12").css('display','flex')
        $(".dividerCard5").css('display','none')
        $(".dividerCard6").css('display','flex')
        $(".playIconCard31").css('display','flex')
        $(".playIconCard32").css('display','flex')
        $(".playIconCard33").css('display','flex')
    })
})

$(".dividerCard6").on('click', function(){
    $('.moreLike12').toggle(0, function () {
        $(".moreLike12").css('display','none')
        $(".dividerCard5").css('display','flex')
        $(".dividerCard6").css('display','none')
        $(".playIconCard31").css('display','none')
        $(".playIconCard32").css('display','none')
        $(".playIconCard33").css('display','none')
    })
})

$(".dividerCard7").on('click', function(){
    $('.moreLike16').toggle(0, function () {
        $(".moreLike16").css('display','flex')
        $(".dividerCard7").css('display','none')
        $(".dividerCard8").css('display','flex')
        $(".playIconCard43").css('display','flex')
        $(".playIconCard44").css('display','flex')
        $(".playIconCard45").css('display','flex')
    })
})

$(".dividerCard8").on('click', function(){
    $('.moreLike16').toggle(0, function () {
        $(".moreLike16").css('display','none')
        $(".dividerCard7").css('display','flex')
        $(".dividerCard8").css('display','none')
        $(".playIconCard43").css('display','none')
        $(".playIconCard44").css('display','none')
        $(".playIconCard45").css('display','none')
    })
})

$(".dividerCard9").on('click', function(){
    $('.moreLike20').toggle(0, function () {
        $(".moreLike20").css('display','flex')
        $(".dividerCard9").css('display','none')
        $(".dividerCard10").css('display','flex')
        $(".playIconCard55").css('display','flex')
        $(".playIconCard56").css('display','flex')
        $(".playIconCard57").css('display','flex')
    })
})

$(".dividerCard10").on('click', function(){
    $('.moreLike20').toggle(0, function () {
        $(".moreLike20").css('display','none')
        $(".dividerCard9").css('display','flex')
        $(".dividerCard10").css('display','none')
        $(".playIconCard55").css('display','none')
        $(".playIconCard56").css('display','none')
        $(".playIconCard57").css('display','none')
    })
})

$(".dividerCard11").on('click', function(){
    $('.moreLike24').toggle(0, function () {
        $(".moreLike24").css('display','flex')
        $(".dividerCard11").css('display','none')
        $(".dividerCard12").css('display','flex')
        $(".playIconCard67").css('display','flex')
        $(".playIconCard68").css('display','flex')
        $(".playIconCard69").css('display','flex')
    })
})

$(".dividerCard12").on('click', function(){
    $('.moreLike24').toggle(0, function () {
        $(".moreLike24").css('display','none')
        $(".dividerCard11").css('display','flex')
        $(".dividerCard12").css('display','none')
        $(".playIconCard67").css('display','none')
        $(".playIconCard68").css('display','none')
        $(".playIconCard69").css('display','none')
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