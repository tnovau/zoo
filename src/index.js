const { ZooFactory } = require('./features/zoo');
const animals = require('../config/animals.json');
const app = require('./app');

app.run(animals);