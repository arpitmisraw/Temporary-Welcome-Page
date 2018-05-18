$(document).ready(function(){
    $('div.section-left').mousemove(function(e){
          var y = e.pageY;
          var x = e.pageX;                    
          $('div.left-text').css({'top':  50 + y / 300 + 'vh'}); 
          $('div.left-text').css({'left': 5 + x / 300 + 'vw'});

    });
  });