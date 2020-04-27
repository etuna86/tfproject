

$('.mobil-menu-btn').click(function () {
    $(this).toggleClass('opened');
    $('.mobile-menu').toggleClass('open');
})

$('.list').click(function () {
    $('.mobile-menu').removeClass('open');
    $('.mobil-menu-btn').removeClass('opened');
})


var a=0;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $( "header" ).addClass("header-white");


    } else {
        $( "header" ).removeClass("header-white");

    }

    var oTop = $('.counter-section').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});

if (screen.width > 765) {}
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    function topFunction() {
        var myBtnElement=document.getElementById("myBtn");
        var rocketFire=myBtnElement.getElementsByTagName('b');
        rocketFire[0].style.display = "inline-block";
        setTimeout(function(){  rocketFire[0].style.display = "none"; }, 1100);
        console.warn("rocketFire",rocketFire);
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 1000, 'swing', function() {
        });
    }

$( window ).scroll(function() {
    $( ".counter-section" ).addClass("visibled");
});
$(".search-show-btn").click(function(){
    $(".search-text").toggleClass("slide");
});
$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    navText:['<div class="slider-arrow-box"><i class="fa fa-rocket" aria-hidden="true"></i><b><div class="flame"></div></b></div>','<div class="slider-arrow-box"><b><div class="flame"></div></b><i class="fa fa-rocket" aria-hidden="true"></i></div>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#testimonialsslider').owlCarousel({
    items:1,
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#wedoing').owlCarousel({
    items:3,
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1,
            margin:50,
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },

    }
})

$(".list").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash ;
    $('html, body').animate({
        scrollTop:$(hash).offset().top - 60
    },1000 );
});

$('#accordionExample').collapse({
    toggle: false
})



$('.owl-next').click(function () {
    var owlNext=document.getElementsByClassName('owl-next');
    var sliderArrowBoxNext=owlNext[0].getElementsByClassName('slider-arrow-box');
    var SliderRocketFire=sliderArrowBoxNext[0].getElementsByTagName('b');
    SliderRocketFire[0].style.display = "inline-block";
    setTimeout(function(){  SliderRocketFire[0].style.display = "none"; }, 200);
})

$('.owl-prev').click(function () {
    var owlPrev=document.getElementsByClassName('owl-prev');
    var sliderArrowBoxNext=owlPrev[0].getElementsByClassName('slider-arrow-box');
    var SliderRocketFire=sliderArrowBoxNext[0].getElementsByTagName('b');
    SliderRocketFire[0].style.display = "inline-block";
    setTimeout(function(){  SliderRocketFire[0].style.display = "none"; }, 200);
})
/*
wow = new wow(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)

new wow().init();
*/
