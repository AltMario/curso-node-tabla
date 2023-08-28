
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');


console.clear();
//const base = 3;
//console.log(process.argv);

//console.log('base: yargs', argv.b);

crearArchivo(argv.b, argv.l, argv.h)
    .then(NombreArchivo => console.log(NombreArchivo,'creado'))
   .catch(err => console.log(err))
  