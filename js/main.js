//location.href='https://yayuu19.github.io/startavina-desafio1/index#intro';

var letterC = "C"

function show(letterC) {
    document.getElementById("letter").innerHTML = letterC
}

function notTrue(){
    alert("No hay nada aquí\nSigue buscando");
}
  
(function(){
  var letraR = function(){
     let lisaroom = document.getElementById("lisa-room")
      let lisafeliz = document.createElement("div");
      lisafeliz.classList.add("lisafeliz")
      lisafeliz.innerHTML ="<img class='lisafeliz' src='http://www.mundosimpson.com.ar/galerias/anim/xlisa02.gif'>"
    lisaroom.appendChild(lisafeliz)
    let lisa = document.getElementById("lisa")
    lisaroom.removeChild(lisa)
      boton.innerHTML= "<h3 class='letraa'> R </h3> "
      
    };
   let boton = document.getElementById("boton")
    boton.addEventListener("click",letraR);
  }());

  (function(){
    
     let puerta = document.getElementById("puertacentral")
      puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
    }())

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
    hint.style.display = "none";
    darkness.className = "";
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
//Recolectador de Letras

//  function Hoover(){let recolectador = document.createElement("div")
//     recolectador.id="recolectador"
//     let hall=document.getElementById("hall")
//     hall.appendChild(recolectador)
//     recolectador.innerHTML="<h2 class='letterE'>E</h2>"
//  }
//  function HooverG(){let recolectadr = document.createElement("div")
//     recolectadr.id="recolectador"
//     let living=document.getElementById("living")
//     living.appendChild(recolectadr)
//     recolectadr.innerHTML="<h2 class='letterE'> E H</h2>"
//  }
// function rC(){ let recolecta = document.createElement("div")
//     recolecta.id="recolectador"
//     let lisaRoom = document.getElementById("lisa-room")
//     lisaRoom.appendChild(recolecta)
//     recolecta.innerHTML= "<h2 class='letterE'> R </h2>"
    
// }

// ----------------
// let contador = [];
//let recolectador = document.getElementsByClassName("recolectador");


// var letraG = "G";


// function letraE () {
//     var vacio = "";
//     var letraAGuardar = document.getElementById("letra").innerText;
//     document.getElementsByIdName("letra").innerHTML = vacio;
//     contador.push(letraAGuardar)
//     recolectador.innerHTML = contador;

// }

let recolectador = document.getElementsByClassName("recolectador");

function letraE(){
    letraAGuardar = document.getElementById("letra").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("letra").innerHTML = "";
}

function letraH(){
    letraAGuardar = document.getElementById("hint").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("hint").innerHTML = "";
}

function letraL(){
    letraAGuardar = document.getElementById("letterL").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("letterL").innerHTML = "";
}

function letraC(){
    letraAGuardar = letterC;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    letterC = "";
    document.getElementById("letter").innerHTML = "";
}