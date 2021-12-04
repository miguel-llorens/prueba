const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
/*const base = 5;
crearArchivo(base);*/

console.log(process.argv)
console.log(argv)

console.log('base: yargs', argv.base)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombrearchivo => console.log(nombrearchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
