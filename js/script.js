$(document).ready(function() {
    $("a").click(function() {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 70
        }, 600), !1
    }), $(".costumer-in").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '<div class="xn-slibuto hvr-backward"><i class="fas fa-arrow-circle-left"></i></div>',
        nextArrow: '<div class="xn-slibuto hvr-forward"><i class="fas fa-arrow-circle-right"></i></div>',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{breakpoint: 1000,settings: {slidesToShow: 1}}],
        focusOnSelect: true
    }), $(".bread-nav").click(function() {
        $(".mbnav").hasClass("open") ? $(".mbnav").removeClass("open") : $(".mbnav").addClass("open")
    }), $(".faq-box").click(function() {
        $(this).toggleClass("fopen")
    }),
    $(".partner-holder").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '',
      nextArrow: '',
      responsive: [{breakpoint: 1000,settings: {slidesToShow: 1}}]
    });
});
