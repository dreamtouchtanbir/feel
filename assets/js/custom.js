 
$(function ($) {
    "use strict";



$("#d_message").on('click', function () {
        $(".d_message_drop").slideToggle(100);
        $(".d_notification_drop").hide(50);
        $(".setting").hide(50);
    }); 
    
    $("#d_notification").on('click', function () {
        $(".d_notification_drop").slideToggle(100);
        $(".d_message_drop").hide(50);
        $(".setting").hide(50);
    });
    
    $("#d_setting").on('click', function () {
        $(".setting").slideToggle(100);
        $(".d_notification_drop").hide(50);
        $(".d_message_drop").hide(50);
    }); 
    
 
$('.menu').on('click', function() {
			$('.sidebar').addClass('side-panel-open');
			$('.menu').addClass('close_menu');
			$('.menu').addClass('d-no');
			$('.menu_close').addClass('d-block');
			$('.search_menu').addClass('search_menu_active');
                $('.search_menu').removeClass('search_menu_close');
                $('.maintamplate').addClass('maintamplate_decress');
 $('.maintamplate').removeClass('maintamplate_incress');
    $('.sidebar').removeClass('side-panel-close');
		})

		$('.menu_close').on('click', function() {
            $('.menu').removeClass('d-no');
            $('.menu_close').removeClass('d-block');
			$('.sidebar').removeClass('side-panel-open');
			$('.sidebar').addClass('side-panel-close');
            $('.search_menu').removeClass('search_menu_active');
            $('.search_menu').addClass('search_menu_close');
             $('.maintamplate').removeClass('maintamplate_decress');
             $('.maintamplate').addClass('maintamplate_incress');
		})
})