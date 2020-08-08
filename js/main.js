//location.href='https://yayuu19.github.io/startavina-desafio1/index#intro';

var letterC = "C"

function show(letterC) {
    document.getElementById("letter").innerHTML = letterC
}

function notTrue(){
    alert("No hay nada aquí\nSigue buscando");
}
  
(function(){
  var saludo = function(){
    
      boton.innerHTML= "<img class='letraa' src='https://i.pinimg.com/originals/99/ee/50/99ee50dbb4c1b790e277acd66f511bbc.gif'></img><img class='lisafeliz' src='http://www.mundosimpson.com.ar/galerias/anim/xlisa02.gif'> "
   };
   let boton = document.getElementById("boton")
    boton.addEventListener("click", saludo);
  }());
  (function(){
    
     let puerta = document.getElementById("puertacentral")
      puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
    }())

//location.href='https://yayuu19.github.io/startavina-desafio1/index#intro';

let start = document.getElementById("start");
let homerRunning = document.getElementById("homer-running");

start.addEventListener("click", function(){
    homerRunning.style.animation = "run 2s ease forwards";
})

let switcherOn = document.getElementById("switcher-on");
let switcherOff = document.getElementById("switcher-off");
let darkness = document.getElementById("darkness");
let hint = document.getElementById("hint");
let glass = document.getElementById("glass");
let curtain = document.getElementById("curtain");

switcherOn.addEventListener("click", function(){
    switcherOn.style.display = "none";
    switcherOff.style.display = "block";
    darkness.className = "lights-off";
    hint.innerText = "A";
    hint.style.zIndex = "5";
 });

switcherOff.addEventListener("click", function(){
    switcherOn.style.display = "block";
    switcherOff.style.display = "none";
    darkness.className = "";
    hint.innerText = "H";
    hint.style.zIndex = "1";
});

curtain.addEventListener("click", function(){
    curtain.style.transform = "translateX(90px)";
    curtain.style.transitionDuration = "1s";
    curtain.style.transitionTimingFunction = "ease-in-out";
})

glass.addEventListener("click", function(){
    glass.style.transformOrigin = "bottom";
    glass.style.transform = "rotateZ(90deg) translate(150px)";
    glass.style.transitionTimingFunction = "ease-in";
    glass.style.transitionDuration = "2s";
    glass.style.transitionDelay = "3s";
})

let entryDoor = document.getElementById("entry-door");

entryDoor.addEventListener("click", function(){
    entryDoor.className = "open";
})