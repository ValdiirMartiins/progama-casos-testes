import { updateSituation, Planet, PlanetSituation } from '../src/index.ts';

const mockPlanet: Planet = {
  name: 'Planeta de Teste',
  coordinates: [0, 0, 0, 0],
  situation: 'Habitável',
  atmosphere: 1000,
  gravity: 9.81,
  weightCalc: jest.fn(),
  satellitesSituation: 'Dessicronizados',
  satellites: [],
};

describe('updateSituation', () => {
  beforeEach(() => {
    mockPlanet.situation = 'Habitável';
    mockPlanet.satellitesSituation = 'Dessicronizados';
  });

  it('deve atualizar a situação do planeta para "Habitado"', () => {
    const newSituation: PlanetSituation = 'Habitado';
    updateSituation(newSituation, mockPlanet);
    expect(mockPlanet.situation).toBe(newSituation);
  });

  it('deve atualizar a situação do planeta para "Habitável"', () => {
    const newSituation: PlanetSituation = 'Habitável';
    updateSituation(newSituation, mockPlanet);
    expect(mockPlanet.situation).toBe(newSituation);
  });

  it('deve atualizar a situação do planeta para "Inabitável"', () => {
    const newSituation: PlanetSituation = 'Inabitável';
    updateSituation(newSituation, mockPlanet);
    expect(mockPlanet.situation).toBe(newSituation);
  });

  it('deve atualizar a situação do planeta para "Inexplorado"', () => {
    const newSituation: PlanetSituation = 'Inexplorado';
    updateSituation(newSituation, mockPlanet);
    expect(mockPlanet.situation).toBe(newSituation);
  });
});
