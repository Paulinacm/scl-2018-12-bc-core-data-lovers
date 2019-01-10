require('../src/data.js');
describe('dataLover', () => {
  it('is a function', () => {
    expect(typeof dataLover).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


/* el ejemplo del trabajo 

require('../src/data.js');

const input = [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': ['Hierba', 'Veneno'],
    'egg': '2 km',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'type': ['Hierba', 'Veneno'],
    'egg': 'Not in Eggs',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': ['Hierba', 'Veneno'],
    'egg': 'Not in Eggs',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'type': ['Fuego'],
    'egg': '2 km',
    'weaknesses': ['Agua', 'Tierra', 'Roca']
  }
];

const POKEMON = [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
    'next_evolution': [{
      'num': '002',
      'name': 'Ivysaur'
    }, {
      'num': '003',
      'name': 'Venusaur'
    }]
  },

  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/002.png',
    'prev_evolution': {
      'num': '001',
      'name': 'Bulbasaur'
    },
    'next_evolution': {
      'num': '003',
      'name': 'Venusaur'
    }
  },

  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'img': 'http://www.serebii.net/pokemongo/pokemon/003.png',
    'prev_evolution': [{
      'num': '001',
      'name': 'Bulbasaur'
    }, {
      'num': '002',
      'name': 'Ivysaur'
    }]
  },

  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'img': 'http://www.serebii.net/pokemongo/pokemon/004.png',
    'next_evolution': [{
      'num': '005',
      'name': 'Charmeleon'
    }, {
      'num': '006',
      'name': 'Charizard'
    }]
  },
];

const outputFilterNum = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'img': 'http://www.serebii.net/pokemongo/pokemon/001.png',
  'next_evolution': [{
    'num': '002',
    'name': 'Ivysaur'
  }, {
    'num': '003',
    'name': 'Venusaur'
  }]
}];


const inputOrderName = [{
    'id': 63,
    'num': '063',
    'name': 'Abra',
    'type': ['Psiquico'],
    'egg': '5 km',
    'weaknesses': ['Bicho', 'Fantasma', 'Dark']
  },
  {
    'id': 69,
    'num': '069',
    'name': 'Bellsprout',
    'type': ['Hierba', 'Veneno'],
    'egg': '5 km',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'type': ['Bicho'],
    'egg': '2 km',
    'weaknesses': ['Fuego', 'Volador', 'Roca']
  },
  {
    'id': 87,
    'num': '087',
    'name': 'Dewgong',
    'type': ['Agua', 'Hielo'],
    'egg': 'Not in Eggs',
    'weaknesses': ['Electrico', 'Hierba', 'Lucha', 'Roca']
  }
];

const outputOrderNameAZ = [{
    'id': 63,
    'num': '063',
    'name': 'Abra',
    'type': ['Psiquico'],
    'egg': '5 km',
    'weaknesses': ['Bicho', 'Fantasma', 'Dark']
  },
  {
    'id': 69,
    'num': '069',
    'name': 'Bellsprout',
    'type': ['Hierba', 'Veneno'],
    'egg': '5 km',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'type': ['Bicho'],
    'egg': '2 km',
    'weaknesses': ['Fuego', 'Volador', 'Roca']
  },
  {
    'id': 87,
    'num': '087',
    'name': 'Dewgong',
    'type': ['Agua', 'Hielo'],
    'egg': 'Not in Eggs',
    'weaknesses': ['Electrico', 'Hierba', 'Lucha', 'Roca']
  }
];

const outputOrderNameZA = [{
    'id': 87,
    'num': '087',
    'name': 'Dewgong',
    'type': ['Agua', 'Hielo'],
    'egg': 'Not in Eggs',
    'weaknesses': ['Electrico', 'Hierba', 'Lucha', 'Roca']
  },
  {
    'id': 10,
    'num': '010',
    'name': 'Caterpie',
    'type': ['Bicho'],
    'egg': '2 km',
    'weaknesses': ['Fuego', 'Volador', 'Roca']
  },
  {
    'id': 69,
    'num': '069',
    'name': 'Bellsprout',
    'type': ['Hierba', 'Veneno'],
    'egg': '5 km',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 63,
    'num': '063',
    'name': 'Abra',
    'type': ['Psiquico'],
    'egg': '5 km',
    'weaknesses': ['Bicho', 'Fantasma', 'Dark']
  }
];

const inputOrder = [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur'
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur'
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur'
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander'
  }
];

const outputOrderAsc = [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur'
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur'
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur'
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander'
  }
];

const outputOrderDesc = [{
    'id': 4,
    'num': '004',
    'name': 'Charmander'
  },
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur'
  },
  {
    'id': 2,
    'num': '002',
    'name': 'Ivysaur'
  },
  {
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur'
  },
];


const output4 = [{
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'type': ['Fuego'],
  'egg': '2 km',
  'weaknesses': ['Agua', 'Tierra', 'Roca']
}, ];

const output5 = [{
    'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': ['Hierba', 'Veneno'],
    'egg': '2 km',
    'weaknesses': ['Fuego', 'Hielo', 'Volador', 'Psiquico']
  },
  {
    'id': 4,
    'num': '004',
    'name': 'Charmander',
    'type': ['Fuego'],
    'egg': '2 km',
    'weaknesses': ['Agua', 'Tierra', 'Roca']
  },
];

const inputStats = [{
    'id': 147,
    'num': '147',
    'name': 'Dratini',
    'type': ['Dragon']
  },
  {
    'id': 148,
    'num': '148',
    'name': 'Dragonair',
    'type': ['Dragon']
  },
  {
    'id': 149,
    'num': '149',
    'name': 'Dragonite',
    'type': ['Dragon', 'Volador']
  },
];

const inputStats2 = ['Dragon'];

describe('data', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('data.numFilter', () => {
  it('is a function', () => {
    expect(typeof window.data.numFilter).toBe('function');
  });

  it('num = null Debería retornar todo', () => {
    expect(window.data.numFilter(POKEMON, '')).toEqual(POKEMON);
  });
  it('Debería retornar a Bulbasaur si input = 001', () => {
    expect(window.data.numFilter(POKEMON, '001')).toEqual(outputFilterNum);
  });
});


describe('data.sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.sortData).toBe('function');
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera ascendente', () => {
    expect(window.data.sortData(inputOrder, 0, 0)).toEqual(outputOrderAsc);
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera descendente', () => {
    expect(window.data.sortData(inputOrder, 0, 1)).toEqual(outputOrderDesc);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la A a la Z', () => {
    expect(window.data.sortData(inputOrderName, 1, 0)).toEqual(outputOrderNameAZ);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la Z a la A', () => {
    expect(window.data.sortData(inputOrderName, 1, 1)).toEqual(outputOrderNameZA);
  });
});

describe('data.filterData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.filterData).toBe('function');
  });
  it('Debería retornar un array de objetos con los pokemones que sean de tipo Fuego', () => {
    expect(window.data.filterData(input, 'Type', 'Fuego')).toEqual(output4);
  });
  it('Debería retornar un array de objetos con los pokemones que se encuentren en Huevos de 2 km', () => {
    expect(window.data.filterData(input, 'Egg', '2 km')).toEqual(output5);
  });
});

describe('data.searchByFilter', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.searchByFilter).toBe('function');
  });

  it('Debería retornar a Charmander, si busco por ID input = 004', () => {
    expect(window.data.searchByFilter(output5, '004', 0)).toEqual(output4);
  });
  it('Debería retornar un array de objetos con el pokemon Charmander, si busco por Nombre input = Charmander', () => {
    expect(window.data.searchByFilter(output5, 'Charmander', 1)).toEqual(output4);
  });
  it('Deberia retornar las pre evoluciones, input = 003', () => {
    expect(window.data.searchByFilter(POKEMON, '003', 4)).toEqual(outputPreEvolution);
  });
  it('Deberia retornar las siguientes evoluciones, input = 001', () => {
    expect(window.data.searchByFilter(POKEMON, '001', 5)).toEqual(outputNextEvolution);
  });
});

describe('data.stats', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.stats).toBe('function');
  });
  it('Debería retornar el % de pokemones de tipo Dragon', () => {
    expect(window.data.stats(inputStats, inputStats2)).toEqual([1.9867549668874174]);
  });
});

*/