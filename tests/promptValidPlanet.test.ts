import {promptValidPlanet, planets, Planet} from '../src/index.ts';

describe('Testes para promptValidPlanet', () => {
  beforeEach(() => {
    planets.length = 0;
  });
  
  it('Deve chamar a função de retorno de chamada com o planeta "Terra"', () => {
    const terra: Planet = {
      name: 'Terra',
      coordinates: [0, 0, 0, 0],
      situation: 'Habitado',
      atmosphere: 1000,
      gravity: 9.81,
      weightCalc: jest.fn(),
      satellitesSituation: 'Dessicronizados',
      satellites: [],
    };

    planets.push(terra);

    const mockReadline = require('readline-sync');
    mockReadline.question = jest.fn(() => 'Terra');

    const callback = jest.fn();

    promptValidPlanet(callback);

    expect(callback).toHaveBeenCalledWith(terra);
  });
});

