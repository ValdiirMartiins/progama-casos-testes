import { findPlanet, Planet, planets } from '../src/index.ts';

const mockPlanets: Planet[] = [
  {
    name: 'Terra',
    coordinates: [0, 0, 0, 0],
    situation: 'Habitado',
    atmosphere: 100,
    gravity: 9.81,
    weightCalc: jest.fn(),
    satellitesSituation: 'Dessincronizados',
    satellites: ['Lua'],
  },
  {
    name: 'Marte',
    coordinates: [1, 1, 1, 1],
    situation: 'Inabitável',
    atmosphere: 10,
    gravity: 3.71,
    weightCalc: jest.fn(),
    satellitesSituation: 'Dessincronizados',
    satellites: [],
  },
];

beforeEach(() => {
  planets.length = 0;
  planets.push(...mockPlanets);
});

test('Encontrar um planeta existente pelo nome', () => {
  const planetName = 'Terra';
  const foundPlanet = findPlanet(planetName);
  
  expect(foundPlanet).toEqual(mockPlanets[0]);
});

test('Não encontrar um planeta inexistente pelo nome', () => {
  const planetName = 'Júpiter';
  const foundPlanet = findPlanet(planetName);
  
  expect(foundPlanet).toBe(false);
});
