var url = "https://saogeraldo.behappe.com.br/";

var registerEvents = function() {
setTimeout(() => {
    $('body').addClass('loaded');
}, 1000);
$('#studio-carousel').owlCarousel({
    // loop:true,
    margin:40,
    nav:false,
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
});

/*=========================================================================
App Carousel
=========================================================================*/
$('#app_carousel').owlCarousel({
    // loop:true,
    margin: 20,
    autoplay: true,
    responsiveClass:true,
    smartSpeed: 500,
    dots: false,
    nav:true,
    navText: ['<i class=" arrow_carrot-left"></i>', '<i class=" arrow_carrot-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }

});

/*=========================================================================
Testimonial Carousel
=========================================================================*/
$('#testimonial_carousel').owlCarousel({
    // loop: true,
    autoplay: true,
    smartSpeed: 500,
    items: 1,
    nav: false
});

/*=========================================================================
Counter Up Active
=========================================================================*/
var counterSelector = $('.counter');
counterSelector.counterUp({
delay: 10,
time: 1000
});

/*=========================================================================
Initialize smoothscroll plugin
=========================================================================*/
smoothScroll.init({
offset: 60
});

/*=========================================================================
Active venobox
=========================================================================*/
var vbSelector = $('.img_popup');
vbSelector.venobox({
numeratio: true,
infinigall: true
});

/*=========================================================================
Scroll To Top
=========================================================================*/
$(window).on( 'scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});


/*=========================================================================
wow Settings
=========================================================================*/
var wow = new WOW( {
    mobile: false,
    offset: 150
});
wow.init();


$('#textures .results li').on('click', function() {
    var zIndex = $.topZIndex("#textures li .texture-item");
    $(this).find('.texture-item').css('z-index', zIndex + 10);

    var index = $(this).find('.texture-item').data('index');
    $("#textures .controls span").removeClass('active');
    $("#textures .controls").find("[data-index='" + index + "']").addClass('active');
});

$('#textures .controls span').on('click', function() {
    $("#textures .controls span").removeClass('active');
    $(this).addClass('active');
    var index = $(this).data('index');

    var zIndex = $.topZIndex("#textures li img");
    $("#textures .results li").find("[data-index='" + index + "']").css('z-index', zIndex + 10);
});

$(".toggle-header").on('click', function(e) {
    e.preventDefault();
    $("#header").addClass('white');
});

$(".toggle-header-x").on('click', function(e) {
    e.preventDefault();
    $("#header").removeClass('white');
});

var lastScrollTop = 0;

$(".quote-wrap").on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(this)[0].scrollHeight;
    var percent = 100 * scrollTop / ($(this).height() - scrollHeight) * -1;

    if (percent > 50) {
        $("#image1").css('opacity', 0);
        $("#image2").css('opacity', 1);
    } else {
        $("#image1").css('opacity', 1);
        $("#image2").css('opacity', 0);
    }
});

$(window).on('scroll', function() {
    // Up bar

    var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    // console.log(h[sh]);
    $('#up-bar').css('width', percent + '%');

    // console.log(h[st]);

    if (h[st] > lastScrollTop){
        // downscroll code
        if (h[st] >= 700) {
            $("#sobre").css('background-color', '#fbfbfb');
        } else if (h[st] >= 250) {
            $("#sobre").css('background-color', '#b8f2d9');
        }
    } else {
       // upscroll code
       if (h[st] <= 400) {
            $("#sobre").css('background-color', '#fbfbfb');
        } else if (h[st] <= 800) {
            $("#sobre").css('background-color', '#b8f2d9');
        }
    }
    lastScrollTop = h[st];

});

// Fullscreen Active Code
$(window).on('resizeEnd', function () {
    $("#home").height($(window).height());
});
$(window).on('resize', function () {

    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
    }, 300);
}).trigger("resize");

if ($.fn.jarallax) {
    // $('.parallax').jarallax({
    //     speed: 0.2,
    //     autoplay: 0,
    //     videoSrc: "mp4:./video2.mp4"
    // });
}

$("#home .text-wrap").on('mouseenter', function() {
    $("#home h1.text").css('opacity', '0');
    $("#home h1.play").css('opacity', '1');
});

$("#home .text-wrap").on('mouseleave', function() {
    $("#home h1.text").css('opacity', '1');
    $("#home h1.play").css('opacity', '0');
});

// $('.parallax').jarallax({
//     speed: 0.2,
//     autoplay: 0,
//     videoSrc: "mp4:./video2.mp4"
// });

// $(".parallax")[0].jarallax.video.pause();

$("#home h1.play").on('click', function(e) {
    e.preventDefault();
    $("#home .text-wrap")
        .off('mouseenter')
        .off('mouseleave')
        .hide();
        $('.parallax').jarallax({
            type: "scale",
            imgHeight: "10px",
            speed: 0.2,
            autoplay: 1,
            // videoSrc: "http://youtu.be/hQfNtnKm5nA",
            // videoSrc: "mp4:./video2.mp4",
            videoStartTime: 3
        });

    // data-jarallax='{"speed": 0.2}' data-background="./img/image_home.png" data-jarallax-video="mp4:./video2.mp4"
});

new WOW().init();

$('#gaiola-carousel').owlCarousel({
    // loop:true,
    margin:40,
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
});
}

Handlebars.registerHelper("itemUrl", function(itemId) {
    return url + 'Item/Download?id='+itemId;
});

Handlebars.registerHelper("imagemUrl", function(id) {
    return url + 'PaginaImagem/Download?id='+id;
});

$(function() {

    var context = {};

    var renderPage = function() {
        var templateScript = $("#home-template").html();

        var template = Handlebars.compile(templateScript);
        var compiledHtml = template(context);

        $('#app').html(compiledHtml);
    }

    function ajax1() {
        return $.ajax({
            type: "POST",
            url: url + 'Combinacao/Listar?paginacao=6&pagina=1',
            withCredentials: true,
            headers: {
                'Content-Type':'application/json'
            },
            success: function(res){
                if (res.sucesso) {
                    context.pagina = res.dados.lista[0];

                    var paginas = res.dados.lista;
                    paginas.shift();
                    context.paginas = paginas;
                }
            }
          });
    }

    function ajax2() {
        return $.ajax({
            type: "POST",
            url: url + 'Catalogo/Listar?paginacao=30&pagina=1',
            withCredentials: true,
            headers: {
                'Content-Type':'application/json'
            },
            success: function(res){
                if (res.sucesso) {
                    context.catalogo = res.dados.lista;
                }
            }
          });
    }

    $.when(ajax1(), ajax2()).done(function(a1){
        renderPage();
        registerEvents();
    });

    renderPage();

});
