let button1 = document.querySelector("#id1");
let lys = true;


let turnOn = function(){
    document.body.style.backgroundColor = "yellow";
}

let turnOff = function(){
    document.body.style.backgroundColor = "black";
}

let toggleLight = function(){
    if(lys){
        turnOff();
        lys = false;
    }else{
        turnOn();
        lys = true;
    }
}
 toggleLight();
button1.addEventListener("click", toggleLight);
