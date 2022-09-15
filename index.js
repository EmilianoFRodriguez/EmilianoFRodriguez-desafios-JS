let nombre = prompt("Ingresa tu nombre");
let casa = prompt("Elije una casa");

let parrafo = document.getElementById("parrafo");
let divParrafo= document.getElementById("divParrafo");
let Grifindor = document.getElementById("btnCasaG");
let Slytherin = document.getElementById("btnCasaS");
let Ravenclaw = document.getElementById("btnCasaR");
let Hufflepuff = document.getElementById("btnCasaH");




parrafo.innerHTML = `Hola ${nombre}, bienvenido a Hogwarts. Escuela de magia y hechiceria.
La casa de ${casa} estamuy orgullosa de tenerte como alumno.`;

function cambiarBgG(){
    divParrafo.className = "bgRojo";
};
function cambiarBgS(){
    divParrafo.className = "bgVerde";
}
function cambiarBgR(){
    divParrafo.className = "bgAzul";

}function cambiarBgH(){
    divParrafo.className = "bgAmarillo";
}



Grifindor.addEventListener("click", cambiarBgG);
Slytherin.addEventListener("click", cambiarBgS);
Ravenclaw.addEventListener("click", cambiarBgR);
Hufflepuff.addEventListener("click", cambiarBgH);