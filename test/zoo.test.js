const { should } = require('chai');
const { AnimalDoesntExistsError, AnimalKindError, Zoo } = require('../src/features/zoo');

should();

describe('Zoo', () => {
  const kind = 'lion';
  const zoo = Zoo({
    [kind]: {
      kind,
      sound: 'roar',
      speak: function() { return this.sound }
    },
  });

  it('should allow us to find an animal by kind and make it speak', () => {
    zoo.findAnimalByKindAndMakeItSpeak(kind, "I'm a lion").should.be.a('string');
  });

  it('should validate that the animal exists', () => {
    try {
      zoo.findAnimalByKindAndMakeItSpeak('tiger', 'Something');
    } catch (error) {
      error.should.instanceOf(AnimalDoesntExistsError);
    }
  });

  it('should validate that animal kind is a string', () => {
    try {
      zoo.findAnimalByKindAndMakeItSpeak(24, 'Something');
    } catch (error) {
      error.should.instanceOf(AnimalKindError);
    }
  });
});