let nombre = prompt("Ingrese su nombre")
alert(`Bienveni@ ${nombre}, veamos si puedes ver la siguiente pelicula`)

let edad = parseInt(prompt("Ingrese su edad"))
if(edad < 14){
    alert("Eres muy pequeño para ver esta pelicula")
} else if(edad < 18){
    alert("Debes mirar la pelicula con un mayor")
} else if(edad >= 18){
    alert ("Puedes mirar la pelicula!")
}

alert ("Si puedes ver la pelicula, que la disfrutes!")