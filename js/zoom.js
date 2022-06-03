const targets = document.querySelectorAll(".on-focus");
const body = document.body;



function zoom() {
    text = event.target.textContent;
    posY = event.clientY;

    zoom_text = document.createElement("span");
    zoom_text.textContent = text;
    zoom_text.style.top=posY;
    zoom_text.style.fontSize="60px";
    body.appendChild(zoom_text);
}

function clean_body(event){
    
    body.removeChild(zoom_text);
}

for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("mouseover", zoom);
    targets[i].addEventListener("mouseout", clean_body);
};

function text_zoom(){
    textbox=document.querySelector(".text_input")
    textbox.style.border="2px dashed red";
    textbox.style.fontSize="5em";

}
function text_origin(){
    textbox.style.border="3px";
    textbox.style.fontSize="15px";
}

let font=1.0
let line_height=3

function text_up(){
    if (font==2.5) font=2.5;
    else font += 0.05;
    
    document.querySelector(".change").style.fontSize=font+'em';
    document.querySelector(".change").style.lineHeight=parseInt+(font*16)+'pt';
    document.querySelector(".change2").style.fontSize=font+'em';
    document.querySelector(".change2").style.lineHeight=parseInt-(font*16)+'pt';


}
function text_down(){
    if (font==1) font=1;
    else font -= 0.05;

    document.querySelector(".change").style.fontSize=font+'em';
    document.querySelector(".change").style.lineHeight=parseInt-(font*16)+'pt';
    document.querySelector(".change2").style.fontSize=font+'em';
    document.querySelector(".change2").style.lineHeight=parseInt-(font*16)+'pt';

    console.log("down");
}


document.querySelector("#up").addEventListener("click",text_up);
document.querySelector("#down").addEventListener("click",text_down);
document.querySelector(".text_input").addEventListener("mouseover", text_zoom);
document.querySelector(".text_input").addEventListener("mouseout", text_origin);
