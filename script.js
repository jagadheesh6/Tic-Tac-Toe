// Author: Jaga
// Type: Single Player & AI CPU
// Date: 05/01/2020

var moves=0;
var time;
var toggle=1;
var answer = document.getElementById("ans");
var img_00 = document.getElementById("00");
var img_01 = document.getElementById("01");
var img_02 = document.getElementById("02");
var img_10 = document.getElementById("10");
var img_11 = document.getElementById("11");
var img_12 = document.getElementById("12");
var img_20 = document.getElementById("20");
var img_21 = document.getElementById("21");
var img_22 = document.getElementById("22");

var x_00;
var x_01;
var x_02;
var x_10;
var x_11;
var x_12;
var x_20;
var x_21;
var x_22;

var o_00;
var o_01;
var o_02;
var o_10;
var o_11;
var o_12;
var o_20;
var o_21;
var o_22;

remove();

function remove(){
img_00.addEventListener("click",function(){
  
    if(toggle==1)
    {
    toggle++;
    moves++;
    x_00=1;  
    img_00.src = "x.png";
    img_00.srcset = "x.png";
check();
    img_00.removeEventListener("click", arguments.callee, false);
      
    
}
    else if(toggle!=1){
        toggle--;
        moves++;
        o_00=2;
        img_00.src = "o.png";
        img_00.srcset = "o.png";
        check();
        img_00.removeEventListener("click", arguments.callee, false);

    }else{
        alert("Oops, you can't do that!");

    }

});
img_01.addEventListener("click", function () {

    if(toggle==1) {
        toggle++;
        moves++;
        x_01=1;  
    img_01.src = "x.png";
        img_01.srcset = "x.png";
        check();
        img_01.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_01=00
        img_01.src = "o.png";
        img_01.srcset = "o.png";
        check();
        img_01.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_02.addEventListener("click", function () {

    if(toggle==1) {
        toggle++;
        moves++;
        x_02=1;  
        img_02.src = "x.png";
        img_02.srcset = "x.png";
        check();
        img_02.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_02=2;
        img_02.src = "o.png";
        img_02.srcset = "o.png";
        check();
        img_02.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_10.addEventListener("click", function () {

    
    if(toggle==1) {
        toggle++;
        moves++;
        x_10=1;  
        img_10.src = "x.png";
        img_10.srcset = "x.png";
        check();
        img_10.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_10=2;
        img_10.src = "o.png";
        img_10.srcset = "o.png";
        check();
        img_10.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_11.addEventListener("click", function () {

    if (toggle==1) {
        toggle++;
        moves++;
        x_11=1;  
        img_11.src = "x.png";
        img_11.srcset = "x.png";
        check();
        img_11.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_11=2;
        img_11.src = "o.png";
        img_11.srcset = "o.png";
        check();
        img_11.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_12.addEventListener("click", function () {

    if (toggle==1) {
        toggle++;
        moves++;
        x_12=1;  
        img_12.src = "x.png";
        img_12.srcset = "x.png";
        check();
        img_12.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_12=2;
        img_12.src = "o.png";
        img_12.srcset = "o.png";
        check();
        img_12.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_20.addEventListener("click", function () {

    if (toggle==1) {
        toggle++;
        moves++;
        x_20=1;  
        img_20.src = "x.png";
        img_20.srcset = "x.png";
        check();
        img_20.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_20=2;
        img_20.src = "o.png";
        img_20.srcset = "o.png";
        check();
        img_20.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_21.addEventListener("click", function () {

    if (toggle==1) {
        toggle++;
        moves++;
        x_21=1;  
        img_21.src = "x.png";
        img_21.srcset = "x.png";
        check();
        img_21.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_21=2;
        img_21.src = "o.png";
        img_21.srcset = "o.png";
        check();
        img_21.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
img_22.addEventListener("click", function () {

    if (toggle==1) {
        toggle++;
        moves++;
        x_22=1;  
        img_22.src = "x.png";
        img_22.srcset = "x.png";
        check();
        img_22.removeEventListener("click", arguments.callee, false);
    }
    else if (toggle!=1) {
        toggle--;
        moves++;
        o_22=2;
        img_22.src = "o.png";
        img_22.srcset = "o.png";
        check();
        img_22.removeEventListener("click", arguments.callee, false);
    } else {
        alert("Oops, you can't do that!");

    }
});
}

function check(){
    if(true){
    if(x_00==1&&x_01==1&&x_02==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
        
    }
    else if(x_00==1&&x_10==1&&x_20==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_10==1&&x_11==1&&x_12==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_00==1&&x_11==1&&x_22==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_20==1&&x_21==1&&x_22==1){
answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_02==1&&x_11==1&&x_20==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_02==1&&x_12==1&&x_22==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if(x_01==1&&x_11==1&&x_21==1){
        answer.innerHTML="Player X Won";
        time=setInterval(ask,2000);
    }
    else if (o_00 == 2 && o_01 == 2 && o_02 == 2) {
        answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_00 == 2 && o_10 == 2 && o_20 == 2) {
    answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_10 == 2 && o_11 == 2 && o_12==2) {
    answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_00 == 2 && o_11 == 2 && o_22 == 2) {
    answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_02 == 2 && o_11 == 2 && o_20 == 2) {
    answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_02 == 2 && o_12 == 2 && o_22 == 2) {
        answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_01 == 2 && o_11 == 2 && o_21 == 2) {
        answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if (o_20 == 2 && o_21 == 2 && o_22 == 2) {
        answer.innerHTML = "Player O Won";
        time = setInterval(ask, 2000);
    }
    else if(moves==9){
        answer.innerHTML = "Whoops! It's a Tie";
        time = setInterval(ask, 2000);
    }
 
}
}

function ask(){
    location.reload(true);
}


