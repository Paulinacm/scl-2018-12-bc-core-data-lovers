











/* ejemplo de clases
// const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

// evento click del botón
const inputSearchText = document.getElementById('input-search-text');
const btnSearch = document.getElementById('btn-search');
const pokemonCardContainer = document.getElementById('pokemon-container');
const filtersByCategories = document.getElementById('pokemon-filters');
const sortBy = document.getElementById('pokemon-order');
const eggPokemon = document.getElementById('egg-filter');
const typePokemon = document.getElementById('type-filter');
const typeData = window.POKEMON.pokemon;
const arrkeys = Object.values(window.POKEMON.pokemon);


const filterInArray = (inputArray) => {
  return inputArray.map(element => {
    return `<label class="badge-${element}">${element}</label>`;
  }).join(' ');
};

const filterEvolution = (data, arrayEvolution) => {
  let stringLabelSrc = [];
  let saveObjectPreEvolution = [];
  let saveObjectNextEvolution = [];

  saveObjectPreEvolution = window.data.searchByFilter(data, arrayEvolution, 4);
  if (saveObjectPreEvolution) {
    saveObjectPreEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`
        <div class="poke-evolution col p-2">
        <img src=${ele.img} alt=${ele.name}/>
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  saveObjectNextEvolution = window.data.searchByFilter(data, arrayEvolution, 5);
  if (saveObjectNextEvolution) {
    saveObjectNextEvolution.map(element => {
      element.map(ele => {
        stringLabelSrc.push(`
        <div class="poke-evolution col p-2">
        <img src=${ele.img} alt={name} />
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  return stringLabelSrc.join('');
};

const functionfilter = (pokemones) => {
  let data = [];
  let newGrill = [];
  pokemonCardContainer.value = '';


  for (let i = 0; i < pokemones.length; i++)
    data.push(Object.assign({}, pokemones[i]));

  for (let i = 0; i < data.length; i++) {
    newGrill.push(`

    <article class="col-md-3 col-sm-4 col-xs-6">
        <a href="#modal${i}">
        <div class="card-link col-md-12 col-sm-12 col-xs-12">
              <div class="article-details">
                <img class="post-image " src="${data[i].img}" />
                  <h3 class="post-title">${data[i].name}</h3>
                  <p class="post-description">#${data[i].num} </p>
                  <p class="type-labels">${filterInArray(data[i].type)}</p>
              </div>
            </div>
            </a>
          </article>
        </a>
        <section id="modal${i}" class="modal-window">
        <section class="modal-container">
        <a href="#" class="arrow fixed-top text-primary m-2 ml-md-4 px-2 py-1"><</a>
          <section class="text-center">
          <h2 class="title-modal text-center mt-2">${data[i].name}</h2>
          <figure class="mb-2">
          <img src="${data[i].img}" alt="${data[i].name}">
          </figure>
          <div class="col-md-6 text-center text-md-center">
          <article class="mb-2">
          <h5> Número en la pokedex: </h5>
          <span class="text-size"> # ${data[i].num}</span>
          </article>
          <article class="mb-2">
          <h5 class="mb-0">Tipo:</h5>
          <p> ${filterInArray(data[i].type)}</p>
          </article>
          <article class="mb-2">
          <h5>Nombre de caramelos:</h5>
          <span class="text-size">${data[i].candy}</span>
          </article>
          <article class="mb-2">
          <h5 class="mb-0">Debilidades:</h5>
          <p> ${filterInArray(data[i].weaknesses)}</p>
          </article>
          </section>
          <section class="text-center">
          <h5>Evoluciones</h5>
          <div class="col p-2">
          <div>${filterEvolution(window.POKEMON.pokemon, data[i].num)}
          </div>
          </div>
          </div>
          </section>
          </section>
          </section>`);
  }
  pokemonCardContainer.innerHTML = newGrill.join('');
};
functionfilter(arrkeys);


const functionListenFilterOrder = () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  const listenFiltersByCategories = filtersByCategories.options[filtersByCategories.selectedIndex].value;
  const arrayInputFilter = window.data.searchByFilter(arrkeys, inputSearchText.value, parseInt(listenFiltersByCategories[0]));
  functionfilter(window.data.sortData(arrayInputFilter, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
};

document.getElementById('button-percentage').addEventListener('click', () => {
  const arrTypePokemon = ['Agua', 'Bicho', 'Dragon', 'Electrico', 'Fantasma', 'Fuego', 'Hielo', 'Lucha', 'Normal', 'Hierba', 'Psiquico', 'Roca', 'Tierra', 'Veneno', 'Volador'];
  const arrPromedio2 = window.data.stats(typeData, arrTypePokemon);


  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Tipo de Pokémon', '% del total', {
        role: 'style'
      }],
      ['Agua', arrPromedio2[0], 'color: #414449'],
      ['Hierba', arrPromedio2[1], 'color: #558720'],
      ['Tierra', arrPromedio2[2], 'color: #671502'],
      ['Hielo', arrPromedio2[3], 'color: #6c72f3'],
      ['Bicho', arrPromedio2[4], 'color: #16d45d'],
      ['Psíquico', arrPromedio2[5], 'color: #af5ed9'],
      ['Fantasma', arrPromedio2[6], 'color: #612baa'],
      ['Dragón', arrPromedio2[7], 'color: #612baa'],
      ['Veneno', arrPromedio2[8], 'color: #4d215e'],
      ['Lucha', arrPromedio2[9], 'color: #fc1f1f'],
      ['Fuego', arrPromedio2[10], 'color: #ff8400'],
      ['Volador', arrPromedio2[11], 'color: #45a4a3'],
      ['Roca', arrPromedio2[12], 'color: #a2def4'],
      ['Eléctrico', arrPromedio2[13], 'color: #faf329'],
      ['Normal', arrPromedio2[14], 'color: #a8aaae']
    ]);

    const options = {
      title: 'Porcentaje de Pokemones por Tipo'
    };

    const chart = new google.visualization.PieChart(document.getElementById('pokemon-container'));
    document.getElementById('pokemon-container').classList.add('min-heigth-table');
    chart.draw(data, options);
  }
});

typePokemon.addEventListener('change', () => {
  const typeofFilter = 'Type';
  const arrTemp = window.data.filterData(typeData, typeofFilter, typePokemon.value);
  functionfilter(window.data.filterData(arrTemp, typeofFilter, typePokemon.value));
});

eggPokemon.addEventListener('change', () => {
  const typeofFilter = 'Egg';
  const arrTemp = window.data.filterData(typeData, typeofFilter, eggPokemon.value);
  functionfilter(window.data.filterData(arrTemp, 'Type', typePokemon.value));
});


const functionMain = () => {
  functionListenFilterOrder();
  filtersByCategories.addEventListener('change', functionListenFilterOrder);
  sortBy.addEventListener('change', functionListenFilterOrder);
  btnSearch.addEventListener('click', functionListenFilterOrder);
};

functionMain();