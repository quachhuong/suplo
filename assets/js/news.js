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