var picker = document.querySelector('#color')
var t = document.querySelector("p.text");
picker.addEventListener("input",function(){
    t.style.color(picker.value);
});

