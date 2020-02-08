const { Zoo } = require('./zoo');
const { AnimalFactory } = require('../animal');
const userCommunicationUtil = require('../../util/user.communication.util');

/**
 * @param {Array<import('../../../types/animal.config').AnimalConfig> animalConfigs
 */
const ZooFactory = animalConfigs => {
  /**
   * @param {import('../../../types/animal.config').AnimalConfig} current
   */
  const tryGetAnimal = current => {
    try {
      return AnimalFactory(current);
    }
    catch (error) {
      userCommunicationUtil.notifyUser(error.message);
    }
  }

  const zooAnimals = animalConfigs
    .reduce((animals, current) => {
      const animal = tryGetAnimal(current);

      const invalidAnimalOrAlreadyExists = !animal || animals[animal.kind];
      if (invalidAnimalOrAlreadyExists)
        return animals;
      return {...animals, [animal.kind]: animal };
    }, {});

  return Zoo(zooAnimals);
}

module.exports = {
  ZooFactory,
};
