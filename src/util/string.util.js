const { STRING_SEPARATOR } = require('../constants');

const isString = str => typeof str === 'string';

/**
 * @param {string} sentence
 */
const splitSentence = sentence => sentence.split(STRING_SEPARATOR);

module.exports = {
  isString,
  splitSentence
};
