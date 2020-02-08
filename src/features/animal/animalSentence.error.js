function AnimalSentenceError(message) {
  this.kind = 'AnimalSentenceError';
  this.message = message;
}

AnimalSentenceError.prototype = new Error;

module.exports = {
  AnimalSentenceError,
};
