const fs = require('fs');

let listaporhacer = [];


const guardarDB = (listaporhacer) => {
    let data = JSON.stringify(listaporhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            console.log('error');
        } else {
            console.log('Archivo creado');
        }

    });
}





const cargarDB = () => {

    try {
        listaporhacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {



    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    };


    listaporhacer.push(porhacer);

    guardarDB(listaporhacer);
    return porhacer;


}

const getlistado = () => {
    try {
        cargarDB();

        return listaporhacer;
    } catch (ex) {
        console.log(ex);
    }
}


const actualizarlista = (descripcion, completado = true) => {
    cargarDB();
    //finindex recorre el arreglo hasta encontrar la coincidencia suministrada
    let index = listaporhacer.findIndex(item => item.descripcion === descripcion);
    if (index >= 0) {
        listaporhacer[index].completado = completado;
        guardarDB(listaporhacer);
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listaporhacer.findIndex(item2 => item2.descripcion === descripcion);
    if (index >= 0) {
        listaporhacer.splice(index, 1);
        guardarDB(listaporhacer);
        return true;
    } else {
        return false;
    }
}




module.exports = {
    crear,
    getlistado,
    actualizarlista,
    borrar
}