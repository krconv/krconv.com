$(document).ready(function () {
    $('main, nav').css({ opacity: 0 });
    loadPage(document.location.pathname, function () {
        $('main, nav').animate({ opacity: 1 }, 200, function() {
            $('main, nav').css('opacity', '');
        });
    });

    $('nav > a').click(function (event) {
        if (window.location.pathname != $(this).attr('href')) {
            window.history.pushState({}, document.title, $(this).attr('href'));
            loadPage(document.location.pathname);
        }

        event.preventDefault();
    });
});

function loadPage(page, callback = null) {
    if (page == '/')
        page = '/about'
    $('nav > a').each(function() {
        if ($(this).attr('href') == page)
            $(this).addClass('active');
        else
            $(this).removeClass('active');
    })
    $('main').load('/page' + page, callback);
}