global.window = global;
global.assert = require('chai').assert;
//global.chai = require('chai'); // para q este disponible chai para todo el proyecto
require('../src/data');
require('./data.spec');
