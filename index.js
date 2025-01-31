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
                const {location, current} =   await busquedas.cuidad(cuidad);

                console.log('\nInformacion de la cuidad \n');
                console.log('Cuidad:', location.name);
                console.log('Departamento:', location.region);
                console.log('Pais:', location.country); 
                console.log('Latitud:', location.lat );
                console.log('Longitud:', location.lon );
                console.log('Temperatura:',current.temp_c);

                break;
            case 2:
                busquedas.historial
                break;
        
        }

        await pause();
        
    } while (opt !== 0);
    
}


main();
