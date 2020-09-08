let elementH1 = document.getElementById("h1-id");
let elementH2 = document.getElementsByClassName("h2-class");
let elementH3 = document.getElementsByTagName("h3");
let elementH4 = document.querySelector("#h4-id");
let elementH5 = document.querySelector(".h5-id");
let elementH6 = document.querySelector("h6");


console.log(elementH1.innerText);
console.log(elementH2[0].innerText);
console.log(elementH3[0].innerText);
console.log(elementH4.innerText);
console.log(elementH5.innerText);
console.log(elementH6.innerText);