console.log(`hello world`)

let total = 0
function addUpTo(n) {
    for (let i=0; i <= n; i++){
        total += i
    }
    return total
}

const addUpToShort = (n) => {
    return  n * (n+1) / 2;
}

console.log(addUpTo(100))
console.log(addUpToShort(100))