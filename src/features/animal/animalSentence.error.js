function AnimalSentenceError(message) {
  this.name = 'AnimalSentenceError';
  this.message = message;
}

AnimalSentenceError.prototype = new Error;

module.exports = {
  AnimalSentenceError,
};
