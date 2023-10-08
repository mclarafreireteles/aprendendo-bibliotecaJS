import chalk from 'chalk';
import pegaArquivo from './teste.js';

const caminho = process.argv;
pegaArquivo(caminho[2]);
// console.log(caminho); // retorna um array c o caminho absoluto ate o executavel do node e ate esse codigo

async function processaTexto(caminho){
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links: '), resultado);
}

processaTexto(caminho);
