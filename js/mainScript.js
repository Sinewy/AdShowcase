/**
 * Created by jurez on 05/15/2015.
 */
jQuery(document).ready(function() {

    jQuery("#all").click(function() {
        jQuery(".all").removeClass('hideSample');
        jQuery(".topNavigation li").removeClass("selected");
        jQuery("#all").addClass("selected");
    });

    jQuery("#web").click(function() {
        if(!jQuery(".mobile").hasClass('hideSample')) {
            jQuery(".mobile").addClass('hideSample');
        }
        if(jQuery(".web").hasClass('hideSample')) {
            jQuery(".web").removeClass('hideSample');
        }
        jQuery(".topNavigation li").removeClass("selected");
        jQuery("#web").addClass("selected");
    });

    jQuery("#mobile").click(function() {
        if(!jQuery(".web").hasClass('hideSample')) {
            jQuery(".web").addClass('hideSample');
        }
        if(jQuery(".mobile").hasClass('hideSample')) {
            jQuery(".mobile").removeClass('hideSample');
        }
        jQuery(".topNavigation li").removeClass("selected");
        jQuery("#mobile").addClass("selected");
    });

});

