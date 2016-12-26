$(document).ready(function () {
    
    $('.my_btn').click(function () {
       $('nav').toggleClass('nav_closed');
    });
    $('.my_btn2').click(function () {
        $('nav').toggleClass('nav_closed');
    });

    $('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic',
        closeBtn: true,
        prevEffect	: 'none',
        nextEffect	: 'none'
    });
    $("#owl-demo").owlCarousel({
        pagination: true,
        autoPlay: 3000,
        items : 3,
        autoWidth: false,
        itemsCustom : [
            [0, 1],
            [767, 1],
            [991, 2],
            [1199, 3]
        ]
    });

    $(".anchors").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    $(".to_top_btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    $(window).scroll(function(e){
        parallax();
    });

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.parallax_bg').css('top',-(scrolled*0.1)+'px');
    }

    $('.slide_it').click(function () {
        if ($('.info_name i').hasClass('active')) {
            $('.info_name i').removeClass('active');
        }
        if ($(this).children('i').hasClass('active')) {
            $(this).children('i').removeClass('active');
        }
        else {
            $(this).children('i').addClass('active');
        }


        $('.close_it').slideUp();
        if($(this).parent().children('ul').css('display') == 'none') {
            $(this).parent().children('ul').slideDown();
        }
        else if($(this).parent().children('ul').css('display') == 'block') {
            $(this).parent().children('ul').slideUp();
        }
    });

    var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},10);};
});

new WOW().init();
