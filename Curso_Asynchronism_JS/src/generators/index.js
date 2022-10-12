function* gen() {
    yield 4+1;
    yield 'segundo yield';
    yield "Tercer yield";
}

try {
const g = gen();
    console.log(g.next().value);
    console.log(g.next().done);
    console.log(g.next().value);
    console.log(g.next().value);
} catch (error) {
    console.error(error);
}

function* iterate(array) { 
    for (let value of array) {
        yield value
        console.log(yield value);
    }
    
}

const it = iterate([4, 5,'Juan', 'Roa', 23])
console.log(it);

