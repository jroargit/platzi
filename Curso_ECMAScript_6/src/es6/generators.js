function* hellowWorld (){
    if (true){
        yield "hello, "
    }
    
    if (true){
        yield "world"
    }

    if (true){
        yield "xd"
    }

}

const generatorHello = hellowWorld()
console.log(generatorHello.next().value); 
console.log(generatorHello.next().value); 
console.log(generatorHello.next().value); 
console.log(generatorHello.next().value); 