let btn = document.querySelector("button");

// let changeColor = function(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let h2 = document.querySelector('h2');
//     h2.innerText = `rgb(${red}, ${blue}, ${green})`;
//     let box = document.querySelector('.box');
//     box.style.backgroundColor = `rgb(${red},${blue},${green})`;
//     // rgb(red, green, blue);

// }

// btn.addEventListener("click", changeColor);

btn.addEventListener("click", function(){

    let color = rgbColor();
    let h2 = document.querySelector('h2');
    h2.innerText = color;
    let box = document.querySelector('.box');
    box.style.backgroundColor = color;
    console.log("color updated..");
});


function rgbColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}