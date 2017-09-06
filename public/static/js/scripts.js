$(document).ready(function () {
    $('main, nav').css({ opacity: 0 });
    loadPage(document.location.pathname, function () {
        $('main, nav').animate({ opacity: 1 }, 300);
    });

    $('nav > a').click(function (event) {
        window.history.pushState({}, document.title, $(this).attr('href'));
        loadPage(document.location.pathname);

        event.preventDefault();
    });
});

function loadPage(page, callback = null) {
    if (page == '/')
        page = '/about'
    $('main').load('/page' + page, callback);
}