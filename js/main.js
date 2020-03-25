
//$('select.selectpicker').selectpicker();
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

/**/
if (screen.width > 765) {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
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



}

$( window ).scroll(function() {

    $( ".counter-section" ).addClass("visibled");

});

$(window).scroll(function() {



});

/*
function counters() {
    $({Counter: 0}).animate({
        Counter: $('.Single').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Single').text(Math.ceil(this.Counter));
        }
    });


    $({Counter: 0}).animate({
        Counter: $('.Single1').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Single1').text(Math.ceil(this.Counter));
        }
    });


    $({Counter: 0}).animate({
        Counter: $('.Single2').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Single2').text(Math.ceil(this.Counter));
        }
    });

    $({Counter: 0}).animate({
        Counter: $('.Single3').text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $('.Single3').text(Math.ceil(this.Counter));
        }
    });


}
*/

$(".search-show-btn").click(function(){
    $(".search-text").toggleClass("slide");

});


$('#testimonials').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    //navText: ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"],
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
    margin:0,
    nav:true,
    //navText: ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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


