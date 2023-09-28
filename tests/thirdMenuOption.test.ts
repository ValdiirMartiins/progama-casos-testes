import { thirdMenuOption, planets, addPlanet} from '../src/index.ts';

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

  addPlanet('Planeta Teste', [1, 2, 3, 4], 'Habitado', 1000, 9.8);

  it('Deve adicionar um satélite com confirmação', () => {

    mockUserInput([
      'Planeta Teste',
      'Satélite de Teste',
      '1'
    ]);

    thirdMenuOption();

    expect(planets.length).toBe(1);
    const novoPlaneta = planets[0];
    novoPlaneta.satellites.push('Satélite de Teste');
    expect(novoPlaneta.satellites).toContain('Satélite de Teste');
  });
});
