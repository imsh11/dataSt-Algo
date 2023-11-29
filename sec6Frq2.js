// write a function called samefn, which accepts two arrays. The
// function should return true if every valuse in the array has
// it's corresponding value squared in the second array. The 
// frequency of values much be same.

function samefn(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    let frequency1 = {}
    let frequency2 = {}

    
    for(let val of arr1){
        // console.log(frequency1[val] || 0)
        console.log(val, '-----val')
        frequency1[val] = (frequency1[val] || 0) + 1
    }
    for(let val of arr2){
        frequency2[val] = (frequency2[val] || 0) + 1
    }
    console.log(frequency1)
    console.log(frequency2)

    for (let key in frequency1){
        // console.log(key, 'key in obj')
        if( !(key **2 in frequency2)){
            return false
        }
        if(frequency2[key ** 2] !== frequency1[key]){
            return false
        }
    }
    return true
}

console.log(samefn([1,2,2,3,3], [4,4,1,9,11])) //true
// console.log(samefn([1,2,3], [1,9]))//false
// console.log(samefn([1,2,1], [4,4,1])) //false