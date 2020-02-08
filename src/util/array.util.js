/**
 * @param {any[]} array
 * @param {any} value
 */
const intersperseValueInArray = (array, value) =>
  [].concat(...array.map(element => [element, value]));

module.exports = {
  intersperseValueInArray
};
