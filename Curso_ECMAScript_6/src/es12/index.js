const string = "Hola mundo de la programación en el mundo real"

const replacedString = string.replace("mundo", "gente")
console.log(replacedString);

const replacedString2 = string.replaceAll("mundo", "gente")
console.log(replacedString2);

// Privates methods in classes

class Message {
    #show(val){
        console.log(val);
    }
}

const message = new Message()
message.get("holis")

// any in promises

const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => resolve("2"))
const promise3 = new Promise((resolve, reject) => resolve("3"))

Promise.any([promise1, promise2, promise3]).then(response => console.log(response))

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
}


}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isFalse ||= isFalse);

let isTrue2 = true
let isFalse2 = false
console.log(isTrue &&= isFalse2);
console.log(isFalse2 ||= isFalse2);

let isTrue3 = undefined
let isFalse3 = false
console.log(isTrue ??= isFalse3);

solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ]);

  function solution(array){
    array.map(item => (item.taxes = item.price*0.19))
    array.map(item => (item.taxes.unshift(item.pop))) 
    console.log(array);
  }
  
  
 
function nameOfDog(name) {
    console.log(name); 
}; 

nameOfDog("Elmo"); 