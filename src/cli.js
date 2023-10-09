import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './teste.js';

const caminho = process.argv;



async function processaTexto(argumentos){
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links: '), resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDeArquivo) => {
            const lista =  await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            console.log(`${caminho}/${nomeDeArquivo}`)
            console.log(lista);
        })
        console.log(arquivos);
    }
}

processaTexto(caminho);
