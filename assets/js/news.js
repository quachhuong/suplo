// scroll menu
$(window).scroll(function() {
    if ($(window).scrollTop() >= 99) {
        $('.header__menu').addClass('navbar-fixed-top');
    }


    if ($(window).scrollTop() >= 100) {
        $('.header__menu').addClass('show');
    } else {
        $('.header__menu').removeClass('show navbar-fixed-top');
    }
});
// back to top
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function() {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});