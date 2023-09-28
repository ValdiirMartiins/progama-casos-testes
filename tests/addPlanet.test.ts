import { addPlanet, PlanetCoordinates, PlanetSituation, planets } from '../src/index.ts';

describe('addPlanet', () => {
  beforeEach(() => {
    planets.length = 0;
  });

  it('deve adicionar um novo planeta ao array de planetas', () => {
    const nome = 'Planeta de Teste';
    const coordenadas: PlanetCoordinates = [1, 2, 3, 4];
    const situacao: PlanetSituation = 'Habitado';
    const atmosfera = 1000;
    const gravidade = 9.8;

    addPlanet(nome, coordenadas, situacao, atmosfera, gravidade);

    expect(planets.length).toBe(1);
    const planetaAdicionado = planets[0];

    expect(planetaAdicionado.name).toBe(nome);
    expect(planetaAdicionado.coordinates).toEqual(coordenadas);
    expect(planetaAdicionado.situation).toBe(situacao);
    expect(planetaAdicionado.atmosphere).toBe(atmosfera);
    expect(planetaAdicionado.gravity).toBe(gravidade);
  });
});
