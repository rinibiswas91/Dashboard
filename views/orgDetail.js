$(document).ready(function(){
    $("#electronics").mouseover(function(){
       $("#panel1").show();
    });

         $("#panel1").mouseover(function(){
         $("#panel1").show();
    });
         $("#panel1").mouseout(function(){
         $("#panel1").hide();

     });
         $("#electronics").mouseout(function(){
         $("#panel1").hide();
     });
});

$(document).ready(function(){
    $("#men").mouseover(function(){
       $("#panel2").show();
    });
    $("#panel2").mouseover(function(){
         $("#panel2").show();
    });
         $("#panel2").mouseout(function(){
         $("#panel2").hide();
     });

          $("#men").mouseout(function(){
         $("#panel2").hide();
     });
});

$(document).ready(function(){
    $("input").on({
        mouseenter: function(){
            $(this).css("background-color", "yellow");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
       
    
    });
});



$(document).ready(function(){
    $("#women").mouseover(function(){
       $("#panel3").show();
    });
    $("#panel3").mouseover(function(){
         $("#panel3").show();
    });
         $("#panel3").mouseout(function(){
         $("#panel3").hide();
     });

          $("#women").mouseout(function(){
         $("#panel3").hide();
     });
});

$(document).ready(function(){
    $(".myanchor").click(function(){


       $("#slider").hide();

    });

         
});
