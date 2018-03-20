// carousel control
var a = $('.carousel-arrow');

var showArrow = $('#show-arrow');
showArrow.on('mouseenter', function() {
    a.show();
})

showArrow.on('mouseleave', function() {
    if (a.is(':visible')) {
        a.hide();
    }
})