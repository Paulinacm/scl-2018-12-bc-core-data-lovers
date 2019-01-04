// AQUI VA LA LOGICA. funciones filtrar, ordenar, calcular
// constantes que usaremos
const pokemonApi = fetch('./data/pokemon/pokemon.json');

// Seleccino  el PRIMER DIV que contenga "pokemones_list" en su atributo CLASS, y que encuentre adentro de un div con id="pokemones"
const dataPokemon = document.querySelector("#pokemones .pokemones_list");

// Creo array para guardar los objetos pokemones y no hacer constantes fetch
let arrPokemones = []

function crearCard(objPokemon){
  let cardPokemon = document.createElement("div")
  let cardBody = document.createElement("div")
  let cardTitle = document.createElement("h5")
  let imagePokemon = document.createElement("img")
  let txtBody = "";


  // Asigno Clase CSS de Bootstrap a DIV, una clase "card" para que tenga la apariencia del componente CARDm, ref https://getbootstrap.com/docs/4.1/components/card/
  // Asigno clase col-1 para que tenga ancho 1 columna, ref https://getbootstrap.com/docs/4.1/layout/grid/
  cardPokemon.classList.add("card", "m-1", "p-2");
  // Asigno atributo SRC a Imagen
  imagePokemon.setAttribute("src", objPokemon.img);
  // Asigno atributo ALT a Imagen
  // Utilizo valor directo del JSON porque namePokemon es un nodo tipo texto y necesito solo un string. Si utilizo namePokemon en el HTML aparecera [HTML Object]
  imagePokemon.setAttribute("alt", "imagen de " + objPokemon.name);
  // Asigno Clase CSS de Bootstrap para img en card
  imagePokemon.classList.add("card-img-top");
  // Inserto la imagen pokemon al div con clase CSS "card"
  cardPokemon.appendChild(imagePokemon)
  // Asigno clase CSS de Bootstrap a Título de card
  cardTitle.classList.add("card-title");
  // Inserto nombre del Pokemon al titulo
  cardTitle.innerHTML = objPokemon.name;
  // Inserto "card-title" al div con clase CSS "card" 
  cardPokemon.appendChild(cardTitle);
  // Creo texto que insertaré en el body de la card
  // Escribo HTML en el string, para insertarlo como HTML más adelante
  txtBody = '<p class="card-text">Pokemon tipo: <strong>' + objPokemon.type + '</strong></p><br/><p class="card-text">Número: <strong>' + objPokemon.num + '</strong></p>'
  // Asigno clase bootstrap para "card-body"
  cardBody.classList.add("card-body", "p-0");
  // Inserto contenido HTML(variable txtBody) antes que termine el html de cardPokemon
  // No uso appendChild porque txtBody no es un elemento tipo nodo, es un string
  // Insert insertAdjacentHTML permite insertar un string que contiene HTML en una ubicación específica, en este caso antes de que termine el elemento cardPokemon
  cardBody.insertAdjacentHTML("beforeend", txtBody);
  // Inserto "card-title" al div con clase CSS "card" 
  cardPokemon.appendChild(cardBody);
  // Insertar DIV creado en JS al documento HTML

  // devuelvo div creado
  return cardPokemon;
}

pokemonApi.then(result => {
  return result.json();
}).then(result => {
  arrPokemones = result.pokemon;
  result.pokemon.forEach(element => {
    // Creo el div con la funciónn crearCard, y paso por parametro el objeto element, que contiene la información del pokemon
    const cardPokemon = crearCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}).catch(err => {
  // Mostrar error
  // eslint-disable-next-line no-console
  console.log(err);
});

//funciones para ordenar de forma descendete y ascendente
function ordenarNumDesc(){
   let arrPokemonesNumDesc = arrPokemones;
   arrPokemonesNumDesc.sort((a, b) => {
     if (parseInt(a.num) < parseInt(b.num))
       return 1
     else
       return -1
   })

   dataPokemon.innerHTML = ""
   arrPokemonesNumDesc.forEach(element => {
     const cardPokemon = crearCard(element)
     dataPokemon.appendChild(cardPokemon);
   });
}
function ordenarNumAsc() {
  let arrPokemonesNumAsc = arrPokemones;
  arrPokemonesNumAsc.sort((a, b) => {
    if (parseInt(a.num) > parseInt(b.num))
      return 1
    else
      return -1
  })

  dataPokemon.innerHTML = ""
  arrPokemonesNumAsc.forEach(element => {
    const cardPokemon = crearCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}



/* //prueba filter
window.data = {
  filterData: (dataPokemon, searchPokemon) => {
    const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
    console.log(filterPokemonName);
  },
  sortData: (dataPokemon, sortBy, sortOrder) => {

  },
  computeStats: (dataPokemon) => {
  }
}
*/

/*
//esta es una función de ejemplo
const data = POKEMON.pokemon; //guardo en una constante el arreglo de objetos con los pokemones.
//console.log(data);

// función donde recorreré el arreglo de objetos para acceder a su propiedad name
const nombrePokemones = (data) => {
  //console.log(data);
  let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
  for (let i = 0; i < data.length; i++) {
    nombres.push(data[i].name)
  }
  return nombres; //retorno el arreglo de nombres para que pueda tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}

window.nombrePokemones = nombrePokemones;

*/