// write a function called samefn, which accepts two arrays. The
// function should return true if every valuse in the array has
// it's corresponding value squared in the second array. The 
// frequency of values much be same.

const samefn = (arr1, arr2) => {
    // lenght of values must be same
    if(arr1.length !== arr2.length) return false

    for( let i=0; i<arr1.length; i++){
        // if(arr2.includes(arr1[i] ** 2))
        for(let j=0; j<arr2.length; j++){
            // splice that item out
            if(arr1[i] ** 2 === arr2[j]){
                arr2.splice(j, 1)
            }
            // console.log(arr2, 'arr2------')
        }
    }
    if(!arr2.length) return true
    return false
} 

console.log(samefn([1,2,3], [4,1,9])) //true
console.log(samefn([1,2,3], [1,9]))//false
console.log(samefn([1,2,1], [4,4,1])) //false