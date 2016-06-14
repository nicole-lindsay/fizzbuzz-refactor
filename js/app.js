$(document).ready(function() {
    $('.add').click(function() {
        var numValue = $('.num').val();
        if (numValue > 0 && numValue < 101) {
            fizzbuzz(numValue);
        } 
        else {
            alert("Uh oh, wrong number! Gotta choose between 1 and 100!");
            $('.numbers').remove(numValue);
        }
        $('.numbers').append(numValue);
        $('.num').val('');
    })
});

function fizzbuzz(numValue) {
    for (var i = 0; i < numValue; i++) {
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
};