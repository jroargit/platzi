const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hellow world"), 4999)
            : reject (new Error("Text error"))
    })
}

const helloWorldAsync = async () => {
    const hello = await helloWorld()
    console.log(hello);
}

helloWorldAsync()

const anotherFunction =async () => {
    try {
        const hello = await helloWorld()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction()