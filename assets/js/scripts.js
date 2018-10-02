$(document).ready(function(){   

    /************************TYPED JS**********************************/

    $('.slider').ripples({
        resolution: 1024,
	    dropRadius: 10,
	    perturbance: 0.01,
        crossOrigin: null,
    });
    
    /************************TYPED JS**********************************/
    
    var typed = new Typed('#typed', {
        //stringsElement: '#typed-strings'
        strings: ['I am new in <strong class="primary">JavaScript...</strong>', 'I want to be<strong class="secondary">Awesome Developer</strong>'],
        typeSpeed: 50,
        backDelay: 1000,
        backSpeed: 10,
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 1500,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        loop: true,
    });
    
    
    
    /************************TYPED JS**********************************/
    
    $(window).scroll(function(){
       var top = $(window).scrollTop();
        //console.log(top);
        if(top > 170){
            /*When it goes after the hero area add the color to the navbar*/
            $('header').addClass('transparent-bg');
            
        }else{
            /*When the user is in hero area that time hide the color by removing the transparent-bg class if it has*/
            if($('header').hasClass('transparent-bg')){
                $('header').removeClass('transparent-bg');
            }
            
        }
        
    });
    
});