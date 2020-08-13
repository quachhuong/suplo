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
//
// menu
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
// back to top

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, "slow");
    });
});