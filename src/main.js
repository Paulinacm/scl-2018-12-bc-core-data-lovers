let pokemonApi = fetch('./data/pokemon/pokemon.json')

let dataPokemon = document.getElementById("pokemones")

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
    arrElementos = [...new Set(arrElementos)]
    arrElementos.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }

        return 0;

    })

    return arrElementos;
    */

/*
.then(result => {
    if (result.length > 0) {
        let btnToolbar = document.createElement("div"),
        btnToolbarGrp = document.createElement("div");
        btnToolbar.classList.add("btn-toolbar","mb-3")
        btnToolbar.setAttribute("role","toolbar")
        btnToolbar.setAttribute("aria-label","Filtrar traumatólogos por centro")
        btnToolbarGrp.classList.add("btn-group","mr-2")
        btnToolbarGrp.setAttribute("role","group")
        btnToolbarGrp.setAttribute("aria-label","Centros deportivos")
        
        let allfltCentro = document.createElement("button");
            allfltCentro.classList.add("btn","active","btn-secondary","btn-filtro-todos")
            allfltCentro.setAttribute("type","button")
            allfltCentro.appendChild(document.createTextNode("Todos"))
            btnToolbarGrp.appendChild(allfltCentro)
            allfltCentro.addEventListener('click',function (e) {
                e.preventDefault()
                const arrMed = medicosTraum.querySelectorAll(".schema-medico");
                arrMed.forEach(element => {
                    element.classList.remove("d-none")
                });
                btnToolbarGrp.querySelectorAll("button").forEach(element => {
                    element.classList.remove("active")
                });
                this.classList.add("active")
                $("#collapse_traumatologos").collapse('show');
            })

        result.forEach(currentItem => {
            let fltCentro = document.createElement("button");
            fltCentro.classList.add("btn","btn-secondary","btn-filtro")
            fltCentro.setAttribute("type","button")
            fltCentro.appendChild(document.createTextNode(currentItem))

            fltCentro.addEventListener('click',function (e) {
                e.preventDefault();
                    const arrMed = medicosTraum.querySelectorAll(".schema-medico");
                    arrMed.forEach(element => {
                        try {
                            if (element.dataset.centro.split(",").includes(this.innerText.toLowerCase())) {
                                element.classList.remove("d-none")
                            } else {
                                element.classList.add("d-none")
                            }
                        } catch (error) {
                            element.classList.add("d-none")
                        }
                    });
                
                btnToolbarGrp.querySelectorAll("button").forEach(element => {
                    element.classList.remove("active")
                });
                this.classList.add("active")

                $("#collapse_traumatologos").collapse('show');
            })
            
            btnToolbarGrp.appendChild(fltCentro);
        })

        

        btnToolbar.appendChild(btnToolbarGrp)        
        medicosTraum.insertAdjacentElement("beforebegin",btnToolbar)

    }
}).catch(err => {
    console.log(err)
});

*/

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