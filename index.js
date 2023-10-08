import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function pegaArquivo(ca)


pegaArquivo('./arquivos/texto.md');