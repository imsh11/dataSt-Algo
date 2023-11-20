console.log(`hello world`)

//better code
// - faster?
// - less memory
// - - more readable

let total = 0
function addUpTo(n) {
    for (let i=0; i <= n; i++){
        total += i
    }
    return total
}

const addUpToShort = (n) => {
    // zomg wut algorithem
    return  n * (n+1) / 2;
}

// let t1 = performance.now();
// console.log(addUpTo(100000000))
// let t2 = performance.now()

//shorter
let t1 = performance.now()
console.log(addUpToShort(100000000))
let t2 = performance.now()

console.log(`Time elasped: ${t2 - t1} miliseconds`)
