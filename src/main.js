// constantes que usaremos
const pokemonApi = fetch('./data/pokemon/pokemon.json')
const dataPokemon = document.getElementById("pokemones")

pokemonApi.then(result => {
  return result.json();
}).then(result => {
  let arrElementos = [];
  result.pokemon.forEach(element => {
    let divPokemon = document.createElement("div")
    let namePokemon = document.createTextNode(element.name)
    divPokemon.appendChild(namePokemon)
    dataPokemon.appendChild(divPokemon)
   let imagePokemon = document.createElement("img")
   imagePokemon.setAttribute("src",element.img)
   divPokemon.appendChild(imagePokemon)
   dataPokemon.appendChild(divPokemon)
   let elementPokemon = document.createTextNode(element.type)
   divPokemon.appendChild(elementPokemon)
   dataPokemon.appendChild(divPokemon)
   let numPokemon = document.createTextNode(element.num)
   divPokemon.appendChild(numPokemon)
   dataPokemon.appendChild(divPokemon)
   
  });
}).catch(err => {
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