

$(document).ready(function(){

    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
       
        // $(".header-title").toggleClass("header-res");
    });
    $('.portfolio-modal').on('show.bs.modal', function(e) {
        $('.nav').addClass('d-none');
      })
      $('.portfolio-modal').on('hidden.bs.modal', function(e) {
        $('.nav').removeClass('d-none');
      });



    var $carrousel = $('.carrousel'), 
    $img = $('.carrousel img'), 
    indexImg = $img.length - 1, 
    i = 0, 
    $currentImg = $img.eq(i); 
    $img.css('display', 'none'); 
    $currentImg.css('display', 'block'); 
   
    $carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');
    $('.next').click(function(){ 

        i++; 
        $img.css('display', 'none');
        $currentImg = $img.eq(i); 
        $currentImg.css('display', 'block'); 
    
    });
    
    $('.prev').click(function(){ 
    
        i--; 
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    
    });
    $('.next').click(function(){ 

        i++; 
    
        if( i <= indexImg ){
            $img.css('display', 'none'); 
            $currentImg = $img.eq(i); 
            $currentImg.css('display', 'block'); 
        }
        else{
            i = indexImg;
        }
    
    });
    
    $('.prev').click(function(){ 
    
        i--; 
        if( i >= 0 ){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else{
            i = 0;
        }
    
    });
    function slideImg(){
        setTimeout(function(){ 
                            
            if(i < indexImg){ 
            i++; 
        }
        else{ 
            i = 0;
        }
    
        $img.css('display', 'none');
    
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    
        slideImg(); 
    
        }, 5000); 
    }
    
    slideImg(); 
    
    
    
    
});

$(window).on("scroll", function(){
   
    if($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});
let modalId = $('#image-gallery');



$(function() {
    var form = $('#ajax-contact');
  
    var formMessages = $('#form-messages');
    $(form).submit(function(event) {
        
        event.preventDefault();
        var formData = $(form).serialize();
    
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
            
        })
        
        .done(function(response) {
           
            // $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-primary');
  
            $(formMessages).text(response);
        
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        // .fail(function(data) {
            
        //     $(formMessages).removeClass('alert alert-success');
        //     $(formMessages).addClass('alert alert-danger');
        
           
        //     if (data.responseText !== '') {
        //         $(formMessages).text(data.responseText);
        //     } else {
        //         $(formMessages).text('Oops! Il y a eu un problème avec votre soumission, veuillez réessayer.');
        //     }
        // });
    });

    
});




