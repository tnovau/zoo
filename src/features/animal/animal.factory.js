const { Animal } = require('./animal');
const { AnimalConfigError } = require('./animalConfig.error');
const { isString } = require('../../util/string.util');
const { ANIMAL_CONFIG_KIND, ANIMAL_CONFIG_SOUND } = require('./animal.constants');

/**
 * @param {import('../../../types/animal.config').AnimalConfig} animal
 */
const AnimalFactory = (animal) => {
  const { kind, sound } = animal;
  if (!isString(kind)) throw new AnimalConfigError(ANIMAL_CONFIG_KIND);
  if (!isString(sound)) throw new AnimalConfigError(ANIMAL_CONFIG_SOUND);

  return Animal(animal);
};

module.exports = {
  AnimalFactory,
};
