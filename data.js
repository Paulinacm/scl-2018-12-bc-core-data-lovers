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

window.data = {
  sortNumAsc,
  sortNumDesc,
  sortNameAz,
  sortNameZa,
  filterPokemon,
};
