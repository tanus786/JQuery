$(document).ready(function(){
    // JQuery Effects
    //hide,show
    $("#btn1").click(function(){
        // $("#container").hide();
        $("#container").fadeOut(2000,function(){
            alert("Gone")
        });
    })
    $("#btn2").click(function(){
        // $("#container").show();
        $("#container").fadeIn();
    })

    $("#btn3").click(function(){
        $("#container").fadeToggle();
    })
    $("#btn4").click(function(){
        $("#container").fadeTo(250,0.5,function(){
            alert("faded");
        });
    })
    $("#btn5").click(function(){
        $("#container").slideDown();

    });
    $("#btn6").click(function(){
        $("#container").slideUp(3000,function(){
            alert("slided");
        });

    });
    $("#btn7").click(function(){
        $("#container").slideToggle();

    });

    //Animate
    //animate({params},speed,callback function)
    $("#btn8").click(function(){

        $("#container").animate({width:"200", height :"200", opacity:0.5,left:"250px"},2000,function(){
            $("#container").animate({borderRadius:"10px",left:"0px",width:"100", height :"100"})
        });
        // $("#container").animate({width:"+=200", height :"+=200"},2000,function(){
        //     alert("Width Change")
        // });

    });

    // $("#btn9").click(function(){
    //     // let v = $("#f").val()
    //     // console.log(v)
    //     $("#f").val("This is done using val function ")
    // })
    $("#btn9").click(function(){
        // let c = $("#content").text();
        // console.log(c);
        // $("#content").text("Changed Text")
        // $("#content").html("<b> Changed text</b>")

        // let c=$(".img").attr("src")
        // console.log(c)
        $(".img").attr("src","https://media.istockphoto.com/id/1414744533/photo/woman-hand-holding-credit-cards-and-using-smartphone-for-shopping-online-with-payment-on.jpg?s=612x612&w=is&k=20&c=eTKuoww42eIzMmDqe54aHmD6Aj94ZSRWNy-YpfUdEZc=");
    })
    //append() , prepend(), remove(), addClass(), removeClass(), toggleClass(), css(), child(), sibling()

})