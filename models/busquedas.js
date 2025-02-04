const fs = require('fs');
const axios = require("axios");
const { log } = require('console');
require('dotenv').config()

class Busquedas {

    historial = [];
    dbPath = './db/db.json';

    constructor(){
        this.leerDB();
    }

    async cuidad(lugar = ''){
        
            const {cuidad} = lugar

            const apiKey = process.env.MAPS_KEY;

            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cuidad}`;


            const { data } = await axios.get(url);

            
            return data;
        
    }

    async agregarHistorial ( cuidad = ''){

        if (this.historial.includes(cuidad)) {
            return
        }

        this.historial.unshift(cuidad);
        this.guardarDB();

    }

    guardarDB (){
        fs.writeFileSync(this.dbPath, JSON.stringify({"historial":this.historial}))
    }

    leerDB (){

        if (!fs.existsSync(this.dbPath)) {
            return
        }else{

            
            const info = fs.readFileSync(this.dbPath,{
                encoding: 'utf-8',
            });
            
            const data = JSON.parse(info);
            
            this.historial = data.historial
        }
        
    }
}

module.exports = Busquedas;