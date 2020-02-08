# Zoo

## Useful commands

### Run app
`yarn start`

### Install packages
`yarn`

### Run tests
`yarn test`

### Get coverage
`yarn test:coverage`

## Notes:
- Util's function are separated between type.
- Using mocha, chai, sinon and nyc to test the code.
- module's specific constants should be inside the feature module's folder.
- App's shared constants should be inside the constants file.
- Using jsDoc for types documentation.
- Types files(*.d.ts) should be in the "types" folder.
- The zoo's animals should be configured by the "animals.json" file that is in the config folder.