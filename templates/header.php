<!doctype html>
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="ru"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <title><?= $title ?></title>
    <meta name="description" content="<?= $description ?>">
    <meta name="keywords" content="<?= $keywords ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114.png">

    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
    <![endif]-->

    <!-- Fonts Loader from fonts.css (HTML5 LocalStorage) -->
    <script>!function(){function e(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function t(e){return window.localStorage&&localStorage.font_css_cache&&localStorage.font_css_cache_file===e}function n(){if(window.localStorage&&window.XMLHttpRequest)if(t(o))a(localStorage.font_css_cache);else{var n=new XMLHttpRequest;n.open("GET",o,!0),e(n,"load",function(){4===n.readyState&&(a(n.responseText),localStorage.font_css_cache=n.responseText,localStorage.font_css_cache_file=o)}),n.send()}else{var c=document.createElement("link");c.href=o,c.rel="stylesheet",c.type="text/css",document.getElementsByTagName("head")[0].appendChild(c),document.cookie="font_css_cache"}}function a(e){var t=document.createElement("style");t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)}var o="/css/fonts.css";window.localStorage&&localStorage.font_css_cache||document.cookie.indexOf("font_css_cache")>-1?n():e(window,"load",n)}();</script>

    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.1/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.4/slicknav.min.css">
<!--    <link rel="stylesheet" href="/css/jquery.fancybox.css">-->

    <? if ( $page_name == 'index-page'){ ?>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.2/owl.transitions.min.css">
    <? } ?>

<!--    <link rel="stylesheet" href="/css/common.css?v=11">-->
<!--    <link rel="stylesheet" href="/css/responsive.css?v=01">-->

    <link rel="stylesheet" href="/css/production.css?v=01">
</head>

<body class="<?= $page_name ?>">
<div id="overflow_div">

    <!--header-->
    <header class="content-wraper">
        <div class="content clearfix">
            <a class="logo" href="/">
                <img src="/img/logo.png" class="animated" alt="Энергичный тамада Виктор"/>
                <div class="text">Энергичный тамада<br> Виктор</div>
            </a>
            <div class="contacts">
                <div class="text"><span>Звоните!</span> с 9 до 22 без выходных!</div>
                <a href="tel:+79607158265" class="phone">
                    <span>
                        <div class="phone-img animated"></div>
                        +7-960-715-82-65
                    </span>
                </a>
            </div>
        </div>
    </header>

    <!--menu-top-->
    <div class="content-wraper menu-top-container">
        <div class="content">
            <nav class="menu-top">
                <ul>
                    <li><a href="/">Главная</a></li>
                       <li><a href="/about">О себе</a></li>
                       <li><a href="/price">Цены</a></li>
                       <li><a href="/dj">Ди-джей</a></li>
                       <li><a href="/reviews">Отзывы</a></li>
                       <li>
                            <a href="/info">Информация</a>
                             <ul>
                                 <li><a href="/hardware">Аппаратура</a></li>
                                 <li><a href="/gallery">Свадебные фото</a></li>
                             </ul>
                        </li>
                       <li><a href="/contact">Контакты</a></li>
                </ul>
            </nav>
        </div>
    </div>

    <!--content-->
    <div class="content-wraper content-center">