require('../src/data.js');
describe('dataLover', () => {
  it('is a function', () => {
    expect(typeof dataLover).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


/* ejemplo del trabajo 
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

const ouputOrderNameAZ = [{
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

const ouputOrderNameZA = [{
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

const ouputOrderAsc = [{
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

const ouputOrderDesc = [{
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


const ouput4 = [{
  'id': 4,
  'num': '004',
  'name': 'Charmander',
  'type': ['Fuego'],
  'egg': '2 km',
  'weaknesses': ['Agua', 'Tierra', 'Roca']
}, ];

const ouput5 = [{
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

describe('data.sortData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.sortData).toBe('function');
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera ascendente', () => {
    expect(window.data.sortData(inputOrder, 0, 0)).toEqual(ouputOrderAsc);
  });
  it('Debería retornar un array de objetos con los datos de ID ordenado de manera descendente', () => {
    expect(window.data.sortData(inputOrder, 0, 1)).toEqual(ouputOrderDesc);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la A a la Z', () => {
    expect(window.data.sortData(inputOrderName, 1, 0)).toEqual(ouputOrderNameAZ);
  });
  it('Debería retornar un array de objetos con los nombres de los pokemon ordenado de la Z a la A', () => {
    expect(window.data.sortData(inputOrderName, 1, 1)).toEqual(ouputOrderNameZA);
  });
});

describe('data.filterData', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.filterData).toBe('function');
  });
  it('Debería retornar un array de objetos con los pokemones que sean de tipo Fuego', () => {
    expect(window.data.filterData(input, 'Type', 'Fuego')).toEqual(ouput4);
  });
  it('Debería retornar un array de objetos con los pokemones que se encuentren en Huevos de 2 km', () => {
    expect(window.data.filterData(input, 'Egg', '2 km')).toEqual(ouput5);
  });
});

describe('data.searchByFilter', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.searchByFilter).toBe('function');
  });

  it('Debería retornar un array de objetos con los pokemones que sean de tipo Fuego, si elijo opc Tipo e inputText = Fuego', () => {
    expect(window.data.searchByFilter(ouput5, 'Fuego', 2)).toEqual(ouput4);
  });

  it('Debería retornar un array de objetos con el pokemon, si elijo opc ID y input=4', () => {
    expect(window.data.searchByFilter(ouput5, '004', 0)).toEqual(ouput4);
  });
  it('Debería retornar un array de objetos con el pokemon, si elijo opc Nombre e inputText = Charmander', () => {
    expect(window.data.searchByFilter(ouput5, 'Charmander', 1)).toEqual(ouput4);
  });
  it('Debería retornar un array de objetos con el pokemon, si elijo opc Debilidad e inputText = Agua', () => {
    expect(window.data.searchByFilter(ouput5, 'Agua', 3)).toEqual(ouput4);
  });
});

describe('data.stats', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.stats).toBe('function');
  });
  it('Debería retornar la cantidad de pokemones de tipo Dragon', () => {
    expect(window.data.stats(inputStats, inputStats2)).toEqual([3]);
  });
});
*/