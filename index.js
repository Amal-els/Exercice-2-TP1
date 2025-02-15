const picker = document.querySelector('#color');
const size_picker = document.querySelector('#size');
const font_picker =document.querySelector("#fonts");

var t = document.querySelector(".text p");
picker.addEventListener("input",function(){
    t.style.color = picker.value;});
size_picker.addEventListener("input",function(){
    t.style.fontSize = size_picker.value + "px";});
font_picker.addEventListener("input",function(){
    t.style.fontFamily = font_picker.value;
});

