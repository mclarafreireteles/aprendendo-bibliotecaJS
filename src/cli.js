import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './teste.js';

const caminho = process.argv;

pegaArquivo(caminho[2]);
// console.log(caminho); // retorna um array c o caminho absoluto ate o executavel do node e ate esse codigo

async function processaTexto(argumentos){
    if (fs.linkSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links: '), resultado);
    } else if (fs.linkSync(caminho).isDirectory()) {
        
    }
}

processaTexto(caminho);
