const argv = require('./config/yargs').argv;

const porhacer = require('./porhacer/por-hacer');
const colors = require('colors');


let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porhacer.getlistado();

        for (let tarea of listado) {
            console.log(colors.green('===============POR HACER============'));
            console.log(tarea.descripcion);
            console.log('Estado: ' + tarea.completado);
            console.log(colors.green('===================================='));
        }

        break;

    case 'actualiza':
        let actua = porhacer.actualizarlista(argv.descripcion, argv.completado);
        console.log(actua);
        break;


    case 'borrar':
        let borra = porhacer.borrar(argv.descripcion);
        console.log(borra);
        break;

    default:
        console.log('Ningun comando seleccionado');
        break;
}