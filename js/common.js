$(document).ready(function(){
            var touch = $('.mobile');
            var auth = $('.auth');
            $(touch).click(function(e){
                e.preventDefault ? e.preventDefault() : event.returnValue = false;
                auth.slideToggle();
            });
            
            $(window).resize(function(){
                var w= $(window).width();
                touch.removeClass('active');
                if(w>760){
                    auth.removeAttr('style');
                }
            })
            $('.head-logo').hover(function(){
                $('.logo-p2').toggleClass("transformed");
            });
            $(touch).click(function(e){
                e.preventDefault ? e.preventDefault() : event.returnValue = false;
                touch.toggleClass('mobile-active');
            })
        });
        