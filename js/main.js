//location.href='https://yayuu19.github.io/startavina-desafio1/index#intro';

// Bart Room

var letterC = "C"

function show(letterC) {
    document.getElementById("letter").innerHTML = letterC
}

function notTrue(){
    alert("No hay nada aquí\nSigue buscando");
}

// Lisa Room

let letterR = "R"

function showLisa(){
    let lisaroom = document.getElementById("lisa-room");
    let lisafeliz = document.createElement("div");
    lisafeliz.classList.add("lisafeliz");
    lisafeliz.innerHTML ="<img class='lisafeliz' src='http://www.mundosimpson.com.ar/galerias/anim/xlisa02.gif'>";
    lisaroom.appendChild(lisafeliz);
    let lisa = document.getElementById("lisa");
    lisaroom.removeChild(lisa);

    document.getElementById("letterR").innerHTML = letterR;
}
  
// Hall

(function(){
<<<<<<< HEAD
  var letraR = function(){
     let lisaroom = document.getElementById("lisa-room")
      let lisafeliz = document.createElement("div");
      lisafeliz.classList.add("lisafeliz")
      lisafeliz.innerHTML ="<img class='lisafeliz' src='http://www.mundosimpson.com.ar/galerias/anim/xlisa02.gif'>"
    lisaroom.appendChild(lisafeliz)
    let lisa = document.getElementById("lisa")
    lisaroom.removeChild(lisa)
     let letraR = "<h3 id = 'letraR'> R <h3>"
      boton.innerHTML= letraR
      
    };
   let boton = document.getElementById("boton")
    boton.addEventListener("click",letraR);
  }());

  (function(){
    
     let puerta = document.getElementById("puertacentral")
      puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
    }())
=======

    let puerta = document.getElementById("puertacentral")
    puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
}())

//Living Room

function moveCushion(){
    let cushion = document.getElementById("img_cushion");
    cushion.classList.add("cushionMov");
    document.getElementById("letrag").style.zIndex = 2;
}

// Intro
>>>>>>> 26ddec61b2a73b730dd6d449fde6f1929b4994b0

let start = document.getElementById("start");
let homerRunning = document.getElementById("homer-running");

start.addEventListener("click", function(){
    homerRunning.style.animation = "run 2s ease forwards";
})

// Dining Room

let switcherOn = document.getElementById("switcher-on");
let switcherOff = document.getElementById("switcher-off");
let darkness = document.getElementById("darkness");
let hint = document.getElementById("letterA");
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

let recolectador = document.getElementsByClassName("recolectador");

function letraE(){
    letraAGuardar = document.getElementById("letra").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("letra").innerHTML = "";
}

function letraA(){
    letraAGuardar = document.getElementById("letterA").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("letterA").innerHTML = "";
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
<<<<<<< HEAD
// JS DEL TELEFONO
function atenderTel(){
   let telefono = document.getElementById("telefono");
   telefono.style.transform = "rotateZ(-50deg)";
   let kitchen = document.getElementById("kitchen")
   let notaMusical= document.getElementById("nota3")
   kitchen.removeChild(notaMusical)
   let mensaje = document.getElementById("mensaje");
   mensaje.innerText="Un anciano malvado busca vengarse de su asesin@"
//    telefono.addEventListener("click", function(){
//     telefono.style.transform = "rotateZ(50deg)"
}

//EVENTOS DEL CUARTO DE LISA
function parlante1(){
    let mensaje= document.getElementById("mensajeParlante")
    mensaje.innerText="Aqui no hay nada, sigue buscando"
}
function parlante2(){
    let mensaje2= document.getElementById("mensajeparlante2")
    mensaje2.innerText="Quiza la encuentres muy conservada"
=======

function letraH(){
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += "H";
    }
    document.getElementById("letrag").style.display = "none";
}

function letraR(){
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += "R";
    }
    document.getElementById("letterR").style.display = "none";
}

function letraS(){
    letraAGuardar = document.getElementById("letterS").innerText;
    for(let i=0; i<recolectador.length; i++){
        recolectador[i].innerText += letraAGuardar;
    }
    document.getElementById("letterS").innerHTML = "";

>>>>>>> 26ddec61b2a73b730dd6d449fde6f1929b4994b0
}