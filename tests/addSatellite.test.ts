import { addSatellite, Planet, planets } from '../src/index.ts';

describe('addSatellite', () => {
  beforeEach(() => {
    planets.length = 0;
  });

  it('deve adicionar um satélite a um planeta corretamente', () => {
    const planet: Planet = {
      name: 'PlanetaTeste',
      coordinates: [0, 0, 0, 0],
      situation: 'Habitado',
      atmosphere: 1000,
      gravity: 9.81,
      weightCalc: (mass: number) => (mass / 1000) * 9.81,
      satellitesSituation: 'Dessincronizados',
      satellites: [],
    };

    planets.push(planet);

    addSatellite('SateliteTeste', planet);

    setTimeout(() => {
        expect(planet.satellites.length).toBe(1);
        expect(planet.satellites[0]).toBe('SateliteTeste');
        expect(planet.satellitesSituation).toBe('Dessincronizados');
    }, 2000);
  });
});
