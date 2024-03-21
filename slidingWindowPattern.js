//sliding window pattern
function maxSumArray (arr, num) {
    let max = 0;
    let sum = 0

    for(let i=0; i<num; i++){
        sum+= arr[i]
    }

    max = sum

    for(let j=num; j<arr.length; j++){
        sum = sum - arr[j-num] + arr[j]
        if( sum > max) max = sum
    }
    return max
}

console.log(maxSumArray([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSumArray([1,2,5,2,8,1,5], 4)) //17