$(document).ready(function(){
    $(window).scroll(function(){
      if (this.scrollY > 20){
       $('.navbar').addClass("sticky")
      } else{
   
      }
   })
    $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass('active')
     $('.menu-btn i').toggleClass('active')
    });
   
    $(window).on('scroll load',function(){
   
     $('.navbar .menu').removeClass('active');
   
     $('.menu-btn i').removeClass('active');
   
   });
    
    
    
    
    
   var typed = new Typed(".typing",{
   strings: ["Engineer...","Engineer..."],
   typeSpeed: 100,
   backspeed: 60,
   loop: true,
   
   });
   var typed = new Typed(".typing-2",{
     strings: ["Engineer...","Engineer..."],
     typeSpeed: 100,
     backspeed: 60,
     loop: true,
     
     });
   });
   
   