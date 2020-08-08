$(document).ready(function(){
    $("#bbut").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "bio.html";}, 500);
    });
})