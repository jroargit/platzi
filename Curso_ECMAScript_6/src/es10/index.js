let array = [1,2,3, [4,5,6, [7,8,9]]];
console.log(array.flat(0));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value,value]));

let hello = "                         holitas                         "
console.log(hello);
console.log(hello.trim());

try {
    
} catch {
    console.error();
}

let entries = [["name", "oscar"], ["age", 23]]
console.log(Object.fromEntries(entries));

let mySymol = `Symbol`
let symbol = Symbol(mySymol)
console.log(symbol.description);