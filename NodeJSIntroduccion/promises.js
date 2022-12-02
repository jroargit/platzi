function hola(nombre){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 2000);
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Hasta luego, ' + nombre);
            resolve(nombre);
        }, 3000);
    })
}
function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`${nombre} dice: Me gusta jugar pokemon`);
            resolve(nombres);
            reject('Fallo en la matrix');
        }, 3000);
    })
}

//...

hola('Juan')
.then( hablar('Juan') )
.then( adios('Juan') )
.then(() => {
    console.log('Terminando proceso');
})
.catch( error => {
    console.error(`Error: ${error}`);
});