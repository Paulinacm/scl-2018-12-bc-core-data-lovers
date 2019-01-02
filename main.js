// leer data de Pokemon
const pokemonApi = fetch('./data/pokemon/pokemon.json')

// Seleccino  el PRIMER DIV que contenga "pokemones_list" en su atributo CLASS, y que encuentre adentro de un div con id="pokemones"
const dataPokemon = document.querySelector("#pokemones .pokemones_list")

pokemonApi.then(result => {
  return result.json();
}).then(result => {
  let arrElementos = [];
  result.pokemon.forEach(element => {
//creamos todas las variables a utilizar
    let cardPokemon = document.createElement("div")
    let cardBody = document.createElement("div")
    let cardTitle = document.createElement("h5")
    let imagePokemon = document.createElement("img")
    let namePokemon = document.createTextNode(element.name)
    let elementPokemon = document.createTextNode(element.type)
    let numPokemon = document.createTextNode(element.num)
    let txtBody = ""

    // Asigno Clase CSS de Bootstrap a DIV
    // Asigno clase "card" para que tenga la apariencia del componente CARDm, ref https://getbootstrap.com/docs/4.1/components/card/
    // Asigno clase col-1 para que tenga ancho 1 columna, ref https://getbootstrap.com/docs/4.1/layout/grid/
    cardPokemon.classList.add("card", "col-2")


    // Asigno atributo SRC a Imagen
    imagePokemon.setAttribute("src", element.img)
    // Asigno atributo ALT a Imagen
    // Utilizo valor directo del JSON porque namePokemon es un nodo tipo texto y necesito solo un string. Si utilizo namePokemon en el HTML aparecera [HTML Object]
    imagePokemon.setAttribute("alt", "imagen de " + element.name)
    // Asigno Clase CSS de Bootstrap para img en card
    imagePokemon.classList.add("card-img-top")
    // Inserto la imagen pokemon al div con clase CSS "card"
    cardPokemon.appendChild(imagePokemon)

    // Asigno clase CSS de Bootstrap a Título de card
    cardTitle.classList.add("card-title")
    // Inserto nombre del Pokemon al titulo
    cardTitle.appendChild(namePokemon)
    // Inserto "card-title" al div con clase CSS "card" 
    cardPokemon.appendChild(cardTitle)

    // Creo texto que insertaré en el body de la card
    // Escribo HTML en el string, para insertarlo como HTML más adelante
    txtBody = '<p class="card-text">Pokemon tipo: <strong>' + element.type + '</strong></p><br/><p class="card-text">Número: <strong>' + element.num + '</strong></p>'

    // Asigno clase bootstrap para "card-body"
    cardBody.classList.add("card-body")
    // Inserto contenido HTML(variable txtBody) antes que termine el html de cardPokemon
    // No uso appendChild porque txtBody no es un elemento tipo nodo, es un string
    // Insert insertAdjacentHTML permite insertar un string que contiene HTML en una ubicación específica, en este caso antes de que termine el elemento cardPokemon
    cardBody.insertAdjacentHTML("beforeend", txtBody);


    // Inserto "card-title" al div con clase CSS "card" 
    cardPokemon.appendChild(cardBody)

    // Insertar DIV creado en JS al documento HTML
    dataPokemon.appendChild(cardPokemon)

  });
}).catch(err => {
  // Mostrar error
  // eslint-disable-next-line no-console
  console.log(err)
});


/*
// elementos que usaremos
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

//a nuestro form le damos el evento submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getPokemon();
})

//en la funcion getPokemon haremos nuestras peticiones
function getPokemon() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.onload = addPokemon;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addPokemon() {
  const data = JSON.parse(this.responseText);
  //const response = data.response;
  console.log(data);

  //console.log(article);
  let imgPokemon = document.createElement('img');
  imgPokemon.className = 'img-responsive';
  imgPokemon.style.width = '10em';
  let picture = data.sprites.front_default;
  imgPokemon.src = picture;
  responseContainer.appendChild(imgPokemon);


  let names = document.createElement('li');
  let namesPokemon = data.name;
  console.log(namesPokemon);
  //names.appendChild(namesPokemon);
  names.innerText = 'name: ' + namesPokemon;
  responseContainer.appendChild(names);

  let li = document.createElement('li');
  const pokemon = [];
  for (let i = 0; i < data.abilities.length; i++) {
    pokemon.push(data.abilities[i].ability.name);
    console.log(data.abilities);
  }
  console.log(pokemon);
  li.innerText = 'habilidades: ' + pokemon;
  responseContainer.appendChild(li);

  let type = document.createElement('li');
  let typesPokemon = data.types[0].type.name;
  console.log(typesPokemon);
  type.innerText = 'type: ' + typesPokemon;
  responseContainer.appendChild(type);

  let experience = document.createElement('li');
  let experiencePokemon = data.base_experience;
  console.log(experiencePokemon);
  experience.innerText = 'experience: ' + experiencePokemon;
  responseContainer.appendChild(experience);

  responseContainer.style.display = 'block';
}
*/
