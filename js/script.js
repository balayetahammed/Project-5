$(document).ready(function(){
    $('.main_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        cssEase:'linear',
        autoplay:true,
        autoplaySpeed: 2000,
    });

    $('.s_main').slick({
        dots:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        speed:1000,
        arrows:false,
        centerMode: true,
    });

    new VenoBox({
        selector: '.venobox'
    });











});