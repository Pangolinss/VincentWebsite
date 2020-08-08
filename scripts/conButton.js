$(document).ready(function(){
    $("#cbut").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "contact.html";}, 500);
    });
});