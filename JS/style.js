$(Document).ready(function() {
    $(".nav-toggle").on('click',function() {
        $(this).toggleClass('is-active')
        $('.nav-menu-mobile').toggleClass('is-active')
    })
})