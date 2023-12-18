// implment a fn countUnique
// accepts a sorted array, and count
// the unique values in the array
// there can be negative nums in the array
// but always sorted

let countUnique = (x) => {
    // how many different values
    // if empty return 0
    if (!x.length) return 0  // x lenght is 0

    for(let i=0; i<x.length; i++){
        
    }
}

console.log(countUnique([1,1,1,1,1,2])) // 2
// console.log(countUnique([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUnique([])) // 0
// console.log(countUnique([-2,-1,-1,0,1])) // 4