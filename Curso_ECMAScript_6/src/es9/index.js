const obj = {
    names: "Juan",
    age: 23,
    country: "COL",
}

// se añade la opcion de añadir con ... all el resto de datos del objeto y all queda como variable
let {names, age, ...all} = obj

console.log(names, age, all);

const obj2 = {
    names: "Juan",
    age: 23,
    country: "COL",
}

// se añade la opción de usar ... variable para concatenar atributos de un objeto a otro
const obj3 = {
    job: "developer",
    ... obj2
}

console.log(obj3);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("holitas"), 5000)
            : reject(new Error("Erro 404"))
    })
}

// se añade la función .finally para manejar de una mejor manera las promesas en su finalización
helloWorld()
 .then(respo => console.log(respo))
 .catch(erro => console.log(erro))
 .finally(() => setTimeout(() => console.log("finalizó"), 3000) )

//  se añade la funcion regex para dividir por grupos específicos los datos
 const regexData = /([0-9]{2})-([0-9]{2})-([0-9]{4})/
 const fecha = regexData.exec("05-10-2022")
 const day = fecha[1]
 const month = fecha[2]
 const year = fecha[3]

 console.log(`Es el día ${day} del mes ${month} del año ${year}.`);