const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
   
    try {
        
        let salida  = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++ ) {
            salida += (`${ base } x ${ i } = ${ base * i }\n`);
            consola += (`${ base } x ${ i } ${ '='.red } ${ base * i }\n`);
        }
        
        if ( listar ) {
            console.log('======================='.magenta);
            console.log('    Tabla del:'.bold, base);
            console.log('======================='.magenta);
            console.log( consola );
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
    
        return `Archivo ${ `tabla-${ base }.txt`.underline.cyan }`;
        
    } catch (error) {
        throw error;
    }
        
    // fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {
    //     if ( err ) throw err;
    //     console.log(`Archivo tabla-${ base }.txt creado`);
    // });

}

module.exports = {
    crearArchivo
}
