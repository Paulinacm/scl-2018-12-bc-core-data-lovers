//ACA VA EL DOM, la interaccion, se llama al data.js
/* ejemplo de clases
// const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

// evento click del botón
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click

  for (let i = 0; i < resultadoNombres.length; i++) {
    document.getElementById('root').innerHTML += '<p>' + resultadoNombres[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }
})
*/

/*
const resultDataImg = dataImg(data);
const resultDataName = dataName(data);

for (let i = 0; i < resultDataImg.length; i++) {
  document.getElementById('root').innerHTML += '<button id="btn-' + resultDataName[i] + '"><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
}
document.getElementById('btn-fire').addEventListener('click', (event) => {
      event.preventDefault();
      const condition = 'Fire';
      document.getElementById('root').innerHTML = " ";
      const resultFilterData = filterData(data, condition);
      const resultDataImg = dataImg(resultFilterData);
      const resultDataName = dataName(resultFilterData);
      for (let i = 0; i < resultDataImg.length; i++) {
        document.getElementById('root').innerHTML += '<button><img src="' + resultDataImg[i] + '"><p>' + resultDataName[i] + '</p></button>';
      }
  */

  
  