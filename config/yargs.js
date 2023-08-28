const argv = require('yargs')
                .option('b',{
                 alias:'base',
                 type: 'number',
                 demandOption:true,
                 describe:'Es la base de la tabla de multiplicar'   
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    demandOption:true,
                    default:false,
                    describe:'Muestra la tabla en consola' 
                   })
                   .option('h',{
                    alias:'hast',
                    type: 'number',
                    default:10,
                    describe:'hasta donde quieres la tabla' 
                   })
                .check((argv, options)=>{
                console.log('yargs', argv)
                if(isNaN(argv.b))
                {
                    throw 'la base tiene q ser un numero'
                }
                return true;
                })
                .argv;

module.exports = argv;