const { AnimalDoesntExistsError } = require('./animalDoesntExists.error');
const { AnimalKindError } = require('./animalKind.error');
const { Zoo } = require('./zoo');
const { ZooFactory } = require('./zoo.factory');

module.exports = {
  AnimalDoesntExistsError,
  AnimalKindError,
  Zoo,
  ZooFactory,
};
