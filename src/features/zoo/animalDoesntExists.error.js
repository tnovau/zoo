function AnimalDoesntExistsError(message) {
  this.kind = 'AnimalDoesntExistsError';
  this.message = message;
}

AnimalDoesntExistsError.prototype = new Error;

module.exports = {
  AnimalDoesntExistsError,
};
