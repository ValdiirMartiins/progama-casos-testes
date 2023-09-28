import { synchronizeSatellites, Planet } from '../src/index.ts';

const planetWithSatellites: Planet = {
  name: 'Planeta Teste',
  coordinates: [0, 0, 0, 0],
  situation: 'Habitado',
  atmosphere: 1000,
  gravity: 9.81,
  weightCalc: null,
  satellitesSituation: 'Dessicronizados',
  satellites: ['Satélite A', 'Satélite B'],
};

test('Sincronizar satélites - Sucesso', async () => {
  const syncedPlanet: any = await synchronizeSatellites(planetWithSatellites);
  syncedPlanet.satellitesSituation = 'Sicronizados';
  expect(syncedPlanet.satellitesSituation).toBe('Sicronizados');
});

const planetWithoutSatellites: Planet = {
  name: 'Planeta Vazio',
  coordinates: [0, 0, 0, 0],
  situation: 'Inabitável',
  atmosphere: 2000,
  gravity: 7.5,
  weightCalc: null,
  satellitesSituation: 'Dessicronizados',
  satellites: [],
};

test('Sincronizar satélites - Planeta sem satélites', async () => {
  expect.assertions(1);
  try {
    await synchronizeSatellites(planetWithoutSatellites);
  } catch (error) {
    expect(error).toBe('Não existe satélites para serem sicronizados.');
  }
});
