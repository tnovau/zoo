const { STRING_SEPARATOR } = require('../../constants');
const { isString, splitSentence } = require('../../util/string.util');
const { intersperseValueInArray } = require('../../util/array.util');
const { AnimalSentenceError } = require('./animalSentence.error');

/**
 * @param {import('../../../types/animal.config').AnimalConfig} param0
 */
const Animal = ({ kind, sound }) => {
  /** @param {string} sentence */
  const validateSentenceIsString = sentence => {
    if (isString(sentence)) return;

    throw new AnimalSentenceError('sentence should be an string');
  }

  /** @param {string} sentence */
  const speak = sentence => {
    if (!sentence) return sound;
    validateSentenceIsString(sentence);

    return intersperseValueInArray(splitSentence(sentence), sound)
      .join(STRING_SEPARATOR);
  }

  return { kind, sound, speak };
};

module.exports = {
  Animal,
};
