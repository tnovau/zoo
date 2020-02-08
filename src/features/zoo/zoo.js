const { AnimalDoesntExistsError } = require('./animalDoesntExists.error');
const { AnimalKindError } = require('./animalKind.error');
const { isString } = require('../../util/string.util');

/**
 * @param {{
 *  [key: string]: ReturnType<import('../animal/animal')['Animal']>
 * }} animals
 */
const Zoo = animals => {
  /** @param {string} kind */
  const validateAnimalKind = kind => {
    if (isString(kind)) return;
    throw new AnimalKindError('Animal kind should be a string in this zoo.');
  }

  const validateAnimalExist = animal => {
    if (!!animal) return;
    throw new AnimalDoesntExistsError("Animal doesn't exist in the zoo.");
  }

  /** @param {string} kind */
  const findAnimalByKind = kind => {
    const animal = animals[kind];
    validateAnimalExist(animal);
    return animal;
  }

  /**
   * @param {string} kind
   * @param {string} sentence
   */
  const findAnimalByKindAndMakeItSpeak = (kind, sentence) => {
    validateAnimalKind(kind);
    return findAnimalByKind(kind).speak(sentence);
  }

  return {
    findAnimalByKindAndMakeItSpeak,
  };
};

module.exports = {
  Zoo,
};
