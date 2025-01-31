const axios = require("axios");
require('dotenv').config()

class Busquedas {

    historial = []

    constructor(){
        this.historial = []
    }

    async cuidad(lugar = ''){
        
            const {cuidad} = lugar

            const apiKey = process.env.MAPS_KEY;

            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cuidad}`;


            const { data } = await axios.get(url);

            
            return data;
        
    } 
}

module.exports = Busquedas;