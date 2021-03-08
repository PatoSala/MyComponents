window.addEventListener("load", function() {
    let count = 0;
    
    $(".burger").on("click", function() {
        if (count == 0) {
            $(".nav-links").css("display", "block");
            count = 1;
        } else {
            $(".nav-links").css("display", "none");
            count = 0;
        }
    });
});