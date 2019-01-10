// AQUI VA LA LOGICA. funciones filtrar, ordenar

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

// Función que se ejecuta al cambiar filtro u orden
function drawPokemones() {
  // Creo un array vacío, para recibir los array ordenados por las funciones
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

window.data = {
  sortNumAsc,
  sortNumDesc,
  sortNameAz,
  sortNameZa,
  filterPokemon,
  drawPokemones,
};
