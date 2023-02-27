let logo = document.querySelector(".logo");


let button3 = document.querySelector("#b3");
let img3 = document.querySelector("#i3");
button3.onmouseenter = () => {
    img3.classList.toggle("show")
    logo.classList.toggle("gone")
};
button3.onmouseleave= () => {
    img3.classList.toggle("show")
    logo.classList.toggle("gone")
};


let button2 = document.querySelector("#b2");
let img2 = document.querySelector("#i2");
button2.onmouseenter = () => {
    img2.classList.toggle("show")
    logo.classList.toggle("gone")
};
button2.onmouseleave= () => {
    img2.classList.toggle("show")
    logo.classList.toggle("gone")
};

let button1 = document.querySelector("#b1");
let img1 = document.querySelector("#i1");
button1.onmouseenter = () => {
    img1.classList.toggle("show")
    logo.classList.toggle("gone")
};
button1.onmouseleave= () => {
    img1.classList.toggle("show")
    logo.classList.toggle("gone")
};





