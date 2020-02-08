function AnimalKindError(message) {
  this.kind = 'AnimalKindError';
  this.message = message;
}

AnimalKindError.prototype = new Error;

module.exports = {
  AnimalKindError,
};
