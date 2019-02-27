const argv = require('yargs').
command('crear', 'Crea un elemento por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Tarea por hacer'
    }
})

.command('actualiza', 'actualiza un elemento', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Actualiza la tarea'
    },

    completado: {
        demand: true,
        alias: 'c',
        desc: 'Completa  la tarea'
    }
})

.command('borrar', 'borra un elemento', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'borra la tarea'
    },
}).help().argv;


module.exports = {
    argv
}