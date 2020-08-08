function performAllExcept(funArr, num, excep, excepFun)
{
    var i;
    for (i=0; i< num; i++){
        if (i !== excep){
            funArr[i]();
        }
    }
    excepFun();
}
function animateDown(arrStr, num){
    var i = 0;
    for (i=0; i<num; i++){
        $(arrStr[i]).animate({top:'+=70px'});
    }
}
function animateUp(arrStr, num){
    var i = 0;
    for (i=0; i<num; i++){
        $(arrStr[i]).animate({top:'-=100px'});
    }
}

function mouseHoverEff(){
    
}

$(document).ready(function(){
    $("[type = contents]").hide();
    $("#bio-pic").css("visibility", "visible");
    setTimeout(function(){$("[type = contents]").fadeIn();}, 250);
    $("#home").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "index.html";}, 500);
    });
    $("#cbut").click(function(){
        $("[type = contents]").fadeOut();
        $("#cbut").css("color", "dimgray");
        setTimeout(function(){location.href = "contact.html";}, 500);
    });
    $("#bbut").click(function(){
        $("[type = contents]").fadeOut();
        $("#bbut").css("color", "dimgray");
        setTimeout(function(){location.href = "bio.html";}, 500);
    });
    $("#abut").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "art.html";}, 500);
        $("#abut").css("color", "dimgray");
        animateDown(["#cbut", "#ebut"], 2);
    });
    $("#tbut").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "index.html";}, 500);
    });
});