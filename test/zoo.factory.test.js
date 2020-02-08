const { should } = require('chai');
const sinon = require('sinon');
const userCommunicationUtil = require('../src/util/user.communication.util');
const { ZooFactory } = require('../src/features/zoo');

should();

const lion = {
  "kind": "lion",
  "sound": "roar"
};

/** @type {Array<import('../types/animal.config').AnimalConfig> */
const animalConfig = [
  lion,
  {
    "kind": "tiger",
    "sound": "grrr"
  },
  {
    "kind": "lion",
    "sound": "other"
  },
  {
    "kind": 12,
    "sound": 'generic'
  }
];

describe('ZooFactory', () => {
  /** @type {import('sinon').SinonStub} */
  let notifyUserStub;

  before(() => {
    notifyUserStub = sinon.stub(userCommunicationUtil, 'notifyUser');
  })

  after(() => {
    notifyUserStub.restore();
  });

  it('should build the zoo with its animals', () => {
    const zoo = ZooFactory(animalConfig);
    const lionSound = zoo.findAnimalByKindAndMakeItSpeak(lion.kind, "I'm a lion");

    lionSound.should.contains(lion.sound);
    notifyUserStub.callCount.should.equal(1);
  });
});