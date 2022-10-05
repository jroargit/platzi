

class calculator {
    constructor(){
        this.valueA 
        this.valueB 
    }

    sum(valueA,valueB) {
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + this.valueB
    }
}

const calcu = new calculator()
console.log(calcu.sum(50, 49));

import hello from "./module.js"
hello()
