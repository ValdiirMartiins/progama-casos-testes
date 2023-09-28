import { secondMenuOption, planets, Planet, PlanetSituation } from '../src/index.ts';

const mockUserInput = (inputs: string[]) => {
  const originalReadline = require('readline-sync');
  const inputQueue = inputs.slice();
  
  jest.spyOn(originalReadline, 'question').mockImplementation(() => {
    const input = inputQueue.shift();
    if (input === undefined) {
      throw new Error('Ran out of mock user inputs.');
    }
    return input;
  });
};

function addPlanetToDatabase(planet: Planet) {
  planets.push(planet);
}

describe('Teste de sucesso para secondMenuOption', () => {
  beforeEach(() => {
    planets.length = 0;
  });

  it('Deve atualizar a situação de um planeta', () => {
    const planetaExemplo: Planet = {
      name: 'Planeta Exemplo',
      coordinates: [1, 2, 3, 4],
      situation: 'Habitado',
      atmosphere: 1000,
      gravity: 9.8,
      weightCalc: null,
      satellitesSituation: 'Dessicronizados',
      satellites: [],
    };

    addPlanetToDatabase(planetaExemplo);

    mockUserInput([
      'Planeta Exemplo',
      '2'
    ]);

    secondMenuOption();

    const planetaAtualizado = planets[0];
    expect(planetaAtualizado.situation).toBe('Habitável' as PlanetSituation);
  });
});
