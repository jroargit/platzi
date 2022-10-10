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
