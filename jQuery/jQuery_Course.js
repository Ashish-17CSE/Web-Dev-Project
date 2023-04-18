// element call by ID
        // document.getElementById('HeadingById').innerHTML = 'JavaScript';
        // jQuery = $
        // $("#HeadingById").html("jQuery This is from .html");
        // // OR // //
        // $("#HeadingById").text("jQuery This is from .text");

// call element by class
        // $(".HeadingByClass").html("jQuery --: .html")
        // // OR // // 
        // $(".HeadingByClass").text("jQuery --: .text")

// tage 
        // $("h1").text("jjQQuueerryy")
        // $("p").text("paragraph change by jQuery")

// jQuery ---: Botton
/*
    $(document).ready(function(){
        
            // $("#Hide").click(function(){
            //     // $("h1").hide();
            //     // $("h1").hide("slow");
            //     // $("h1").hide("fast");
            //     $("h1").hide(3000);
            // });

            // $("#Show").click(function(){
            //     // $("h1").show();
            //     // $("h1").show("slow");
            //     // $("h1").show("fast");
            //     $("h1").show(3000);
            // })

        // Universal selector ---> * (it will select all the tags in HTML Document)
    
            // $("button").click(function(){
            //     $("*").hide(2000)
            // })
        

        // Hide Me by using the "This" keyword
            // $("#HideMe ").click(function(){
            //     $(this).hide(2000)
            // })
    // });
*/

$(document).ready(function(){
/*  // $('button').click(function(){
    //     $('p').toggle(3000)  // togglt --> Hide and show 
    // })

    // $("#fadeOut").click(function(){
    //     // $("#box").fadeOut()
    //     // $("#box").fadeOut("slow")
    //     // $("#box").fadeOut("fast")
    //     $("#box").fadeOut(2000)
    // })
    // $("#fadeIn").click(function(){
    //     // $("#box").fadeIn()
    //     // $("#box").fadeIn("slow")
    //     // $("#box").fadeIn("fast")
    //     $("#box").fadeIn(2000)
    // })
 */   
    $("button").click(function(){
        // $("#box1").fadeToggle(1000)
        // $("#box2").fadeToggle(2000)
        // $("#box3").fadeToggle(3000)
        $("#box1").fadeTo("slow", 0.3)
        $("#box2").fadeTo("slow", 0.4)
        $("#box3").fadeTo("slow", 0.5)
    })

    $

})


