const { ANIMAL_CONFIG_KIND } = require('./animal.constants');

const baseMessage = 'is required to be an string to create an animal in this zoo'

const kindErrorMessage = `kind ${baseMessage}`;
const soundErrorMessage = `sound ${baseMessage}`;

/** @param {'kind' | 'sound'} message */
function AnimalConfigError(message) {
  this.kind = 'AnimalConfigError';
  this.message = message === ANIMAL_CONFIG_KIND
    ? kindErrorMessage
    : soundErrorMessage;
}

AnimalConfigError.prototype = new Error;
AnimalConfigError.kindErrorMessage = kindErrorMessage;
AnimalConfigError.soundErrorMessage = soundErrorMessage;

module.exports = {
  AnimalConfigError,
};
