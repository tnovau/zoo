function AnimalKindError(message) {
  this.name = 'AnimalKindError';
  this.message = message;
}

AnimalKindError.prototype = new Error;

module.exports = {
  AnimalKindError,
};
