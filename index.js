/*const size_picker = document.querySelector('#size');
const font_picker =document.querySelector("#fonts");
const color_picker = document.querySelector('#color');
var t = document.querySelector(".text p");
picker.addEventListener("input",function(){
    t.style.color = picker.value;});
size_picker.addEventListener("input",function(){
    t.style.fontSize = size_picker.value + "px";});
font_picker.addEventListener("input",function(){
    t.style.fontFamily = font_picker.value;
});*/

function addEvent(p,cl){
    let t = document.querySelector(".text p");
    if (cl == 'color'){
        t.style.color = p.value;
    }
    else if (cl == 'fonts'){
        t.style.fontFamily = p.value;
    }
    else if (cl == 'size'){
        t.style.fontSize = p.value + "px";
    }
}

const size_picker = document.querySelector('#size');
const font_picker =document.querySelector("#fonts");
const color_picker = document.querySelector('#color');
color_picker.addEventListener("input",()=>addEvent(color_picker,'color'));
font_picker.addEventListener("input",()=>addEvent(font_picker,'fonts'));
size_picker.addEventListener("input",()=>addEvent(size_picker,'size'))



