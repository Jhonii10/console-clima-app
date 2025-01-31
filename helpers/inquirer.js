const inquirer = require('inquirer').default;
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar cuidad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} salir`
            },
        ]
    }
]


const menu = async () => {
    console.clear()
    console.log('========================'.green);
    console.log('Selecione una opcion'.green);
    console.log('========================'.green);

    const {option} = await inquirer.prompt(questions);

    return option;
}


const pause = async() => {

    const question = [
        {
            type: 'input',
            name: 'pause',
            message: `Presione ${'ENTER'.green} para continuar`

        }
    ]

    console.log('\n');
    
    await inquirer.prompt(question);
}


const leerInput = async (message)=>{

    const pregunta = [
        {
            type: 'input',
            name: 'cuidad',
            message: message,
            validate: (value) => {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }           
        }
    ]


    const res = await inquirer.prompt(pregunta);

    return res

}

module.exports = {
    menu,
    pause,
    leerInput

}