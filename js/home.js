      $(document).ready(function(){
            $('.checkbox').click(function(){
                $('.check').toggleClass('checked');
                $('.check').hasClass('checked')?$('.custom-url').removeAttr('disabled'):$('.custom-url').attr('disabled', 'disabled');
            });
        });