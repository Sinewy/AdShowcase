/**
 * Created by jurez on 05/15/2015.
 */
$(document).ready(function() {

    $("#alltsmedia").click(function() {
        $(".all").removeClass('hideCard');
        $(".sideNavigation li").removeClass("selected");
        $("#alltsmedia").addClass("selected");
    });

    $("#webtsmedia").click(function() {
        if(!$(".mobile").hasClass('hideCard')) {
            $(".mobile").addClass('hideCard');
        }
        if($(".web").hasClass('hideCard')) {
            $(".web").removeClass('hideCard');
        }
        $(".sideNavigation li").removeClass("selected");
        $("#webtsmedia").addClass("selected");
    });

    $("#mobiletsmedia").click(function() {
        if(!$(".web").hasClass('hideCard')) {
            $(".web").addClass('hideCard');
        }
        if($(".mobile").hasClass('hideCard')) {
            $(".mobile").removeClass('hideCard');
        }
        $(".sideNavigation li").removeClass("selected");
        $("#mobiletsmedia").addClass("selected");
    });

    $("#tsmediaBtn").click(function() {
        $(".topNavigation a").removeClass("selected");
        $(".tsmedia a").addClass("selected");
        $(".mainContainer").fadeOut();
        $(".tsmediaContainer").delay(600).fadeIn();
    });

    $("#planetBtn").click(function() {
        $(".topNavigation a").removeClass("selected");
        $(".planet a").addClass("selected");
        $(".mainContainer").fadeOut();
        $(".planetContainer").delay(600).fadeIn();
    });

    $("#najdiBtn").click(function() {
        $(".topNavigation a").removeClass("selected");
        $(".najdi a").addClass("selected");
        $(".mainContainer").fadeOut();
        $(".najdiContainer").delay(600).fadeIn();
    });

    $("#biziBtn").click(function() {
        $(".topNavigation a").removeClass("selected");
        $(".bizi a").addClass("selected");
        $(".mainContainer").fadeOut();
        $(".biziContainer").delay(600).fadeIn();
    });

    $("#itisBtn").click(function() {
        $(".topNavigation a").removeClass("selected");
        $(".itis a").addClass("selected");
        $(".mainContainer").fadeOut();
        $(".itisContainer").delay(600).fadeIn();
    });


});
