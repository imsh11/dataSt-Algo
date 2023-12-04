// multiple Pointers
// function should find the first pair where
// sum is zero return an array that includes both
// values that sum to zero or undef if pair
// desn't exist

const sumZero = (arr) => {
    //
    // do two for loops
    // first loop start 0 2nd loop start 1
    // return array with both values
    for(let i=0; i<arr.length; i++){
        let first = arr[i]
        for(let j=1; j<arr.length; j++){
            console.log(i, j, '-----test')
            let second = arr[j]

            if(first + second === 0){
                return [first, second]
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))