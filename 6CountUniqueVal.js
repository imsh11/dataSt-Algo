// implment a fn countUnique
// accepts a sorted array, and count
// the unique values in the array
// there can be negative nums in the array
// but always sorted

let countUnique = (x) => {
    // how many different values
    // if empty return 0
    // have a variable out of loop for first value
    if (!x.length) return 0  // x lenght is 0

    let count = 1;//
    let value = x[0]

    for(let i=0; i<x.length; i++){ // loop through array
        // save val in a var
        // seperate count var
        let val = x[i]
        //

        // value = x[0] // would reassign every loop

        // if (!value){ // 
            // value = x[i] // value stuck at 1
        // }
        console.log(val, value, 'values')
        if (val !== value){
            value = val
            count++
            console.log(val, value,count, 'in if !')
        }
        // count var to 1
        // count = 1
    }
    return `the number of values are ${count}`
}

// console.log(countUnique([1,1,1,1,1,2])) // 2
console.log(countUnique([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUnique([])) // 0
// console.log(countUnique([-2,-1,-1,0,1])) // 4