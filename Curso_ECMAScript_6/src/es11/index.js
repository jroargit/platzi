const btn = document.querySelector("#btn")

btn.addEventListener("click", async function () {
    const module = await import("./file.js")
    module.hello()
})

const aBigNumber = 9999999999999999999999999999999n
const anotherBigNumber = BigInt(9999999999999999999999999999999)

console.log(aBigNumber);
console.log(anotherBigNumber);

const newPromise = new Promise((resolve, reject) => reject("reject"))
const newPromise2 = new Promise((resolve, reject) => resolve("resolve"))
const newPromise3 = new Promise((resolve, reject) => resolve("resolve1"))

Promise.allSettled([newPromise, newPromise2, newPromise3]).then(response => console.log(response))

const fooo = 35 ?? "default value"
console.log(fooo);

const objt = {profile: {names: "Juan"}}
console.log(objt?.profile?.names);

if (objt?.profile?.names){
    console.log(objt);
}else{
    console.log("Nope");
}
