// sliding window

function slidingWindow (arr, num){
    let sum = -Infinity
    for(let i=0; i<arr.length -num; i++){
        // console.log(arr[i], 'i')
        let sum1 = arr[i]
        for(let j= i + 1; j< num + i; j++){ // j should be i + 1 //num = 2  // j = num - j
            sum1+= arr[j]
            // console.log(arr[j], sum1, 'j')
        }
        if(sum < sum1){
            sum = sum1
        }
        console.log(sum, sum1)
    }
    return sum
}

slidingWindow([1, 2, 5, 2, 8, 1, 5], 2) //10
slidingWindow([1,2,5,2,8,1,5], 4) //17