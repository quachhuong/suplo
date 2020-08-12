// // Thiết lập thời gian đích mà ta sẽ đếm
// var countDownDate = new Date("Oct 9, 2020 15:37:25").getTime();

// // cập nhập thời gian sau mỗi 1 giây
// var x = setInterval(function() {

//   // Lấy thời gian hiện tại
//   var now = new Date().getTime();

//   // Lấy số thời gian chênh lệch
//   var distance = countDownDate - now;

//   // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // HIển thị chuỗi thời gian trong thẻ p
//   document.getElementById("clock").innerHTML = days + hours + minutes  + seconds ;
//   // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("clock").innerHTML = "Thời gian đếm ngược đã kết thúc";
//   }
// }, 1000);
// datetime
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
initializeClock('clock', deadline);
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
// menu responsive
// var menu = {
//     init: function() {
//         this.clickShowMenu('.humberger', '.menu-list', 'showmenu');
//     },
//     clickShowMenu: function(button, header, classMenu) {
//         var btn = document.querySelector(button);
//         var navMenu = document.querySelector(header);
//         btn.addEventListener('click', function() {
//             navMenu.classList.toggle(classMenu);
//         });
//     }
// }
// menu.init();
// ==============menu click =================
document.addEventListener('click', function() {
    var x = document.getElementById('clickbar');
    var menu = document.getElementById('menubar');
    x.addEventListener('click', function() {
        menu.classList.toggle('showmenu');
    });
});
// tabcontent
// $(document).ready(function() {

//     $('div.tab button').click(function() {
//         var tab_id = $(this).attr('data-tab');

//         $('.tab button').removeClass('current');
//         $('.tab-content').removeClass('current');

//         $(this).addClass('current');
//         $("#" + id).addClass('current');
//     })

// });
//back to top
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function() {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});