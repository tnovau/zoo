function AnimalDoesntExistsError(message) {
  this.name = 'AnimalDoesntExistsError';
  this.message = message;
}

AnimalDoesntExistsError.prototype = new Error;

module.exports = {
  AnimalDoesntExistsError,
};
