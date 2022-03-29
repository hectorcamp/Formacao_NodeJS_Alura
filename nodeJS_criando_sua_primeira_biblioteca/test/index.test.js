const { it } = require('eslint/lib/rule-tester/rule-tester');
const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: '(https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array de resultados', async () => {
        const resultado = await pegaArquivo('C:\Users\hecto\Desktop\cursos extras\Formação_NodeJS_com_Express\nodeJS_criando_sua_primeira_biblioteca\test\arquivos\texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('Deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('C:\Users\hecto\Desktop\cursos extras\Formação_NodeJS_com_Express\nodeJS_criando_sua_primeira_biblioteca\test\arquivos\texto1_semLinks.md')
        expect(resultado).toBe('não há links');
    })
})
