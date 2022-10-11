const promise = new Promise(function (resolve, reject) {
    resolve('Hey!')
});

promise.then(result => console.log(result));

const cows = 10;
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve('we have enough cows in the farm');
    } else {
        reject('There is not enough cows in the farm');
    }
});

countCows.then(result => { 
    console.log(result) 
}).catch(error => { 
    console.log(error) 
}).finally(() => console.log('Finally'));
