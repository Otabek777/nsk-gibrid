
$(document).ready(function(){
    $(".header__burgir").click(function() {
        if($(this).hasClass("active")) {
            $(".header__burgir").removeClass("rotate");
            $(".header").removeClass("openNav");
            setTimeout(function() {
                $(".header__burgir").removeClass("active");
            },300);
            $(".header").removeClass("open");
        } else {
            $(".header__burgir").addClass("active");
            $(".header").addClass("open");
            setTimeout(function() {
                $(".header__burgir").addClass("rotate");
                $(".header").addClass("openNav");
            },300);
            
        }
    });
    $('a').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    });
});