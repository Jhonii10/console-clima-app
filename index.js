const { menu, pause, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {

    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await menu();
        switch (opt) {
            case 1:
                const cuidad = await leerInput('Cuidad:');
                busquedas.cuidad(cuidad)

                console.log('\nInformacion de la cuidad \n');
                console.log('Cuidad:',   );
                console.log('Latitud:',  );
                console.log('Longitud:', );
                console.log('Temperatura:',);
                console.log('Minima:',);
                console.log('Maxima:',);

                
                
                break;
            case 2:
                busquedas.historial
                break;
        
        }

        await pause();
        
    } while (opt !== 0);
    
}


main();
