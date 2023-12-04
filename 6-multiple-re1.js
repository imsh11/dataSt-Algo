// multiple Pointers
// function should find the first pair where
// sum is zero return an array that includes both
// values that sum to zero or undef if pair
// desn't exist

function sumZero(arr){
    // while loop
    let start = 0
    let end = arr.length-1

    while(start < end){
        let sum = arr[start] + arr[end]
        // console.log(sum,)

        if(sum === 0) return [arr[start], arr[end]]

        if(sum < 0){
            start += 1
            console.log(sum, '---sum')
        }
        if(sum > 0){
            end = end - 1
        }
        console.log(start, end, 'end')
    }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) // [-3, 3]
console.log(sumZero([-4,-3,-2,-1,0,10])) // undef