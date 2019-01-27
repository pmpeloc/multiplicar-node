const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// const fs = require('express');
// const fs = require('./fs');

// let base = '8';

// console.log(process.argv);

// let argv2 = process.argv;
// console.log(argv.base);
// console.log('Límite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// console.log(multiplicar);

// console.log(module);