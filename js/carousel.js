$(document).ready(function () {

    /* CAROUSEL SEDES */

    $('.slider-sedes-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="leftArrowPrevSlick" ><img src="img/first-section/arrow-left.png" alt="←"></div>',
        nextArrow: '<div class="rightArrowNextSlick"><img src="img/first-section/arrow-right.png" alt="→"></div>',
        dots: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    $('.image-Sede .caja .imagen').each(function () {
        $(this).css("background", "white");
    });
    $('.image-Sede .caja .imagen img').each(function () {
        $(this).attr("src", "img/first-section/pin2.png");
    });
    $('.image-Sede .caja').toggle(function () {
        $('.image-Sede iframe').each(function () {
            $(this).fadeIn();
        });
        $('.image-Sede .caja .imagen').each(function () {
            $(this).css("background", "#C32032");
        });

        $('.image-Sede .caja .imagen img').each(function () {
            $(this).attr("src", "img/first-section/pin.png");
        });
        $('.image-Sede .caja p').each(function () {
            $(this).css("color", "#C32032");
        });
        $('.image-Sede .caja p').each(function () {
            $(this).text("VER IMÁGENES ");
        });
    }, function () {
        $('.image-Sede iframe').each(function () {
            $(this).fadeOut();
        });
        $('.image-Sede .caja .imagen').each(function () {
            $(this).css("background", "white");
        });
        $('.image-Sede .caja .imagen img').each(function () {
            $(this).attr("src", "img/first-section/pin2.png");
        });

        $('.image-Sede .caja p').each(function () {
            $(this).css("color", "white");
        });
        $('.image-Sede .caja p').each(function () {
            $(this).text("Ver mapa");
        });
    });
    $('.toggle').on('click', function() {
        $('.contenedorFormulario').stop().addClass('active');
      });
      
      $('.close').on('click', function() {
        $('.contenedorFormulario').stop().removeClass('active');
      });
});
