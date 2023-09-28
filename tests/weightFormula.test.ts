import { weightFormula } from '../src/index.ts';

describe('weightFormula', () => {
  it('calcula o peso corretamente quando a massa é 0', () => {
    const gravidade = 9.8;
    const calcularPeso = weightFormula(gravidade);
    const massa = 0;
    const resultado = calcularPeso(massa);
    expect(resultado).toBe(0);
  });

  it('calcula o peso corretamente quando a massa é de 1000 gramas', () => {
    const gravidade = 9.8; 
    const calcularPeso = weightFormula(gravidade);
    const massa = 1000; 
    const resultado = calcularPeso(massa);
    expect(resultado).toBe(9.8); 
  });

  it('calcula o peso corretamente com um valor de gravidade diferente', () => {
    const gravidade = 1.625;
    const calcularPeso = weightFormula(gravidade);
    const massa = 500; 
    const resultado = calcularPeso(massa);
    expect(resultado).toBe(0.8125); 
  });
});

