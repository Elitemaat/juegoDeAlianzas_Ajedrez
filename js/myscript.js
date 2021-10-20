
function Alerta() {
  alert("¡Bienvenidas mujeres emprendedoras!");
}

function Confirmacion() {
  var txt;
  var r = confirm("¿Deseas saber acerca de autonomía económica de las Mujeres?");
  if (r == true) {
    txt = "Gracias por el interes";
  } else {
    txt = "Espero que Puedas Cambiar de Opinion";
  }
  alert(txt);
}

function MyPrompt() {
 
  var Nombre = prompt("¿Cual es tu Nombre?", "Señorita");
  var txt ="Hola " + Nombre+ " Te invitamos a ser Emprendedora y Adesarrollar tu Autonomía Económica."
  return document.getElementById("d1").innerHTML = txt;
}

function HolaMundo(){
 var HolaMundo= "Hola Mundo"
 return document.getElementById("id1").innerHTML = HolaMundo;
}

function Suma(N1 , N2){
 var Suma= N1+N2;
 return document.getElementById("id2").innerHTML = "La Suma de "+N1+"+"+N2+"="+Suma;
}

function Mensaje(){
 console.log("mensaje únicamente en la consola del navegador");
}

function NumeroPar(Numero){

   var txt;
  if(Numero%2==0){
    txt="El "+Numero+ " Es Par";
   } else{
     txt="El "+Numero+ " No es Par";
  }

   return document.getElementById("id3").innerHTML =txt;
}