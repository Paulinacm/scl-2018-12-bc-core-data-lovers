// AQUI VA LA LOGICA. funciones filtrar, ordenar, calcular
//ACA VA EL DOM, la interaccion, se llama al data.js
const pokemonApi = fetch('./data/pokemon/pokemon.json');

// Seleccino  el PRIMER DIV que contenga "pokemones_list" en su atributo CLASS, y que encuentre adentro de un div con id="pokemones"
const dataPokemon = document.querySelector("#pokemones .pokemones_list");

// Creo array para guardar los objetos pokemones y no hacer constantes fetch
let arrPokemones = []

function createCard(objPokemon) { // funcion donde creo la card con la info del pokemon
  let cardPokemon = document.createElement("div") // este div modifica todo texto de  latarjeta
  let cardType = document.createElement("div") // este div, puede modificar toda tarjeta menos el nombre
  let cardNum = document.createElement("div")
  let cardTitle = document.createElement("h6") // este div modifica sol oel Titulo o nombre del pokemon
  let imagePokemon = document.createElement("img") //coloca la imagen en tarjeta

  //TARJETA
  // Asigno Clase CSS de Bootstrap a DIV, una clase "card" para que tenga la apariencia del componente CARDm, ref https://getbootstrap.com/docs/4.1/components/card/
  // Asigno clase col-1 para que tenga ancho 1 columna, ref https://getbootstrap.com/docs/4.1/layout/grid/
  cardPokemon.classList.add("card", "m-3", "p-3"); //m:margen ebntre cards p:borde dentro de la cards
  // Asigno atributo SRC a Imagen

  //NUMERO
  cardNum.classList.add("card-num");
  cardNum.innerHTML = "#" + objPokemon.num;
  cardPokemon.appendChild(cardNum);

  //IMAGEN
  imagePokemon.setAttribute("src", objPokemon.img);
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
  createGoogleChart(arrPokemones)
}).catch(err => {
  // Mostrar error
  // eslint-disable-next-line no-console
  console.log(err);
});

//funciones para ordenar de forma descendete y ascendente
// Se factorizan todas las funciones para que devuelven el array en el orden deseado
function sortNumDesc(arrayPokemones) {
  let arrPokemonesNumDesc = arrayPokemones;
  arrPokemonesNumDesc = arrPokemonesNumDesc.sort((a, b) => {
    if (parseInt(a.num) < parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrPokemonesNumDesc
}

function sortNumAsc(arrayPokemones) {
  let arrPokemonesNumAsc = arrayPokemones;
  arrPokemonesNumAsc = arrPokemonesNumAsc.sort((a, b) => {
    if (parseInt(a.num) > parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrPokemonesNumAsc
}

//funciones para ordernar de A-Z, y Z-A
function sortNameAz(arrayPokemones) {
  let arrPokemonesNameAz = arrayPokemones;
  arrPokemonesNameAz = arrPokemonesNameAz.sort((a, b) => {
    if (a.name > b.name)
      return 1
    else
      return -1
  })
  return arrPokemonesNameAz
}

function sortNameZa(arrayPokemones) {
  let arrPokemonesNameZa = arrayPokemones;
  arrPokemonesNameZa = arrPokemonesNameZa.sort((a, b) => {
    if (a.name < b.name)
      return 1
    else
      return -1
  })
  return arrPokemonesNameZa
}

//FILTRAR POR TYPE
// paso array inicial y tipo de filtro
// devuelve un nuevo array solo con pokemones filtrados
function filterPokemon(arrayPokemones, paramFilter) {
  let arrFiltrado = []
  arrayPokemones.forEach(element => {
    if (element.type.includes(paramFilter)) {
      arrFiltrado.push(element)
    }
  })
  return arrFiltrado
}

function createGoogleChart(arrayPokemones) {
  let filterType = document.getElementById("filterType").value
  // Copie los JS desde https://developers.google.com/chart/interactive/docs/quick_start
  // Despues automatice el conteo de lementos y asigne nuevos valores al chart
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']

  });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    let data = new google.visualization.DataTable();
    let type1Elem = 0
    let type2Elem = 0
    //para eliminar let rowsData = []
    arrayPokemones.forEach(element => {
      if (element.type.length === 1) {
        type1Elem++
      } else if (element.type.length === 2) {
        type2Elem++
      } 
    });
    data.addColumn('string', 'Tipo');
    data.addColumn('number', 'Cantidad');
    data.addRows([
      ['Pertenece únicamente a 1 tipo de pokemon', type1Elem],
      ['Pertenece a 2 tipos de pokemon', type2Elem],
    ]);

    if (filterType == "") {
      filterType = " generales"
    } else {
      filterType = " para Pokemones tipo " + filterType
    }
    // Set chart options
    let options = {
      'legend': 'top',
      'title': 'Poke estadísticas' + filterType,
      'width': 300,
      'height': 500,
      'chartArea': {
        left: "5%",
        bottom: 0,
        width: "90%"
      }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}

// Función que se ejecuta al cambiar filtro u orden
function drawPokemones() {
  // Creo un array vacío, que más adelante utilizaré para recibir los arra ordenados por las funciones
  let arrPokemonesDraw = []
  // obtengo que opción de orden esta seleccionada
  let optSort = document.getElementById("sort").value
  // obtengo que opción de filtro esta seleccionada
  let optFilter = document.getElementById("filterType").value

  // Otengo array ordenado para cada tipo de filtro
  switch (optSort) {
    case "nameaz":
      arrPokemonesDraw = sortNameAz(arrPokemones)
      break;
    case "nameza":
      arrPokemonesDraw = sortNameZa(arrPokemones)
      break;
    case "ascending":
      arrPokemonesDraw = sortNumAsc(arrPokemones)
      break;
    case "descending":
      arrPokemonesDraw = sortNumDesc(arrPokemones)
      break;
    default:
      arrPokemonesDraw = arrPokemones;
      break;
  }

  if (optFilter === "") {
    // si no hay filtro seleccionado, utilizo array original de pokemones
    arrPokemonesDraw = arrPokemones
  } else {
    // Si hay filtro seleccionado, utilizo la función para filtrar el array ya ordenado
    arrPokemonesDraw = filterPokemon(arrPokemonesDraw, optFilter)
  }


  dataPokemon.innerHTML = ""
  arrPokemonesDraw.forEach(element => {
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);
  });

  createGoogleChart(arrPokemonesDraw)
}

document.getElementById("filterType").addEventListener('change', drawPokemones)
document.getElementById("sort").addEventListener('change', drawPokemones)
