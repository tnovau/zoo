const userCommunicationUtil = require('./util/user.communication.util');
const { ZooFactory } = require('./features/zoo')

const app = {
  /**
   * @param {Array<import('../types/animal.config').AnimalConfig>} animalsConfig
   */
  run: animalsConfig => {
    const { notifyUser } = userCommunicationUtil;

    zoo = ZooFactory(animalsConfig);

    notifyUser('lion says: ');
    notifyUser(zoo.findAnimalByKindAndMakeItSpeak('lion', "I'm a lion"));
    notifyUser('');
    notifyUser('tiger says: ');
    notifyUser(zoo.findAnimalByKindAndMakeItSpeak('tiger', 'Lions suck'));
  },
};

module.exports = app;