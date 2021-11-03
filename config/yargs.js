const { number, options } = require('yargs');
const argv=require('yargs')
      .option('b',{
         alias:'base',
         type: 'number',
         demandOption: true,
         describe: 'Es la base de la tabla de multiplicar'
      })
      .option('l',{
         alias:'listar',
         type: 'boolean',
         demandOption: false,
         default: false,
         describe: 'Muestra la base en consola'
      })
      .option('h',{
        alias:'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Muestra hasta donde va la tabla'})
      .check((argv,options)=>{
         if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
         } else if(isNaN(argv.h)) {
            throw 'El hasta tiene que ser un numero';
         } else {
            return true;
         };
       
       

         //console.log('yargs',argv);
      })
      .argv;

module.exports=argv;      