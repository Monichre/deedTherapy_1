
/* ---------------------------------------------
 Services section
 --------------------------------------------- */

var service_item = $(".service-item");
var service_descr = service_item.find(".service-descr");
var service_descr_top;

function init_services(){
    (function($){

        $(".service-item").each(function(){
            $(this).find(".service-descr").prepend($(this).find(".service-intro").html());
        });

        // Hover
        service_item.click(function(){
            if ($("html").hasClass("mobile")) {
                if ($(this).hasClass("js-active")) {
                    $(this).removeClass("js-active");
                }
                else {
                    $(this).addClass("js-active");
                }
            }
        });

    })(jQuery);
}

function service_height_init(){
    (function($){

        var service_max_height = 0;
        if ($(window).width() >= 767) {
            service_item.each(function(index){
                $(this).css("height", "auto");
                if ($(this).height() > service_max_height) {
                    service_max_height = $(this).height();
                }
            });

            if (service_max_height > service_item.width() * 0.9) {
                service_item.height(service_max_height);
            }
            else {
                service_item.height(service_item.width() * 0.9);
            }
        }

        var service_descr_offset;
        var service_intro_offset;
        service_descr.each(function(){
            service_descr_offset = $(this).height() / 2;
            service_intro_offset = $(this).parent(".si-inner").find(".service-intro").height() / 2;
            $(this).parent(".si-inner").find(".service-intro").css("top", service_descr_offset + "px");
            $(this).parent(".si-inner").find(".service-descr").css("top", -service_intro_offset + "px");

        });

        // Split sections
        $(".ssh-table, .split-section-content").css("height", "auto");
        if ($(window).width() > 992) {
            $(".ssh-table, .split-section-content").equalHeights();
        }

    })(jQuery);
}

    
