console.log("hello");

var ishovered = false;

$(document).ready(function () {
    $(".homeBtn").hover(function () {
        console.log('hello');
        $(".dropdownHub").slideDown();
    });
},
    function () {
        var current = $(this);
        setTimeout(function () {
            if (!ishovered) {
                current.siblings(".dropdownHub").slideUp(500);
            }
        }, 50);
    })

$('body').on("mouseleave", ".dropdownHub", function(){
    ishovered = false;
    $('.dropdownHub').stop().slideUp(500)
});

$('body').on("mouseenter", ".dropdownHub", function(){
    ishovered = true;
});