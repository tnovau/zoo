const { should } = require('chai');
const { Animal, AnimalSentenceError } = require('../src/features/animal');

should();

describe('Animal', () => {
  const genericAninaml = Animal({
    kind: 'generic',
    sound: 'crash'
  });

  it('should make a sound by default', () => {
    genericAninaml.speak().should.equal(genericAninaml.sound);
  });

  it('should validate that the sentence is an string', () => {
    try {
      genericAninaml.speak(24)
    } catch (error) {
      error.should.instanceOf(AnimalSentenceError)
    }
  });

  describe('Lion example', () => {
    const lion = Animal({
      kind: 'lion',
      sound: 'roar'
    });

    it('should sounds like a lion', () => {
      lion.speak("I'm a lion").should.equal(`I'm ${lion.sound} a ${lion.sound} lion ${lion.sound}`);
    });
  });

  describe('Tiger example', () => {
    const tiger = Animal({
      kind: 'tiger',
      sound: 'grrr'
    });

    it('should sound like a tigers', () => {
      tiger.speak('Lions suck').should.equal(`Lions ${tiger.sound} suck ${tiger.sound}`);
    });
  });
});