const { should } = require('chai');
const { AnimalFactory, AnimalConfigError } = require('../src/features/animal');

should();

describe('AnimalFactory', () => {
  /**
   * @type {import('../types/animal.config').AnimalConfig}
   */
  const validConfig = {
    kind: 'generic',
    sound: 'splash',
  };

  it('should fail if the kind is not an string', () => {
    try {
      AnimalFactory({ ...validConfig, kind: 123 });
    } catch (error) {
      error.should.instanceOf(AnimalConfigError);
      error.message.should.equal(AnimalConfigError.kindErrorMessage);
    }
  });

  it('should fail if the sound is not an string', () => {
    try {
      AnimalFactory({ ...validConfig, sound: 123 });
    } catch (error) {
      error.should.instanceOf(AnimalConfigError);
      error.message.should.equal(AnimalConfigError.soundErrorMessage);
    }
  });

  it('should create an Animal if it is valid', () => {
    const animal = AnimalFactory(validConfig);
    animal.kind.should.equal(validConfig.kind);
    animal.sound.should.equal(validConfig.sound);
    animal.speak.should.be.a('function');
  });
});
