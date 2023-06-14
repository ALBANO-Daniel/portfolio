// navbar state
let isOpen = false;
// smooth scroll
$(document).ready(function(){

    $("section").click(function(){
        if(isOpen === true){
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        }
    })
    $("header").click(function(){
        if(isOpen === true){
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        }
    })
    $(".custom-navbar .link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
            $('#nav-toggle').toggleClass('is-active')
            $('ul.nav').toggleClass('show');
            isOpen = !isOpen;
        } 
    });
});
// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
    isOpen = !isOpen;
});