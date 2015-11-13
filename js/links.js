$(document).ready(function(){
        $('.url-content').first().nextAll('.url-info').slideDown(0);
         $('.url-content').first().addClass('selected');
            $('.url-content').click(function(){
                var info= $(this).nextAll('.url-info');
                info.slideToggle();
                 $(this).toggleClass('selected');
           });
            $('.delete-tag').click(function(){
                $($(this).parents().get(0)).remove();
                
            });
            $('.del-url').click(function(){
                $($(this).parents('.shortened-link')).remove();
                
                
            });
            
            $('.prev').click(function(e){
                e.preventDefault ? e.preventDefault() : event.returnValue = false;
            });
        });