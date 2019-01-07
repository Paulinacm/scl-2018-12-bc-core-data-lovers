// AQUI VA LA LOGICA. funciones filtrar, ordenar, calcular
const pokemonApi = fetch('./data/pokemon/pokemon.json');

// Seleccino  el PRIMER DIV que contenga "pokemones_list" en su atributo CLASS, y que encuentre adentro de un div con id="pokemones"
const dataPokemon = document.querySelector("#pokemones .pokemones_list");

// Creo array para guardar los objetos pokemones y no hacer constantes fetch
let arrPokemones = []

function createCard(objPokemon){ // funcion donde creo la card con la info del pokemon
  let cardPokemon = document.createElement("div")  // este div modifica todo texto de  latarjeta
  let cardType = document.createElement("div") // este div, puede modificar toda tarjeta menos el nombre
  let cardNum = document.createElement("div")
  let cardTitle = document.createElement("h6") // este div modifica sol oel Titulo o nombre del pokemon
  let imagePokemon = document.createElement("img") //coloca la imagen en tarjeta


  // Asigno Clase CSS de Bootstrap a DIV, una clase "card" para que tenga la apariencia del componente CARDm, ref https://getbootstrap.com/docs/4.1/components/card/
  // Asigno clase col-1 para que tenga ancho 1 columna, ref https://getbootstrap.com/docs/4.1/layout/grid/
  cardPokemon.classList.add("card", "m-1", "shadow", "center"); //m:margen ebntre cards p:borde dentro de la cards
  // Asigno atributo SRC a Imagen
  
//NUMERO
  cardNum.classList.add("card-num");
  cardNum.innerHTML = "#" + objPokemon.num; 
  cardPokemon.appendChild(cardNum); 

//IMAGEN
  imagePokemon.setAttribute("src", objPokemon.img,);
  // Asigno atributo ALT a Imagen
  // Utilizo valor directo del JSON porque namePokemon es un nodo tipo texto y necesito solo un string. Si utilizo namePokemon en el HTML aparecera [HTML Object]
  imagePokemon.setAttribute("alt", "imagen de " + objPokemon.name);
  // Asigno Clase CSS de Bootstrap para img en card
  imagePokemon.classList.add("card-img-top");
  // Inserto la imagen pokemon al div con clase CSS "card"
  cardPokemon.appendChild(imagePokemon)

//NOMBRE
  // Asigno clase CSS de Bootstrap a Título de card
  cardTitle.classList.add("card-title");
  // Inserto nombre del Pokemon al titulo
  cardTitle.innerHTML = objPokemon.name; //APAREZCA EL NOMBRE(TITULO EN HTML)
  // Inserto "card-title" al div con clase CSS "card" 
  cardPokemon.appendChild(cardTitle); 

//TIPO
  cardType.classList.add("card-type");
  cardType.innerHTML = objPokemon.type; 
  cardPokemon.appendChild(cardType);

  return cardPokemon;
}

pokemonApi.then(result => {
  return result.json();
}).then(result => {
  arrPokemones = result.pokemon;
  arrPokemones.forEach(element => {
    // Creo el div con la funciónn crearCard, y paso por parametro el objeto element, que contiene la información del pokemon
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}).catch(err => {
  // Mostrar error
  // eslint-disable-next-line no-console
  console.log(err);
});






//funciones para ordenar de forma descendete y ascendente
function sortNumDesc(){
   let arrPokemonesNumDesc = arrPokemones;
   arrPokemonesNumDesc.sort((a, b) => {
     if (parseInt(a.num) < parseInt(b.num))
       return 1
     else
       return -1
   })

   dataPokemon.innerHTML = ""
   arrPokemonesNumDesc.forEach(element => {
     const cardPokemon = createCard(element)
     dataPokemon.appendChild(cardPokemon);
   });
}
function sortNumAsc() {
  let arrPokemonesNumAsc = arrPokemones;
  arrPokemonesNumAsc.sort((a, b) => {
    if (parseInt(a.num) > parseInt(b.num))
      return 1
    else
      return -1
  })

  dataPokemon.innerHTML = ""
  arrPokemonesNumAsc.forEach(element => {
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}

//funciones para ordernar de A-Z, y Z-A
function sortNameAz() {
  let arrPokemonesNameAz = arrPokemones;
  arrPokemonesNameAz.sort((a, b) => {
    if (a.name > b.name)
      return 1
    else
      return -1 
  })

  dataPokemon.innerHTML = ""
  arrPokemonesNameAz.forEach(element => {
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}

function sortNameZa() {
  let arrPokemonesNameZa = arrPokemones;
  arrPokemonesNameZa.sort((a, b) => {
    if (a.name < b.name)
      return 1
    else
      return -1
  })

  dataPokemon.innerHTML = ""
  arrPokemonesNameZa.forEach(element => {
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);
  });
}

function filterPokemon(paramFilter){
  arrPokemones.forEach(element => {
    console.log(element)
  });
}
/*
const computeStats = (data, condition) => {
  let avPromedio;
  const obj = arrPokemones.map(element => element.avg_spawns);
  const avgSpawns = obj.reduce((a, b) => a + b);
  const meanSpawns = avgSpawns / obj.length;

  avPromedio = arrPokemones.filter(element => {
    switch (condition) {
      case 1:
        return element.avg_spawns > meanSpawns;
      case 2:
        return element.avg_spawns !== 0 && element.avg_spawns < meanSpawns;
      default:
        return element.avg_spawns === 0;
    }
  });
  return avPromedio;
};


*/
//para estadisticas, contar el numero de pokemon x tipo
/*const cantXType = arrFilterPokemonType.length;
   const percent = ((cantXType / 151) * 100);
   arrPercent.push(percent); 
   */

/*
const stats = (data, condition) => {
  let arrPercent = [];
  for (let i = 0; i < arrPokemones.length; i++) {
    const arrFilterPokemonType = arrPokemones.filter(compare => (compare.type[0] === arrPokemones[i] || compare.type[1] === arrPokemones[i]));
    const cantXType = arrFilterPokemonType.length;
    const percent = ((cantXType / 151) * 100);
    arrPercent.push(cantXType);
  }
  return arrPercent;
};

window.data = {
  stats,
};
*/

//funciones para filtrar por elemento (type)

// const pokemonFire = Pokemon.pokemon.filter ((elemento))

/*
// función que filtra los pokemones
const $filterInput = $('.filtered-pokemon');
$filterInput.keyup(filterPokemons);

function filterPokemons() {
  let searchPokemon = $filterInput.val();
  $('#pokemons-container').empty();
  if ($filterInput.val().trim().length > 0) {
    let filteredPokemons = JSON.parse(localStorage.getItem('data-pokemon')).filter(pokemon => {
      let nameMatch = pokemon.name.indexOf(searchPokemon) >= 0
      return nameMatch
    }).forEach(pokemon => {
      paintPokemonCard(pokemon)
    })
    $('#pokemons-container:empty').html('<p class="h1">Lo sentimos, no encontramos coincidencias <i class="fa fa-frown-o" aria-hidden="true"></i></p>');
  } else {
    $('#pokemons-container').empty();
    JSON.parse(localStorage.getItem('data-pokemon')).forEach(pokemon => {
      paintPokemonCard(pokemon)
    })
  }
}




/*


//prueba filter
window.data = {
  filterData: (dataPokemon, searchPokemon) => {
    const filterPokemonName = dataPokemon.filter(dataPokemon => (dataPokemon.name === searchPokemon));
    console.log(filterPokemonName);
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
