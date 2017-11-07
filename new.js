$(document).ready(function() {
    
        var width = $(window).width();
    
        if (width < 1025) {
            $(".hamburger").show();
        }
    
        if (width < 992) {
            $(".contact-info-complete ul").find("li")[0].remove();
        }
    
        if (width < 550) {
            var list = $(".contact-info-complete ul");
            var phoneNumber = list.find("li")[0];
            
            list.append(phoneNumber);
    
        }
    
    
        $(window).resize(function(){
            var ipadWidth = $(document).width();
            var bootstrapLarge;
    
            if (ipadWidth < 1025) {
                $(".hamburger").show();
            }
            else {
                $(".hamburger").hide();
            }
        });
        
        $(".hamburger").click(function(){
            var sideNav = $("#sidenav").css("width");
    
            $(this).stop().toggleClass("cancel");
    
            if (sideNav == "0px"){
                $("#sidenav").stop().animate({
                    width: '200px',
                }, 500);
    
                $("div.bodyshade").fadeIn();
    
            } else {
                $("#sidenav").stop().animate({
                    width: '0px'
                }, 500);
    
                $("div.bodyshade").fadeOut();
            }
    
            $("line").css("background-color", "#c5e2ff");
    
        });
    
        $("#sidenav li").mouseenter(function(){
            $(this).find("a").css("color", "#00004C");
        });
    
        $("#sidenav li").mouseleave(function(){
            $(this).find("a").css("color", "#c5e2ff");
        });
    
    
        $(".cupcake").mouseenter(function(){
    
            $(this).find(".sweet-description").stop().animate({
                height: "80%",
                opacity: "0.9"
            }, 500);
            
            //$(this).find("span").css("position", "relative");
    
            $(this).find("span").stop().animate({
                "opacity": "1"
            }, 500);
    
            $(this).find(".sweet-title").stop().fadeOut(500);
        });
    
        $(".cupcake").mouseleave(function (){
            $(this).find(".sweet-description").stop().animate({
                height: "0",
            }, 500);
    
            $(this).find("span").stop().animate({
                "opacity": "0"
            }, 500);
    
            $(this).find(".sweet-title").stop().fadeIn(600);
    
        });
    
    });