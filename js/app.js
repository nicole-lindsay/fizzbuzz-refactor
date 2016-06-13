$(document).ready(function() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            $(".numbers").append("<p>fizzbuzz</p>");
        } else if (i % 3 == 0) {
            $(".numbers").append("<p>fizz</p>");
        } else if (i % 5 == 0) {
            $(".numbers").append("<p>buzz</p>");
        } else {
            $(".numbers").append("<p>" + i + "</p>");
        }
    }
});
