const contenidos = [
    {id: 1, dj: "Marco Carola", genero: "tech house", sello:"Music On"},
    {id: 2, dj: "Paco Osuna", genero: "minimal", sello:"Mind shake"},
    {id: 3, dj: "Stacy Pullen", genero: "detroit", sello:"Music On"},
    {id: 4, dj: "Sven Vath", genero: "techno", sello:"Cocoon"},
];

let contenedor = document.getElementById("contenedor");
// let link = document.getElementById("link")

let nombre = prompt("Hola, Ingrese su nombre")
let genero = prompt(`Bienvenid@ ${nombre}, que genero de musica queres escuchar?`)

let urlTH  = `https://www.youtube.com/watch?v=fUDRcZrWc48&t=5647s`;
let urlMNM =`https://www.youtube.com/watch?v=5JhQiUWQCR4`;
let urlDTR =`https://www.youtube.com/watch?v=FZPUKGCHeqU&t=6289s`;
let urlTCN =`https://www.youtube.com/watch?v=gczhwMgjR9E`;

let generoFiltrado = contenidos.filter(item => item.genero === genero);
let link = [];
if (generoFiltrado === "tech house"){
    link ="https://www.youtube.com/watch?v=fUDRcZrWc48&t=5647s";
}else if(generoFiltrado === "minimal"){
    link ="https://www.youtube.com/watch?v=5JhQiUWQCR4";
}else if (generoFiltrado === "detroit"){
    link ="https://www.youtube.com/watch?v=FZPUKGCHeqU&t=6289s";
}else if(generoFiltrado === "techno"){
    link ="https://www.youtube.com/watch?v=gczhwMgjR9E";
};

for(const contenido of generoFiltrado){
    let div = document.createElement("div");
    div.innerHTML =`<h2>Dj: ${contenido.dj}</h2>
                    <p>Genero: ${contenido.genero}</p>
                    <p>Sello: ${contenido.sello}</p>
                    <a href="${link}" target="_blank" >Escucha aqui</a>`;
    contenedor.append(div);
}


