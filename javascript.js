var div = [];
var red, blue, green, color;
var a; 
var bright = 1.0;
var flag = 0;

var sqrt = 50;
n = sqrt * sqrt;

var height = screen.availHeight - 200;
var divHeight = height / sqrt;

divMaster = document.createElement("div");
divMaster.style.backgroundColor = "lightslategrey";
divMaster.classList.add("my-5", "mx-auto", "d-flex", "flex-wrap");
divMaster.style.height = height + "px";
divMaster.style.width = height + "px";

for (var i = 0; i < n; i++){
    div[i] = document.createElement("div");
    div[i].style.border = "1px solid black";
    div[i].style.height = divHeight + "px";
    div[i].style.width = divHeight + "px";
    div[i].addEventListener("mouseenter", (e) => {
        if (flag == 0){
            red = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
        }
        else if(flag == 1){
            if (e.target.style.backgroundColor == "lightslategrey"){
                e.target.style.backgroundColor = "black";
            }
            else{
            e.target.style.backgroundColor = "lightslategrey";
            }
        }
        else{
            a = e.target.style.filter;
            switch (a){
                case "brightness(1)":
                    bright = 0.9;
                    console.log("Yes");
                    break;
                case "brightness(0.9)":
                    bright = 0.8;
                    console.log("Yes");
                    break;
                case "brightness(0.8)":
                    bright = 0.7;
                    console.log("Yes");
                    break;
                case "brightness(0.7)":
                    bright = 0.6;
                    console.log("Yes");
                    break;
                case "brightness(0.6)":
                    bright = 0.5;
                    console.log("Yes");
                    break;
                case "brightness(0.5)":
                    bright = 0.4;
                    console.log("Yes");
                    break;
                case "brightness(0.4)":
                    bright = 0.3;
                    console.log("Yes");
                    break;
                case "brightness(0.3)":
                    bright = 0.2;
                    console.log("Yes");
                    break;
                case "brightness(0.2)":
                    bright = 0.1;
                    console.log("Yes");
                    break;
                case "brightness(0.1)":
                    bright = 0;
                    console.log("Yes");
                    break;
                case "brightness(0)":
                    bright = 1;
                    console.log("Yes");
                    break;
            }
            e.target.style.filter = "brightness(" + bright + ")";
        }
    });
    divMaster.appendChild(div[i]);
}

var divContainer = document.createElement("div");
divContainer.classList.add("d-flex");
var divSide = document.createElement("div");
var head = document.createElement("p");
var button = document.createElement("button");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var mode = document.createElement("div");
mode.classList.add("modeList");
head.classList.add("head");
button.classList.add("btn", "button", "d-block");
head.innerHTML = "Etch-a-Sketch";
button.innerHTML = "Play Again"
button1.innerHTML = "Black & White"
button2.innerHTML = "RGB"
button3.innerHTML = "Shades of Grey"
mode.appendChild(button1);
mode.appendChild(button2);
mode.appendChild(button3);
mode.classList.add("d-inline-flex");
button1.classList.add("btn", "mode");
button2.classList.add("btn", "mode");
button3.classList.add("btn", "mode");
divSide.appendChild(head);
divSide.appendChild(button);
divSide.appendChild(mode);
divContainer.appendChild(divSide);
divContainer.appendChild(divMaster);
document.body.appendChild(divContainer);

button.addEventListener("click", clean = () => {
    var sqrt = prompt("Enter no. of rows: ");
    n = sqrt * sqrt;
    for (var i = 0; i < n; i++){
        div[i].style.backgroundColor = "lightslategrey";
        div[i].style.filter = "brightness(1.0)";
    }
});

button1.addEventListener("click", () => {
    clean();
    flag = 1;
});
button2.addEventListener("click", () => {
    clean();
    flag = 0;
});
button3.addEventListener("click", () => {
    clean();
    flag = 2;
});