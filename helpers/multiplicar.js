const fs= require('fs');
const colors = require('colors');
const crearArchivo=(base=5,listar, hasta)=>{
    console.clear();
    console.log('==============');
    console.log('Tabla del '.blue,`${base}`.green);
    console.log('==============');

    
    let salida='';
    for (let i=0;i<=hasta;i++) {
    
    //let resultado =  5*i;
    //console.log('5 x',i,'=',resultado);
    //console.log(`${base} x ${i} = ${base*i}`);
    salida += `${base}`.red+ ` x `.yellow+ `${i} = ${base*i}\n`
    }
    if (listar) {
        console.log(salida);
    }

    let resultado;
    const promesa=new Promise((resolve,reject)=>{
        try {
             fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
             resultado = true;
        } catch {
             resultado = false;
        };
    
    (resultado) ? resolve(`tabla-${base}.txt`) : reject(`tabla-${base}.txt no creado`)
    
    //console.log(`tabla-${base}.txt creado`);
    });
    return promesa;
}

module.exports={
    crearArchivo 
}