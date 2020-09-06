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
        $(arrStr[i]).animate({top:'+=90px'});
    }
}
function animateUp(arrStr, num){
    var i = 0;
    for (i=0; i<num; i++){
        $(arrStr[i]).animate({top:'-=100px'});
    }
}

function partition(max, order){
    var i = 0;
    var j = 0;
    var part = [];
    for (i = 0; i< max ; i++){//partitions the images into groups
        var image = document.getElementById("i"+order[i].toString(10));
        var r = image.naturalWidth/image.naturalHeight;
        //Definitioins: r < 0.8 is normal,  0.8<=r<=1.2 is square, r > 1,2 is long
        if (j < 3 && r<0.9){
            j++;
        }// Possibilities: (0,1,2 & long) and (0,1,2 & square) 
        else if (r > 1.1){
            if (j == 0){
                part.push(1);
            }
            else if (j == 1){
                var x = part.pop();
                x++;
                part.push(x);
                part.push(1);
                j = 0;
            }
            else if (j == 2){
                part.push(2);
                part.push(1);
                j = 0;
            }
            j = 0;
        }
        else { //! {(r<0.8)/\(r>1.2)} do the logic yourself 
            if (j == 0){
                part.push(1);
            }
            else if (j == 1){
                part.push(2);
                j = 0;
            }
            else if (j == 2){
                part.push(3);
                j = 0;
            }
            j = 0;

        }
        if (j == 3){
            part.push(3);
            j = 0;
        }
        if (i == max-1){
            part.push(j);
        }
    }
    return part;
}

function scaleGroup(num, ids, offset, len){
    var image = [];
    var i = 0;
    for (i = 0; i< num; i++){
        image.push(document.getElementById(ids[i]));
    }
    if (num == 1){
        image[0].width = len + offset;
        image[0].height = image[0].naturalHeight * (image[0].width.image[0].naturalWidth);
    }
    else{
        var len1 = image[0].width;
        for (i = 1; i < num; i++){
            image[i].height = image[0].height;
            image[i].width = image[i].naturalWidth * (image[i].height/image[i].naturalHeight);
            len1 += image[i].width;
        }
        var s = (len + offset)/len1;
        for (i = 0; i < num; i++){
            image[i].height *= s;
            image[i].width *= s;
        }
    }
}

function orgImages(part, order){
    var i = 0;
    var j = 0;
    var len = 0;
    for (i = 0; i<part.length; i++){
                if (i == 0){
                    j = 0;
                    for (j = 0; j<3; j++){
                        if (j == 0){
                            var image = document.getElementById("i"+order[j].toString(10));
                            image.width = image.naturalWidth * 0.12;
                            image.height = image.naturalHeight * 0.12;
                            len += image.width;
                        }  
                        else {
                            var img = document.getElementById("i"+order[j].toString(10));
                            var prev = document.getElementById("i"+order[j-1].toString(10));
                            img.height = prev.height;
                            img.width = img.naturalWidth * (img.height/img.naturalHeight);
                            len += img.width;
                        }
                    }
                    j -= 1;
                }
                else if (part[i] == 1){
                    var image = document.getElementById("i"+order[j].toString(10));
                    image.width = len+8;
                    image.height = image.naturalHeight * (image.width/image.naturalWidth);
                }
                else if (part[i] == 2){
                    var ids = ["i"+order[j].toString(10) , "i"+order[j+1].toString(10)];
                    scaleGroup(2, ids, 4, len);
                    j++;
                }
                else if (part[i] == 3){
                    var ids = ["i"+order[j].toString(10), "i"+order[j+1].toString(10), "i"+order[j+2].toString(10)]
                    scaleGroup(3,ids, 1, len);
                    j += 2;
                }
                j++;
            }
}

$(document).ready(function(){
    $("[type = contents]").hide();
    $("#bio-pic").css("visibility", "visible");
    $("[type = contents]").css("visibility", "visible");
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
        setTimeout(function(){location.href = "art1.html";}, 500);
        $("#abut").css("color", "dimgray");
        animateDown(["#cbut", "#ebut"], 2);
    });
    $("#tbut").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "index.html";}, 500);
    });
    $("#a1").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "art1.html";}, 500);
    });
    $("#a2").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "art2.html";}, 500);
    });
    $("#a3").click(function(){
        $("[type = contents]").fadeOut();
        setTimeout(function(){location.href = "art3.html";}, 500);
    });
});