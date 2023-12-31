$(document).ready(function () {
    // banner slider controls
    $("main .controller-slides .slide-btn").click(function () {
        $("main .controller-slides .slide-btn").removeClass("active");
        $(this).addClass("active");
        let slideTarget = "main ." + $(this).attr("target");
        $("main .slide").removeClass("active");
        $(slideTarget).addClass("active");
    })

    // running banner slider
    let slide_num = 1;
    setInterval(function () {
        if (slide_num < 3) {
            slide_num++;
            $("main .controller-slides .slide-btn").removeClass("active");
            $("main .controller-slides .slide-btn:nth-child(" + slide_num + ")").addClass("active");
            $("main .slide").removeClass("active");
            $("main .slide" + slide_num).addClass("active");
        } else {
            slide_num = 1;
            $("main .controller-slides .slide-btn").removeClass("active");
            $("main .controller-slides .slide-btn:nth-child(" + slide_num + ")").addClass("active");
            $("main .slide").removeClass("active");
            $("main .slide" + slide_num).addClass("active");
        }

    }, 11000)


    $(".s-h-btn").click(function () {
        $(".taps").css("transform", "translateX(0px)")
        $(".close-taps").css("transform", "translateX(0px)")
    })

    $(".close-taps").click(function(){
        $(".taps").css("transform", "translateX(-100%)")
        $(".close-taps").css("transform", "translateX(200px)")
    })
})

