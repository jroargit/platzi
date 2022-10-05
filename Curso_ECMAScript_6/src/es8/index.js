const data = {
        frontend: "Kevin",
        backend: "Juan",
        design: "Ana",
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);

const values = Object.values(data)
console.log(values);
const keys = Object.keys(data)
console.log(keys);

const string = "backend"
console.log(string.length);
console.log(string.padStart(11, "jr. "));
console.log(string.padEnd(11, " dev"));

