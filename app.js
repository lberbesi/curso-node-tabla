

//const { argv } = require('process');

const{crearArchivo}=require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//console.log(process.argv);
//onsole.log(argv);
//console.log('base: yargs',argv.b);
//const [,,arg3='base=5'] = process.argv;
//const[,base=5]=arg3.split('=');
//console.log(base);

//const base=4;



crearArchivo(argv.b,argv.l,argv.h)
   .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
   .catch(err=>console.log(err));




