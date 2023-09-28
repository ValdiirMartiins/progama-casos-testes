import { firstMenuOption, planets } from '../src/index.ts';

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

describe('Teste de sucesso para firstMenuOption', () => {
  afterEach(() => {
    planets.length = 0;
  });

  it('Deve registrar um novo planeta', () => {
    mockUserInput([
      'Novo Planeta',
      '1',
      '2',
      '3',
      '4',
      '1',
      '1000',
      '9.8',
      '1' 
    ]);

    firstMenuOption();

    expect(planets.length).toBe(1);
    const novoPlaneta = planets[0];
    expect(novoPlaneta.name).toBe('Novo Planeta');
    expect(novoPlaneta.coordinates).toEqual([1, 2, 3, 4]);
    expect(novoPlaneta.situation).toBe('Habitado');
    expect(novoPlaneta.atmosphere).toBe(1000);
    expect(novoPlaneta.gravity).toBe(9.8);
  });
});
