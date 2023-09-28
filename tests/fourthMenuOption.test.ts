import { fourthMenuOption, planets, addPlanet } from '../src/index.ts';

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

describe('Teste de sucesso para fourthMenuOption', () => {
  afterEach(() => {
    planets.length = 0;
  });

  addPlanet('Planeta Teste', [1, 2, 3, 4], 'Habitado', 1000, 9.8);
  planets[0].satellites = ['Satélite Teste'];

  it('deve remover um satélite de um planeta', () => {
    mockUserInput([
      'Planeta Teste',
      'Satélite Teste'
    ]);

    fourthMenuOption();

    expect(planets.length).toBe(1);
    const novoPlaneta = planets[0];
    expect(novoPlaneta.satellites).not.toContain('Satélite Teste');
  });
});
