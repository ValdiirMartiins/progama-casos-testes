import { seventhMenuOption, planets, addPlanet } from '../src/index.ts';

const consoleLogSpy = jest.spyOn(console, 'log');

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

describe('Teste de sucesso para seventhMenuOption', () => {
  afterEach(() => {
    planets.length = 0;
  });

  addPlanet('Planeta Teste', [1, 2, 3, 4], 'Habitado', 1000, 9.8);

  it('Deve calcular a massa com base na gravidade do planta', () => {
    mockUserInput([
      'Planeta Teste',
      '600'
    ]);

    seventhMenuOption();

    expect(planets.length).toBe(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('No planeta'));
  });
});