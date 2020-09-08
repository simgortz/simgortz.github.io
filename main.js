let clickEventH1 = document.querySelector("#clickEventH1");
let keyEventH1 = document.querySelector("#keyEventH1");
let hoverEventH1 = document.querySelector("#hoverEventH1");
let wheelEventH1 = document.querySelector("#wheelEventH1");




let clickEvent = function(){
    clickEventH1.innerHTML = "You shouldn't have clicked that. Maybe try right-clicking?";
}

clickEventH1.addEventListener("click", clickEvent);


let contextmenuEvent = function(){
    clickEventH1.innerHTML = "lol hey.";
}

clickEventH1.addEventListener("contextmenu", contextmenuEvent);




let keydownEvent = function(){
    keyEventH1.innerHTML = "You pressed a key.";
}

let keyupEvent = function(){
    keyEventH1.innerHTML = "You released a key.";
}

document.addEventListener("keydown", keydownEvent);
document.addEventListener("keyup", keyupEvent);




let mouseenterEvent = function(){
    hoverEventH1.innerHTML = "NO, REMOVE YOUR CURSOR, QUICK!";
}

let mouseleaveEvent = function(){
    hoverEventH1.innerHTML = "Please, don't put your cursor here again.";
}

hoverEventH1.addEventListener("mouseenter", mouseenterEvent);
hoverEventH1.addEventListener("mouseleave", mouseleaveEvent);




let wheelEvent = function(){
    this.style.fontSize = "200px";
    this.innerHTML = "SURPRISE!";
}

wheelEventH1.addEventListener("wheel", wheelEvent);