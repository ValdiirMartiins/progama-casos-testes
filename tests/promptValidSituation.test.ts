const readline = require('readline-sync');
import { promptValidSituation } from '../src/index.ts';

describe('promptValidSituation', () => {
  let originalQuestion;

  beforeAll(() => {
    originalQuestion = readline.question;
  });

  beforeEach(() => {
    readline.question = jest.fn();
  });

  afterEach(() => {
    readline.question.mockRestore();
  });

  afterAll(() => {
    readline.question = originalQuestion;
  });

  it('deve retornar "Habitado" para entrada 1', () => {
    readline.question.mockReturnValueOnce('1');
    
    const result = promptValidSituation();
    expect(result).toBe('Habitado');
  });

  it('deve retornar "Habitável" para entrada 2', () => {
    readline.question.mockReturnValueOnce('2');

    const result = promptValidSituation();
    expect(result).toBe('Habitável');
  });

  it('deve retornar "Inabitável" para entrada 3', () => {
    readline.question.mockReturnValueOnce('3');

    const result = promptValidSituation();
    expect(result).toBe('Inabitável');
  });

  it('deve retornar "Inexplorado" para entrada 4', () => {
    readline.question.mockReturnValueOnce('4');

    const result = promptValidSituation();
    expect(result).toBe('Inexplorado');
  });
});