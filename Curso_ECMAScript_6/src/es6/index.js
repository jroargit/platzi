// normal way in js
function newFunction(name, age, country){
    var name = name || "oscar"
    var age = age || 23
    var country = country || "COL"

    console.log(name, age, country)
}

// ECMAScript way
function newFunction2(name = "juan", age = 23, country = "COL"){
    console.log(name, age, country);
}

newFunction2()
newFunction2("jose", 22, "MX")

let hello = "hello"
let world = "world"


// objects
person = {
    name: "juan",
    age: 23,
    country: "COL"
}

console.log(person.name,person.age,person.country);
let { age } = person 
console.log(age);


let team1 = ['Mario', 'Nicolas', 'Hugo']
let team2 = ['Paola', 'Cata, Ana']
let completTeam = ['Diomedes', ...team1, ...team2]

console.log(completTeam);
