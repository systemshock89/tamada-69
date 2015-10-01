/**
 * @description Основные скрипты
 * version: 0.0.6
 */

$(function(){

    /* Переносим правый блок вправо */
    $('.floatblock.center-min, .floatblock.center-middle').before($('.floatblock.right').show());
    $('.padding-right').hide();
    /* /Переносим правый блок вправо */


    /* Активный пункт меню */
    $('.menu-top ul > li > a').each(function() {
        if ('http://tamada-69.ru'+$(this).attr('href') == window.location.href){
            $(this).parent().addClass('selected');
        }
    });
    /* /Активный пункт меню */


    /* placeholder */
    if( $('input').attr('placeholder') ||  $('textarea').attr('placeholder') ) {
        $.getScript( 'https://cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.1.2/jquery.placeholder.min.js', function() {

            $('input[placeholder], textarea[placeholder]').placeholder();

        });
    }
    /* /placeholder */


    /* Адаптивное верхнее меню */
    try {
        $('.menu-top').eq(0).slicknav({
            label: 'МЕНЮ',
            prependTo:'.header-sticky'
        });
    } catch(err) {

    }
    /* /Адаптивное верхнее меню */


    /* Динамическое подключение fancybox */
    if( jQuery("a").is(".fancybox-thumb") ){
        jQuery('head').append("<link rel='stylesheet' type='text/css'  href='/css/fancybox/jquery.fancybox.css'/>"); /* Подключим стили */
        jQuery('head').append("<link rel='stylesheet' type='text/css'  href='/css/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7'/>"); /* Подключим стили */
        jQuery.getScript( '/js/lib/fancybox/jquery.fancybox.js?v=2.1.5', function() {/* Подключим скрипт */
        jQuery.getScript( '/js/lib/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7', function() {/* Подключим скрипт */

                /* Подрубаем галерею */
                jQuery(".fancybox-thumb").fancybox({
                    prevEffect	: 'none',
                    nextEffect	: 'none',
                    helpers	: {
                        title	: {
                            type: 'outside'
                        },
                        thumbs	: {
                            width	: 50,
                            height	: 50
                        },
                        overlay: {
                            locked: false
                        }
                    }
                });

                /* Открываем автоматом по id через класс */
                var start_id = window.location.href.indexOf("#");
                if( start_id > 0 ){
                    var id = window.location.href.substring( start_id+1 );
                    jQuery('a.fancybox-thumb.id' + id ).click();
                }

            });
        });
    }
    /* /Динамическое подключение fancybox */


    /* фиксированное верхнее меню */
    $('.menu-top-container').waypoint('sticky');
    /* /фиксированное верхнее меню */


    /* Owl Slider */
    $(function() {
        if( $(".index_slider .owl-carousel").is("div") ){

            var owl =  $('.index_slider .owl-carousel');

            owl.owlCarousel({
                singleItem : true,
                autoPlay : 12000,
                stopOnHover : true,
                navigation: true,
                pagination: false,
                responsiveBaseWidth: '.index_slider .owl-carousel',
                transitionStyle : "fadeUp"
            });

        }
    });


    /* кнопка Наверх */
    toTop ();
    function toTop () {
        $('body').append('<div class="toTop" title="Наверх"></div>');

        var toTop = $('.toTop'),
            contentBlock = $('#overflow_div'), // блок с контентом сайта
            toTopOffset = 30, // отступ кнопки от контента в px
            documentWidth,
            contentBlockWidth,
            contentOfsetLeft,
            toTopWidth = toTop.width();

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                toTop.stop().fadeIn();
            } else {
                toTop.stop().fadeOut();
            }
        });

        toTop.click(function () {
            $('body,html').animate({scrollTop: 0}, 500);

        })
            .hover(
            function () {
                $(this).stop().animate({
                    opacity: 1
                }, 250);
            }, function () {
                $(this).stop().animate({
                    opacity: 0.3
                }, 250);
            }
        );


        //определение позиции кнопки "Наверх"
        if ( contentBlock.size()> 0 ){ // если указанный блок с контентом существует
            toTopPosition();

            $(window).resize(function () {
                toTopPosition();
            });
        }
        function toTopPosition() {
            documentWidth = $(document).width();
            if ( contentBlock.css('minWidth') == '0px'){
                contentBlockWidth = parseInt(contentBlock.css('width'));
            } else {
                contentBlockWidth = parseInt(contentBlock.css('minWidth'));
            }
            contentOfsetLeft = (documentWidth - contentBlockWidth)/2;

            if ( documentWidth <= (contentBlockWidth + (toTopOffset + toTopWidth)*2 ) ){
                // когда ширина окна браузера меньше чем ширина контента + ширина кнопки Назад
                toTop.css('left', 15);
            } else {
                // когда ширина окна браузера больше чем ширина контента + ширина кнопки Назад
                toTop.css('left', contentOfsetLeft - toTopWidth - toTopOffset);
            }
        }
    }
    /* /кнопка Наверх */


    // Отменить перетаскивание картинок и ссылок
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

}); // END READY


//Баг в ie с прыгающим рывками элементом с position: fixed
if(navigator.userAgent.match(/Trident.*rv[ :]*11\.| Edge\/12\./) || navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/MSIE 9/i)) {
    $('body').on("mousewheel", function (e) {
        e.preventDefault();

        var wheelDelta = event.wheelDelta;

        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
}

//preloader
$(window).on('load', function () {

    $(".page-preloader").fadeOut();
    $(".page-preloader .spinner").delay(400).fadeOut("slow");

});