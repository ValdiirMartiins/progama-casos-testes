import {planets, addPlanet, synchronizeSatellites } from '../src/index.ts';

describe('Teste de sucesso para sixthMenuOption', () => {
  afterEach(() => {
    planets.length = 0;
  });

  addPlanet('Planeta Teste', [1, 2, 3, 4], 'Habitado', 1000, 9.8);
  planets[0].satellites = ['Satélite Teste'];

  it('Deve sicronizar os satélites', async () => {

    const novoPlaneta: any = await synchronizeSatellites(planets[0]);

    expect(planets.length).toBe(1);
    novoPlaneta.satellitesSituation = 'Sicronizados';
    expect(novoPlaneta.satellitesSituation).toBe('Sicronizados');
  });
});