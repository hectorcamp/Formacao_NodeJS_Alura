const chalk = require('chalk');
const pegarArquivo = require('./index');

const caminho = process.argv;

function processaTexto(caminhoDeArquivo) {
    const resultado = pegarArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);