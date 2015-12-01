/**
 * @description Основные скрипты
 * version: 0.0.6
 */

$(function(){

    /* Активный пункт меню */
    $('.menu-top ul > li > a').each(function() {
        if ('http://tamada-69.ru'+$(this).attr('href') == window.location.href){
            $(this).parent().addClass('selected');
        }
    });
    /* /Активный пункт меню */


    /* фиксированное верхнее меню */
    $('.menu-top-container').waypoint('sticky');
    /* /фиксированное верхнее меню */


    /* Адаптивное верхнее меню */
    try {
        $('.menu-top').eq(0).slicknav({
            label: 'МЕНЮ',
            prependTo:'header .content'
        });
    } catch(err) {

    }
    /* /Адаптивное верхнее меню */


    /* placeholder */
    if( $('input').attr('placeholder') ||  $('textarea').attr('placeholder') ) {
        $.getScript( 'https://cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.1.2/jquery.placeholder.min.js', function() {

            $('input[placeholder], textarea[placeholder]').placeholder();

        });
    }
    /* /placeholder */


    // Отменить перетаскивание картинок и ссылок
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    /* /fancybox3 beta1 */
    try {
        if ($("a").is(".fancybox-thumb")) {

            /* Подрубаем галерею */
            $(".fancybox-thumb").fancybox({
                openEffect  : 'none',
                closeEffect : 'elastic',
                prevEffect: 'fade',
                nextEffect: 'fade',
                //theme : 'dark',
                //locked : false,
                padding : 0,
                caption : {
                    type : 'outside'
                },
                arrows : '!isTouch',
                helpers: {
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                },
                locale  : 'ru',
                locales : {
                    'ru' : {
                        CLOSE      : 'Закрыть',
                        NEXT       : 'Следующий',
                        PREV       : 'Предыдущий',
                        ERROR      : 'Запрашиваемый слайд не может быть загружен.<br/> Пожалуйста, повторите попытку позже.',
                        EXPAND     : 'Показать оригинальный размер',
                        SHRINK     : 'Вписать в экран',
                        PLAY_START : 'Просмотр слайдшоу',
                        PLAY_STOP  : 'Поставить показ слайдов на паузу'
                    }
                }
            });

            /* Открываем автоматом по id через класс */
            var start_id = window.location.href.indexOf("#");
            if (start_id > 0) {
                var id = window.location.href.substring(start_id + 1);
                $('a.fancybox-thumb.id' + id).click();
            }

            /* обновляем при ресайзе */
            $( window ).resize(function() {
                $.fancybox.update();
            });
        }
    } catch(err) {

    }
    /* /fancybox3 beta1 */


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
                transitionStyle : "fadeUp",
                beforeInit : function(elem){
                    random(elem);
                }
            });

            owl.find('.owl-controls .owl-buttons .owl-prev').attr('title', 'Предыдущий');
            owl.find('.owl-controls .owl-buttons .owl-next').attr('title', 'Следующий');

            //Sort random function
            function random(owlSelector){
                owlSelector.children().sort(function(){
                    return Math.round(Math.random()) - 0.5;
                }).each(function(){
                    $(this).appendTo(owlSelector);
                });
            }
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


}); // END READY


var Load = function (url, param) { // Функция для стандартизации общения с сервером
    $.post(
        url,
        param,
        function (data) {
            var sc_ = '';
            if (data['script']) {
                sc_ = data['script'];
                delete data['script'];
            }
            for (i in data) {
                $(i).html(data[i]);
            }
            eval(sc_);
        },
        'json'
    );
};


var Message = function (message) { // Всплывающее сообщение на базе наработки standart_window

    $('.window.message').remove(); /* Удалилил старое окно */
    /* Добавлеяем новое окно */
    $('body').append(
        '<div class="window message">' +
        '<div class="window-popup-overflower"></div>' +
        '    <div class="window_body">' +
        '        <div class="close">x</div>' +
        '        <div class="content">' +
        '            <div class="block">' +
        message +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>');

    $('.window.message').standart_window();
};


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