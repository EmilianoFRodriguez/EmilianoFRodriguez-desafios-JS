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

function cambiarBG(bg){
    divParrafo.innerHTML = ``;
}