// Old way

let name1 = 'Juan'
let age = 23

obj1 = {
    name: name1,
    age: age
}

console.log(obj1);

// ECMAScript 6

obj2 = {
    name1,
    age
}

console.log(obj2);

// Old way
let nombres = [
    {name1: 'Adrianita', age: 45},
    {name1: 'Paola', age: 45}
]

let listOfNames = nombres.map(function(item){
    console.log(`${item.name1} tiene ${item.age} años`)
})

// ECMAScript arroy function
let listOfNames2 = nombres.map(item => console.log(`${item.name1} tiene ${item.age} años`))
const listOfNames3 = (nombres, age, country ) => {
    // código
}
const listOfNames4 = nombres =>{
    // código
}
const square = num => num * num

// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('pasa')
        }
        else{
            reject('falla')
        }
    })
}

helloPromise()
