import { fifthMenuOption, planets } from '../src/index.ts';

const consoleLogSpy = jest.spyOn(console, 'log');

describe('Teste de sucesso para fifthMenuOption', () => {
    afterEach(() => {
        planets.length = 0;
    });

    it('Deve listar os planetas registrados', () => {
        planets.push({
            name: 'Planeta 1',
            coordinates: [1, 2, 3, 4],
            situation: 'Habitado',
            atmosphere: 100,
            gravity: 9.81,
            weightCalc: jest.fn(),
            satellitesSituation: 'Dessicronizados',
            satellites: ['Satélite 1', 'Satélite 2'],
        });
    
        planets.push({
            name: 'Planeta 2',
            coordinates: [5, 6, 7, 8],
            situation: 'Habitável',
            atmosphere: 200,
            gravity: 9.8,
            weightCalc: jest.fn(),
            satellitesSituation: 'Dessicronizados',
            satellites: [],
        });

        fifthMenuOption();

        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Nome: Planeta 1'));
        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Nome: Planeta 2'));
    });
});
