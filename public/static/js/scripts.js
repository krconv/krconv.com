$(document).ready(function() {
    loadPage(document.location.pathname);

    $('nav > a').click(function(event) {
        window.history.pushState({}, document.title, $(this).attr('href'));
        loadPage(document.location.pathname);
        
        event.preventDefault();
    });
});

function loadPage(page) {
    if (page == '/')
        page = '/about'
    $('main').load('/page' + page);
}