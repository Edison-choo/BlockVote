
$(document).ready(function() {
    console.log("Loading");
    
    $(".vote .icon-box").on("click", function() {
        console.log("Test");
        $(".vote .icon-box").removeClass("selectActive");
        $(this).addClass("selectActive")
        $("#choice").val($(".selectActive h4").text());
    })

    // var voted = 0;

    $(".privateVote .Choice").on("click", function() {
        console.log("clicked");
        $(this).parent().children().removeClass("choiceActive");
        $(this).parent().find(".chosen").val($(this).find("h5").text());
        console.log($(this).parent().first().html())
        $(this).addClass("choiceActive");
        // voted += 1;

        // var size = $(".privateVote .Question").length;
        // console.log(voted, size)
        // if (voted == size) {
        //     console.log("Able to proceed");
            
        // }
    });

    $(".login img").on("click", function() {
        window.location.href='/PublicVote';
    });

    $('.mobile-nav-toggle').on("click", function(){
        $('#navbar').toggleClass('navbar-mobile')
        $(this).toggleClass('bi-list')
        $(this).toggleClass('bi-x')
    });
})