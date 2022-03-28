const { it } = require('eslint/lib/rule-tester/rule-tester');
const pegaArquivo = require('../index');

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array de resultados')
})
//parei aqui