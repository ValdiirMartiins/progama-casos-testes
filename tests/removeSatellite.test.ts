import { removeSatellite, Planet, planets } from '../src/index.ts';

describe('removeSatellite', () => {
  beforeEach(() => {
    planets.length = 0;
  });

  it('deve remover um satélite de um planeta com sucesso', () => {
    const planet: Planet = {
      name: 'Planeta de Teste',
      coordinates: [0, 0, 0, 0],
      situation: 'Habitado',
      atmosphere: 1000,
      gravity: 9.81,
      weightCalc: null,
      satellitesSituation: 'Dessicronizados',
      satellites: ['Satélite 1', 'Satélite 2'],
    };

    planets.push(planet);

    removeSatellite('Satélite 1', planet);

    expect(planet.satellites).not.toContain('Satélite 1');
    expect(planet.satellites.length).toBe(1);
  });

  it('deve lidar com a remoção de um satélite inexistente', () => {
    const planet: Planet = {
      name: 'Planeta de Teste',
      coordinates: [0, 0, 0, 0],
      situation: 'Habitado',
      atmosphere: 1000,
      gravity: 9.81,
      weightCalc: null,
      satellitesSituation: 'Dessicronizados',
      satellites: [],
    };

    planets.push(planet);

    removeSatellite('Satélite Inexistente', planet);

    expect(planet.satellites.length).toBe(0);
  });
});
