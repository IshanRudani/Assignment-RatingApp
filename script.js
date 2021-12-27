$(document).ready(function(){

    $('span').remove('.rating');
    

 /*    for(i=1;i<=5;i++){

        $('.circle-'+i).mouseover(function(){
            $('.circle-'+i).css("background-color", "yellow");
        })
    
        $('.circle-'+i).mouseout(function(){
            $('.circle').css("background-color", "white")
        })
    
        $('.circle-'+'i').click(function(){
            $('.circle-'+i).css("background-color", "green");
            $('span').addClass('rate').html("You rated : "+i);
        })

    } */



    ////////////////circle 1//////////////////////
    $('.circle-1').mouseover(function(){
        $('.circle-1').css("background-color", "yellow");
     })
 
     $('.circle-1').mouseout(function(){
        $('.circle').css("background-color", "white")
     })

     $('.circle-1').click(function(){
        $('.circle-1').css("background-color", "green");
        $('span').addClass('rate').html("You rated : 1");
        
        /* $('.circle-1').mouseout(function() {
            $('.circle-1').css("background-color", "green");
        $('.circle-1').prevAll().css("background-color", "green");
        }) */
    })

    //////////////////////////circle 2/////////////////////
     $('.circle-2').mouseover(function(){
        $('.circle-2').prevAll().css("background-color", "yellow");
        $('.circle-2').css("background-color", "yellow")
     })
 
     $('.circle-2').mouseout(function(){
        $('.circle').css("background-color", "white")
     })

     $('.circle-2').click(function(){
        $('.circle-2').css("background-color", "green");
        $('.circle-2').prevAll().css("background-color", "green");
        $('span').addClass('rate').html("You rated : 2");

        /* $('.circle-2').mouseout(function() {
            $('.circle-2').css("background-color", "green");
        $('.circle-2').prevAll().css("background-color", "green");
        }) */
    })

    /////////////////////////circle 3//////////////////////////////////
     $('.circle-3').mouseover(function(){
        $('.circle-3').prevAll().css("background-color", "yellow");
        $('.circle-3').css("background-color", "yellow")
     })
 
     $('.circle-3').mouseout(function(){
        $('.circle').css("background-color", "white")
     })

     $('.circle-3').click(function(){
        $('.circle-3').css("background-color", "green");
        $('.circle-3').prevAll().css("background-color", "green");
        $('span').addClass('rate').html("You rated : 3");

        /* $('.circle-3').mouseout(function() {
            $('.circle-3').css("background-color", "green");
        $('.circle-3').prevAll().css("background-color", "green");
        }) */
    }) 

    ////////////////////////circle 4//////////////////////////////
    $('.circle-4').mouseover(function(){
       $('.circle-4').prevAll().css("background-color", "yellow");
       $('.circle-4').css("background-color", "yellow")
    })

    $('.circle-4').mouseout(function(){
       $('.circle').css("background-color", "white")
    })

    $('.circle-4').click(function(){
        $('.circle-4').css("background-color", "green");
        $('.circle-4').prevAll().css("background-color", "green");
        $('span').addClass('rate').html("You rated : 4");

        /* $('.circle-4').mouseout(function() {
            $('.circle-4').css("background-color", "green");
        $('.circle-4').prevAll().css("background-color", "green");
        }) */
    })
        

    /////////////////circle 5//////////////////////////////
    $('.circle-5').mouseover(function(){
        $('.circle-5').prevAll().css("background-color", "yellow");
        $('.circle-5').css("background-color", "yellow")
     })
 
     var out5 = $('.circle-5').mouseout(function(){
        $('.circle').css("background-color", "white")
     })

     $('.circle-5').click(function(){
        $('.circle-5').css("background-color", "green");
        $('.circle-5').prevAll().css("background-color", "green");
        $('span').addClass('rate').html("You rated : 5");

        /* $('.circle-5').mouseout(function() {
            $('.circle-5').css("background-color", "green");
        $('.circle-5').prevAll().css("background-color", "green");
        }) */

    })
})