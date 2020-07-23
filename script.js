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
$(document).ready(function(){
    var funArrFade = [function(){$("#bio").fadeOut();}, function(){$("#art").fadeOut();}, 
    function(){$("#exh").fadeOut();}, function(){$("#con").fadeOut();}, function(){$("#bgvid").fadeOut();}];
    $("[type = contents]").hide();
    var pg = -1;
    $("#bbut").click(function(){
        if (pg != 0){
            performAllExcept(funArrFade, 5, 0, function(){$("#bio").fadeIn();});
            pg = 0;
        }
        
    });
    $("#abut").click(function(){
        if (pg !== 1) {
            performAllExcept(funArrFade, 5, 1, function(){$("#art").fadeIn();});
            pg = 1;
        }
    });
    $("#ebut").click(function(){
        if (pg !== 2) {
            performAllExcept(funArrFade, 5, 2, function(){$("#exh").fadeIn();});
            pg = 2;
        }
    });
    $("#cbut").click(function(){
        if (pg !== 3) {
            performAllExcept(funArrFade, 5, 3, function(){$("#con").fadeIn();});
            pg = 3;
        }
    });
    $("#tbut").click(function(){
        if (pg !== 4){
            performAllExcept(funArrFade, 5, 4, function(){$("#bgvid").fadeIn();});
            pg = 4;
        }
    });
});