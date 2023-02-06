const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lamp = document.querySelector("#lamp");
const msg = document.querySelector("#menssagem");

//funçoes
function isLampBroken(params) {
    return lamp.src.indexOf  ("quebrada" ) > -1;
}
function lampOn(params) {
    if ( !isLampBroken() ) {
        lamp.src =  "./img/ligada.jpg";
        
        
    }
}
function lampOff(params) {
    if ( !isLampBroken() ) {
        lamp.src =  "./img/desligada.jpg";
    }
}
function lampBroken(params) {
    lamp.src = "./img/quebrada.jpg";
    msg.innerHTML = `Você Quebrou a Lampada Recarrega a Página!!!`;
    msg.style.color = "red";
}



//eventos
turnOn.addEventListener("click",lampOn);
turnOff.addEventListener("click",lampOff);
lamp.addEventListener("mouseover",lampOn);
lamp.addEventListener("mouseout",lampOff);
lamp.addEventListener("dblclick",lampBroken);