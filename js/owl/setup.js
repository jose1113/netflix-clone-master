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
$(document).ready(function() {$(".playIconCard73").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard74").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard75").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard76").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard77").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard78").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard79").css('display','none')})
$(document).ready(function() {$(".playIconCard80").css('display','none')})
$(document).ready(function() {$(".playIconCard81").css('display','none')})
$(document).ready(function() {$(".playIconCard82").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard83").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard84").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard85").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard86").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard87").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard88").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard89").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard90").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard91").css('display','none')})
$(document).ready(function() {$(".playIconCard92").css('display','none')})
$(document).ready(function() {$(".playIconCard93").css('display','none')})
$(document).ready(function() {$(".playIconCard94").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard95").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard96").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard97").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard98").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard99").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard100").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard101").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard102").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard103").css('display','none')})
$(document).ready(function() {$(".playIconCard104").css('display','none')})
$(document).ready(function() {$(".playIconCard105").css('display','none')})
$(document).ready(function() {$(".playIconCard106").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard107").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard108").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard109").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard110").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard111").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard112").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard113").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard114").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard115").css('display','none')})
$(document).ready(function() {$(".playIconCard116").css('display','none')})
$(document).ready(function() {$(".playIconCard117").css('display','none')})
$(document).ready(function() {$(".playIconCard118").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard119").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard120").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard121").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard122").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard123").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard124").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard125").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard126").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard127").css('display','none')})
$(document).ready(function() {$(".playIconCard128").css('display','none')})
$(document).ready(function() {$(".playIconCard129").css('display','none')})
$(document).ready(function() {$(".playIconCard130").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard131").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard132").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard133").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard134").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard135").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard136").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard137").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard138").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard139").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard140").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard141").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard142").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard143").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard144").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard145").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard146").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard147").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard148").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard149").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard150").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard151").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard152").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard153").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard154").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard155").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard156").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard157").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard158").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard159").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard160").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard161").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard162").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard163").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard164").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard165").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard166").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard167").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard168").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard169").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard170").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard171").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard172").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard173").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard174").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard175").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard176").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard177").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard178").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard179").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard180").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard181").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard182").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard183").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard184").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard185").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard186").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard187").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard188").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard189").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard190").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard191").css('visibility','hidden')})
$(document).ready(function() {$(".playIconCard192").css('visibility','hidden')})
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
$(document).ready(function() {$(".moreLike4").css('display','none')})
$(document).ready(function() {$(".moreLike8").css('display','none')})
$(document).ready(function() {$(".moreLike12").css('display','none')})
$(document).ready(function() {$(".moreLike16").css('display','none')})
$(document).ready(function() {$(".moreLike20").css('display','none')})
$(document).ready(function() {$(".moreLike24").css('display','none')})
$(document).ready(function() {$(".moreLike28").css('display','none')})
$(document).ready(function() {$(".moreLike32").css('display','none')})
$(document).ready(function() {$(".moreLike36").css('display','none')})
$(document).ready(function() {$(".moreLike40").css('display','none')})
$(document).ready(function() {$(".moreLike44").css('display','none')})
$(document).ready(function() {$(".divider2").css('display','none')})
$(document).ready(function() {$(".dividerCard2").css('display','none')})
$(document).ready(function() {$(".dividerCard4").css('display','none')})
$(document).ready(function() {$(".dividerCard6").css('display','none')})
$(document).ready(function() {$(".dividerCard8").css('display','none')})
$(document).ready(function() {$(".dividerCard10").css('display','none')})
$(document).ready(function() {$(".dividerCard12").css('display','none')})
$(document).ready(function() {$(".dividerCard14").css('display','none')})
$(document).ready(function() {$(".dividerCard16").css('display','none')})
$(document).ready(function() {$(".dividerCard18").css('display','none')})
$(document).ready(function() {$(".dividerCard20").css('display','none')})
$(document).ready(function() {$(".dividerCard22").css('display','none')})



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

$(".card73").mouseover(function() { $(".circleCard73").css('visibility','visible'); })
$(".card73").mouseout(function() { $(".circleCard73").css('visibility','hidden'); })

$(".card74").mouseover(function() { $(".circleCard74").css('visibility','visible'); })
$(".card74").mouseout(function() { $(".circleCard74").css('visibility','hidden'); })

$(".card75").mouseover(function() { $(".circleCard75").css('visibility','visible'); })
$(".card75").mouseout(function() { $(".circleCard75").css('visibility','hidden'); })

$(".card76").mouseover(function() { $(".circleCard76").css('visibility','visible'); })
$(".card76").mouseout(function() { $(".circleCard76").css('visibility','hidden'); })

$(".card77").mouseover(function() { $(".circleCard77").css('visibility','visible'); })
$(".card77").mouseout(function() { $(".circleCard77").css('visibility','hidden'); })

$(".card78").mouseover(function() { $(".circleCard78").css('visibility','visible'); })
$(".card78").mouseout(function() { $(".circleCard78").css('visibility','hidden'); })

$(".card79").mouseover(function() { $(".circleCard79").css('visibility','visible'); })
$(".card79").mouseout(function() { $(".circleCard79").css('visibility','hidden'); })

$(".card80").mouseover(function() { $(".circleCard80").css('visibility','visible'); })
$(".card80").mouseout(function() { $(".circleCard80").css('visibility','hidden'); })

$(".card81").mouseover(function() { $(".circleCard81").css('visibility','visible'); })
$(".card81").mouseout(function() { $(".circleCard81").css('visibility','hidden'); })

$(".card82").mouseover(function() { $(".circleCard82").css('visibility','visible'); })
$(".card82").mouseout(function() { $(".circleCard82").css('visibility','hidden'); })

$(".card83").mouseover(function() { $(".circleCard83").css('visibility','visible'); })
$(".card83").mouseout(function() { $(".circleCard83").css('visibility','hidden'); })

$(".card84").mouseover(function() { $(".circleCard84").css('visibility','visible'); })
$(".card84").mouseout(function() { $(".circleCard84").css('visibility','hidden'); })

$(".card85").mouseover(function() { $(".circleCard85").css('visibility','visible'); })
$(".card85").mouseout(function() { $(".circleCard85").css('visibility','hidden'); })

$(".card86").mouseover(function() { $(".circleCard86").css('visibility','visible'); })
$(".card86").mouseout(function() { $(".circleCard86").css('visibility','hidden'); })

$(".card87").mouseover(function() { $(".circleCard87").css('visibility','visible'); })
$(".card87").mouseout(function() { $(".circleCard87").css('visibility','hidden'); })

$(".card88").mouseover(function() { $(".circleCard88").css('visibility','visible'); })
$(".card88").mouseout(function() { $(".circleCard88").css('visibility','hidden'); })

$(".card89").mouseover(function() { $(".circleCard89").css('visibility','visible'); })
$(".card89").mouseout(function() { $(".circleCard89").css('visibility','hidden'); })

$(".card90").mouseover(function() { $(".circleCard90").css('visibility','visible'); })
$(".card90").mouseout(function() { $(".circleCard90").css('visibility','hidden'); })

$(".card91").mouseover(function() { $(".circleCard91").css('visibility','visible'); })
$(".card91").mouseout(function() { $(".circleCard91").css('visibility','hidden'); })

$(".card92").mouseover(function() { $(".circleCard92").css('visibility','visible'); })
$(".card92").mouseout(function() { $(".circleCard92").css('visibility','hidden'); })

$(".card93").mouseover(function() { $(".circleCard93").css('visibility','visible'); })
$(".card93").mouseout(function() { $(".circleCard93").css('visibility','hidden'); })

$(".card94").mouseover(function() { $(".circleCard94").css('visibility','visible'); })
$(".card94").mouseout(function() { $(".circleCard94").css('visibility','hidden'); })

$(".card95").mouseover(function() { $(".circleCard95").css('visibility','visible'); })
$(".card95").mouseout(function() { $(".circleCard95").css('visibility','hidden'); })

$(".card96").mouseover(function() { $(".circleCard96").css('visibility','visible'); })
$(".card96").mouseout(function() { $(".circleCard96").css('visibility','hidden'); })

$(".card97").mouseover(function() { $(".circleCard97").css('visibility','visible'); })
$(".card97").mouseout(function() { $(".circleCard97").css('visibility','hidden'); })

$(".card98").mouseover(function() { $(".circleCard98").css('visibility','visible'); })
$(".card98").mouseout(function() { $(".circleCard98").css('visibility','hidden'); })

$(".card99").mouseover(function() { $(".circleCard99").css('visibility','visible'); })
$(".card99").mouseout(function() { $(".circleCard99").css('visibility','hidden'); })

$(".card100").mouseover(function() { $(".circleCard100").css('visibility','visible'); })
$(".card100").mouseout(function() { $(".circleCard100").css('visibility','hidden'); })

$(".card101").mouseover(function() { $(".circleCard101").css('visibility','visible'); })
$(".card101").mouseout(function() { $(".circleCard101").css('visibility','hidden'); })

$(".card102").mouseover(function() { $(".circleCard102").css('visibility','visible'); })
$(".card102").mouseout(function() { $(".circleCard102").css('visibility','hidden'); })

$(".card103").mouseover(function() { $(".circleCard103").css('visibility','visible'); })
$(".card103").mouseout(function() { $(".circleCard103").css('visibility','hidden'); })

$(".card104").mouseover(function() { $(".circleCard104").css('visibility','visible'); })
$(".card104").mouseout(function() { $(".circleCard104").css('visibility','hidden'); })

$(".card105").mouseover(function() { $(".circleCard105").css('visibility','visible'); })
$(".card105").mouseout(function() { $(".circleCard105").css('visibility','hidden'); })

$(".card106").mouseover(function() { $(".circleCard106").css('visibility','visible'); })
$(".card106").mouseout(function() { $(".circleCard106").css('visibility','hidden'); })

$(".card107").mouseover(function() { $(".circleCard107").css('visibility','visible'); })
$(".card107").mouseout(function() { $(".circleCard107").css('visibility','hidden'); })

$(".card108").mouseover(function() { $(".circleCard108").css('visibility','visible'); })
$(".card108").mouseout(function() { $(".circleCard108").css('visibility','hidden'); })

$(".card109").mouseover(function() { $(".circleCard109").css('visibility','visible'); })
$(".card109").mouseout(function() { $(".circleCard109").css('visibility','hidden'); })

$(".card110").mouseover(function() { $(".circleCard110").css('visibility','visible'); })
$(".card110").mouseout(function() { $(".circleCard110").css('visibility','hidden'); })

$(".card111").mouseover(function() { $(".circleCard111").css('visibility','visible'); })
$(".card111").mouseout(function() { $(".circleCard111").css('visibility','hidden'); })

$(".card112").mouseover(function() { $(".circleCard112").css('visibility','visible'); })
$(".card112").mouseout(function() { $(".circleCard112").css('visibility','hidden'); })

$(".card113").mouseover(function() { $(".circleCard113").css('visibility','visible'); })
$(".card113").mouseout(function() { $(".circleCard113").css('visibility','hidden'); })

$(".card114").mouseover(function() { $(".circleCard114").css('visibility','visible'); })
$(".card114").mouseout(function() { $(".circleCard114").css('visibility','hidden'); })

$(".card115").mouseover(function() { $(".circleCard115").css('visibility','visible'); })
$(".card115").mouseout(function() { $(".circleCard115").css('visibility','hidden'); })

$(".card116").mouseover(function() { $(".circleCard116").css('visibility','visible'); })
$(".card116").mouseout(function() { $(".circleCard116").css('visibility','hidden'); })

$(".card117").mouseover(function() { $(".circleCard117").css('visibility','visible'); })
$(".card117").mouseout(function() { $(".circleCard117").css('visibility','hidden'); })

$(".card118").mouseover(function() { $(".circleCard118").css('visibility','visible'); })
$(".card118").mouseout(function() { $(".circleCard118").css('visibility','hidden'); })

$(".card119").mouseover(function() { $(".circleCard119").css('visibility','visible'); })
$(".card119").mouseout(function() { $(".circleCard119").css('visibility','hidden'); })

$(".card120").mouseover(function() { $(".circleCard120").css('visibility','visible'); })
$(".card120").mouseout(function() { $(".circleCard120").css('visibility','hidden'); })

$(".card121").mouseover(function() { $(".circleCard121").css('visibility','visible'); })
$(".card121").mouseout(function() { $(".circleCard121").css('visibility','hidden'); })

$(".card122").mouseover(function() { $(".circleCard122").css('visibility','visible'); })
$(".card122").mouseout(function() { $(".circleCard122").css('visibility','hidden'); })

$(".card123").mouseover(function() { $(".circleCard123").css('visibility','visible'); })
$(".card123").mouseout(function() { $(".circleCard123").css('visibility','hidden'); })

$(".card124").mouseover(function() { $(".circleCard124").css('visibility','visible'); })
$(".card124").mouseout(function() { $(".circleCard124").css('visibility','hidden'); })

$(".card125").mouseover(function() { $(".circleCard125").css('visibility','visible'); })
$(".card125").mouseout(function() { $(".circleCard125").css('visibility','hidden'); })

$(".card126").mouseover(function() { $(".circleCard126").css('visibility','visible'); })
$(".card126").mouseout(function() { $(".circleCard126").css('visibility','hidden'); })

$(".card127").mouseover(function() { $(".circleCard127").css('visibility','visible'); })
$(".card127").mouseout(function() { $(".circleCard127").css('visibility','hidden'); })

$(".card128").mouseover(function() { $(".circleCard128").css('visibility','visible'); })
$(".card128").mouseout(function() { $(".circleCard128").css('visibility','hidden'); })

$(".card129").mouseover(function() { $(".circleCard129").css('visibility','visible'); })
$(".card129").mouseout(function() { $(".circleCard129").css('visibility','hidden'); })

$(".card130").mouseover(function() { $(".circleCard130").css('visibility','visible'); })
$(".card130").mouseout(function() { $(".circleCard130").css('visibility','hidden'); })

$(".card131").mouseover(function() { $(".circleCard131").css('visibility','visible'); })
$(".card131").mouseout(function() { $(".circleCard131").css('visibility','hidden'); })

$(".card132").mouseover(function() { $(".circleCard132").css('visibility','visible'); })
$(".card132").mouseout(function() { $(".circleCard132").css('visibility','hidden'); })

$(".card133").mouseover(function() { $(".circleCard133").css('visibility','visible'); })
$(".card133").mouseout(function() { $(".circleCard133").css('visibility','hidden'); })

$(".card134").mouseover(function() { $(".circleCard134").css('visibility','visible'); })
$(".card134").mouseout(function() { $(".circleCard134").css('visibility','hidden'); })

$(".card135").mouseover(function() { $(".circleCard135").css('visibility','visible'); })
$(".card135").mouseout(function() { $(".circleCard135").css('visibility','hidden'); })

$(".card136").mouseover(function() { $(".circleCard136").css('visibility','visible'); })
$(".card136").mouseout(function() { $(".circleCard136").css('visibility','hidden'); })

$(".card137").mouseover(function() { $(".circleCard137").css('visibility','visible'); })
$(".card137").mouseout(function() { $(".circleCard137").css('visibility','hidden'); })

$(".card138").mouseover(function() { $(".circleCard138").css('visibility','visible'); })
$(".card138").mouseout(function() { $(".circleCard138").css('visibility','hidden'); })

$(".card139").mouseover(function() { $(".circleCard139").css('visibility','visible'); })
$(".card139").mouseout(function() { $(".circleCard139").css('visibility','hidden'); })

$(".card140").mouseover(function() { $(".circleCard140").css('visibility','visible'); })
$(".card140").mouseout(function() { $(".circleCard140").css('visibility','hidden'); })

$(".card141").mouseover(function() { $(".circleCard141").css('visibility','visible'); })
$(".card141").mouseout(function() { $(".circleCard141").css('visibility','hidden'); })

$(".card142").mouseover(function() { $(".circleCard142").css('visibility','visible'); })
$(".card142").mouseout(function() { $(".circleCard142").css('visibility','hidden'); })

$(".card143").mouseover(function() { $(".circleCard143").css('visibility','visible'); })
$(".card143").mouseout(function() { $(".circleCard143").css('visibility','hidden'); })

$(".card144").mouseover(function() { $(".circleCard144").css('visibility','visible'); })
$(".card144").mouseout(function() { $(".circleCard144").css('visibility','hidden'); })

$(".card145").mouseover(function() { $(".circleCard145").css('visibility','visible'); })
$(".card145").mouseout(function() { $(".circleCard145").css('visibility','hidden'); })

$(".card146").mouseover(function() { $(".circleCard146").css('visibility','visible'); })
$(".card146").mouseout(function() { $(".circleCard146").css('visibility','hidden'); })

$(".card147").mouseover(function() { $(".circleCard147").css('visibility','visible'); })
$(".card147").mouseout(function() { $(".circleCard147").css('visibility','hidden'); })

$(".card148").mouseover(function() { $(".circleCard148").css('visibility','visible'); })
$(".card148").mouseout(function() { $(".circleCard148").css('visibility','hidden'); })

$(".card149").mouseover(function() { $(".circleCard149").css('visibility','visible'); })
$(".card149").mouseout(function() { $(".circleCard149").css('visibility','hidden'); })

$(".card150").mouseover(function() { $(".circleCard150").css('visibility','visible'); })
$(".card150").mouseout(function() { $(".circleCard150").css('visibility','hidden'); })

$(".card151").mouseover(function() { $(".circleCard151").css('visibility','visible'); })
$(".card151").mouseout(function() { $(".circleCard151").css('visibility','hidden'); })

$(".card152").mouseover(function() { $(".circleCard152").css('visibility','visible'); })
$(".card152").mouseout(function() { $(".circleCard152").css('visibility','hidden'); })

$(".card153").mouseover(function() { $(".circleCard153").css('visibility','visible'); })
$(".card153").mouseout(function() { $(".circleCard153").css('visibility','hidden'); })

$(".card154").mouseover(function() { $(".circleCard154").css('visibility','visible'); })
$(".card154").mouseout(function() { $(".circleCard154").css('visibility','hidden'); })

$(".card155").mouseover(function() { $(".circleCard155").css('visibility','visible'); })
$(".card155").mouseout(function() { $(".circleCard155").css('visibility','hidden'); })

$(".card156").mouseover(function() { $(".circleCard156").css('visibility','visible'); })
$(".card156").mouseout(function() { $(".circleCard156").css('visibility','hidden'); })

$(".card157").mouseover(function() { $(".circleCard157").css('visibility','visible'); })
$(".card157").mouseout(function() { $(".circleCard157").css('visibility','hidden'); })

$(".card158").mouseover(function() { $(".circleCard158").css('visibility','visible'); })
$(".card158").mouseout(function() { $(".circleCard158").css('visibility','hidden'); })

$(".card159").mouseover(function() { $(".circleCard159").css('visibility','visible'); })
$(".card159").mouseout(function() { $(".circleCard159").css('visibility','hidden'); })

$(".card160").mouseover(function() { $(".circleCard160").css('visibility','visible'); })
$(".card160").mouseout(function() { $(".circleCard160").css('visibility','hidden'); })

$(".card161").mouseover(function() { $(".circleCard161").css('visibility','visible'); })
$(".card161").mouseout(function() { $(".circleCard161").css('visibility','hidden'); })

$(".card162").mouseover(function() { $(".circleCard162").css('visibility','visible'); })
$(".card162").mouseout(function() { $(".circleCard162").css('visibility','hidden'); })

$(".card163").mouseover(function() { $(".circleCard163").css('visibility','visible'); })
$(".card163").mouseout(function() { $(".circleCard163").css('visibility','hidden'); })

$(".card164").mouseover(function() { $(".circleCard164").css('visibility','visible'); })
$(".card164").mouseout(function() { $(".circleCard164").css('visibility','hidden'); })

$(".card165").mouseover(function() { $(".circleCard165").css('visibility','visible'); })
$(".card165").mouseout(function() { $(".circleCard165").css('visibility','hidden'); })

$(".card166").mouseover(function() { $(".circleCard166").css('visibility','visible'); })
$(".card166").mouseout(function() { $(".circleCard166").css('visibility','hidden'); })

$(".card167").mouseover(function() { $(".circleCard167").css('visibility','visible'); })
$(".card167").mouseout(function() { $(".circleCard167").css('visibility','hidden'); })

$(".card168").mouseover(function() { $(".circleCard168").css('visibility','visible'); })
$(".card168").mouseout(function() { $(".circleCard168").css('visibility','hidden'); })

$(".card169").mouseover(function() { $(".circleCard169").css('visibility','visible'); })
$(".card169").mouseout(function() { $(".circleCard169").css('visibility','hidden'); })

$(".card170").mouseover(function() { $(".circleCard170").css('visibility','visible'); })
$(".card170").mouseout(function() { $(".circleCard170").css('visibility','hidden'); })

$(".card171").mouseover(function() { $(".circleCard171").css('visibility','visible'); })
$(".card171").mouseout(function() { $(".circleCard171").css('visibility','hidden'); })

$(".card172").mouseover(function() { $(".circleCard172").css('visibility','visible'); })
$(".card172").mouseout(function() { $(".circleCard172").css('visibility','hidden'); })

$(".card173").mouseover(function() { $(".circleCard173").css('visibility','visible'); })
$(".card173").mouseout(function() { $(".circleCard173").css('visibility','hidden'); })

$(".card174").mouseover(function() { $(".circleCard174").css('visibility','visible'); })
$(".card174").mouseout(function() { $(".circleCard174").css('visibility','hidden'); })

$(".card175").mouseover(function() { $(".circleCard175").css('visibility','visible'); })
$(".card175").mouseout(function() { $(".circleCard175").css('visibility','hidden'); })

$(".card176").mouseover(function() { $(".circleCard176").css('visibility','visible'); })
$(".card176").mouseout(function() { $(".circleCard176").css('visibility','hidden'); })

$(".card177").mouseover(function() { $(".circleCard177").css('visibility','visible'); })
$(".card177").mouseout(function() { $(".circleCard177").css('visibility','hidden'); })

$(".card178").mouseover(function() { $(".circleCard178").css('visibility','visible'); })
$(".card178").mouseout(function() { $(".circleCard178").css('visibility','hidden'); })

$(".card179").mouseover(function() { $(".circleCard179").css('visibility','visible'); })
$(".card179").mouseout(function() { $(".circleCard179").css('visibility','hidden'); })

$(".card180").mouseover(function() { $(".circleCard180").css('visibility','visible'); })
$(".card180").mouseout(function() { $(".circleCard180").css('visibility','hidden'); })

$(".card181").mouseover(function() { $(".circleCard181").css('visibility','visible'); })
$(".card181").mouseout(function() { $(".circleCard181").css('visibility','hidden'); })

$(".card182").mouseover(function() { $(".circleCard182").css('visibility','visible'); })
$(".card182").mouseout(function() { $(".circleCard182").css('visibility','hidden'); })

$(".card183").mouseover(function() { $(".circleCard183").css('visibility','visible'); })
$(".card183").mouseout(function() { $(".circleCard183").css('visibility','hidden'); })

$(".card184").mouseover(function() { $(".circleCard184").css('visibility','visible'); })
$(".card184").mouseout(function() { $(".circleCard184").css('visibility','hidden'); })

$(".card185").mouseover(function() { $(".circleCard185").css('visibility','visible'); })
$(".card185").mouseout(function() { $(".circleCard185").css('visibility','hidden'); })

$(".card186").mouseover(function() { $(".circleCard186").css('visibility','visible'); })
$(".card186").mouseout(function() { $(".circleCard186").css('visibility','hidden'); })

$(".card187").mouseover(function() { $(".circleCard187").css('visibility','visible'); })
$(".card187").mouseout(function() { $(".circleCard187").css('visibility','hidden'); })

$(".card188").mouseover(function() { $(".circleCard188").css('visibility','visible'); })
$(".card188").mouseout(function() { $(".circleCard188").css('visibility','hidden'); })

$(".card189").mouseover(function() { $(".circleCard189").css('visibility','visible'); })
$(".card189").mouseout(function() { $(".circleCard189").css('visibility','hidden'); })

$(".card190").mouseover(function() { $(".circleCard190").css('visibility','visible'); })
$(".card190").mouseout(function() { $(".circleCard190").css('visibility','hidden'); })

$(".card191").mouseover(function() { $(".circleCard191").css('visibility','visible'); })
$(".card191").mouseout(function() { $(".circleCard191").css('visibility','hidden'); })

$(".card192").mouseover(function() { $(".circleCard192").css('visibility','visible'); })
$(".card192").mouseout(function() { $(".circleCard192").css('visibility','hidden'); })

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

function change6() {
  let i = document.getElementById("volume6")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change7() {
  let i = document.getElementById("volume7")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change8() {
  let i = document.getElementById("volume8")

    if (i.classList.contains("fa-volume-xmark")) {
      i.classList.remove("fa-volume-xmark");
      i.classList.add("fa-volume-high");
    } else {
      i.classList.remove("fa-volume-high");
      i.classList.add("fa-volume-xmark");
      
    }    
}

function change9() {
    let i = document.getElementById("volume9")
  
      if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
      } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");
        
      }    
  }

function change10() {
    let i = document.getElementById("volume10")
  
      if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
      } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");
        
      }    
  }

function change11() {
    let i = document.getElementById("volume11")
  
      if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
      } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");
        
      }    
  }

function change12() {
    let i = document.getElementById("volume12")
  
      if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
      } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");
        
      }    
  }

function change13() {
    let i = document.getElementById("volume13")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change14() {
    let i = document.getElementById("volume14")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change15() {
    let i = document.getElementById("volume15")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change16() {
    let i = document.getElementById("volume16")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change17() {
    let i = document.getElementById("volume17")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change18() {
    let i = document.getElementById("volume18")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change19() {
    let i = document.getElementById("volume19")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change20() {
    let i = document.getElementById("volume20")

    if (i.classList.contains("fa-volume-xmark")) {
        i.classList.remove("fa-volume-xmark");
        i.classList.add("fa-volume-high");
    } else {
        i.classList.remove("fa-volume-high");
        i.classList.add("fa-volume-xmark");

    }
}

function change21() {
    let i = document.getElementById("volume21")

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

$(".dividerCard13").on('click', function(){
    $('.moreLike28').toggle(0, function () {
        $(".moreLike28").css('display','flex')
        $(".dividerCard13").css('display','none')
        $(".dividerCard14").css('display','flex')
        $(".playIconCard79").css('display','flex')
        $(".playIconCard80").css('display','flex')
        $(".playIconCard81").css('display','flex')
    })
})

$(".dividerCard14").on('click', function(){
    $('.moreLike28').toggle(0, function () {
        $(".moreLike28").css('display','none')
        $(".dividerCard13").css('display','flex')
        $(".dividerCard14").css('display','none')
        $(".playIconCard79").css('display','none')
        $(".playIconCard80").css('display','none')
        $(".playIconCard81").css('display','none')
    })
})

$(".dividerCard15").on('click', function(){
    $('.moreLike32').toggle(0, function () {
        $(".moreLike32").css('display','flex')
        $(".dividerCard15").css('display','none')
        $(".dividerCard16").css('display','flex')
        $(".playIconCard91").css('display','flex')
        $(".playIconCard92").css('display','flex')
        $(".playIconCard93").css('display','flex')
    })
})

$(".dividerCard16").on('click', function(){
    $('.moreLike32').toggle(0, function () {
        $(".moreLike32").css('display','none')
        $(".dividerCard15").css('display','flex')
        $(".dividerCard16").css('display','none')
        $(".playIconCard91").css('display','none')
        $(".playIconCard92").css('display','none')
        $(".playIconCard93").css('display','none')
    })
})

$(".dividerCard17").on('click', function(){
    $('.moreLike36').toggle(0, function () {
        $(".moreLike36").css('display','flex')
        $(".dividerCard17").css('display','none')
        $(".dividerCard18").css('display','flex')
        $(".playIconCard103").css('display','flex')
        $(".playIconCard104").css('display','flex')
        $(".playIconCard105").css('display','flex')
    })
})

$(".dividerCard18").on('click', function(){
    $('.moreLike36').toggle(0, function () {
        $(".moreLike36").css('display','none')
        $(".dividerCard17").css('display','flex')
        $(".dividerCard18").css('display','none')
        $(".playIconCard103").css('display','none')
        $(".playIconCard104").css('display','none')
        $(".playIconCard105").css('display','none')
    })
})

$(".dividerCard19").on('click', function(){
    $('.moreLike40').toggle(0, function () {
        $(".moreLike40").css('display','flex')
        $(".dividerCard19").css('display','none')
        $(".dividerCard20").css('display','flex')
        $(".playIconCard115").css('display','flex')
        $(".playIconCard116").css('display','flex')
        $(".playIconCard117").css('display','flex')
    })
})

$(".dividerCard20").on('click', function(){
    $('.moreLike40').toggle(0, function () {
        $(".moreLike40").css('display','none')
        $(".dividerCard19").css('display','flex')
        $(".dividerCard20").css('display','none')
        $(".playIconCard115").css('display','none')
        $(".playIconCard116").css('display','none')
        $(".playIconCard117").css('display','none')
    })
})

$(".dividerCard21").on('click', function(){
    $('.moreLike44').toggle(0, function () {
        $(".moreLike44").css('display','flex')
        $(".dividerCard21").css('display','none')
        $(".dividerCard22").css('display','flex')
        $(".playIconCard127").css('display','flex')
        $(".playIconCard128").css('display','flex')
        $(".playIconCard129").css('display','flex')
    })
})

$(".dividerCard22").on('click', function(){
    $('.moreLike44').toggle(0, function () {
        $(".moreLike44").css('display','none')
        $(".dividerCard21").css('display','flex')
        $(".dividerCard22").css('display','none')
        $(".playIconCard127").css('display','none')
        $(".playIconCard128").css('display','none')
        $(".playIconCard129").css('display','none')
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