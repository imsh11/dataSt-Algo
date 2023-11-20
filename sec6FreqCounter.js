// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:


function sameFrequency(x, y){
    // good luck. Add any arguments you deem necessary.
    //number appear same amount of time
    
    //first if nums in x are in y 
    let nums1 = String(x)
    let nums2 = String(y)
    console.log(typeof(x), nums1,'testing')
    for (let i = 0; i<nums1.length; i++){
        console.log(nums1[i], '-----')
        for(let j=0; j<nums2.length; j++){
            console.log(nums2[j], 'testing-')
            if (nums1[i] !== nums2[j]){
                console.log('test01')
            }
            return true
        }
    }
    return false
}


console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false