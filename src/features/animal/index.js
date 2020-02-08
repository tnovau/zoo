const { Animal } = require('./animal');
const { AnimalFactory } = require('./animal.factory');
const { AnimalConfigError } = require('./animalConfig.error');
const { AnimalSentenceError } = require('./animalSentence.error');

module.exports = {
  Animal,
  AnimalFactory,
  AnimalConfigError,
  AnimalSentenceError,
};
