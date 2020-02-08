const { should } = require('chai');
const sinon = require('sinon');
const userCommunicationUtil = require('../src/util/user.communication.util');
const app = require('../src/app');

/** @type {Array<import('../types/animal.config').AnimalConfig> */
const animalConfig = [
  {
    "kind": "lion",
    "sound": "roar"
  },
  {
    "kind": "tiger",
    "sound": "grrr"
  },
];

should();

describe('App', () => {
  /** @type {import('sinon').SinonStub} */
  let notifyUserStub;

  before(() => {
    notifyUserStub = sinon.stub(userCommunicationUtil, 'notifyUser');
  })

  after(() => {
    notifyUserStub.restore();
  });

  it('should run properly', () => {
    app.run(animalConfig);
    notifyUserStub.callCount.should.equal(5);
  });
});