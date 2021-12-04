const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 1) => {

    try {
        let salida = '';
        for (var i = 1; i <= hasta; i++) {

            resuelt = base * i;

            salida += ` ${base} * ${i} = ${resuelt}\n`
            // console.log(` 5 * ${i} = ${resuelt}`)
        }
        if (listar == true) {
            console.log(salida.blue);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return 'tabla-${base}.txt';

    } catch (err) {

        throw err;
    }


}

module.exports = {

    crearArchivo
}