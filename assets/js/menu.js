var showmenu = {
    init: function() {
        this.clickShowMenu('.humberger', '.menu-list', 'showmenu');

    },
    clickShowMenu: function(button, header, classMenu) {
        var btn = document.querySelector(button);
        var navMenu = document.querySelector(header);
        btn.addEventListener('click', function() {
            navMenu.classList.addClass(classMenu);
        });
    }
}
showmenu.init();