// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:


// function sameFrequency(x, y){
//     // good luck. Add any arguments you deem necessary.
//     //number appear same amount of time
    
//     //first if nums in x are in y 
//     let nums1 = String(x)
//     let nums2 = String(y)
//     console.log(typeof(x), nums1,'testing')
//     for (let i = 0; i<nums1.length; i++){
//         console.log(nums1[i], '-----')
//         for(let j=0; j<nums2.length; j++){
//             console.log(nums2[j], 'testing-')
//             if (nums1[i] !== nums2[j]){
//                 console.log('test01')
//             }
//             return true
//         }
//     }
//     return false
// }


// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

//-------------------------------------

const same = (arr1, arr2) =>{

    let test = arr1.slice()
    // console.log(test, 'test')
    // mutating array messes things up

    for(let i=0; i<arr1.length; i++){
        console.log(test, 'test')
        for(let j=0; j<arr2.length; j++){
            console.log(arr2[j], arr1[i], 'nums--')
            if(arr1[i] ** 2 !== arr2[j]){
                // let deleted = test.splice(i, 1)
                console.log(i, 'hit')
            }
            
            // console.log(test, arr1, 'after splice')
        }
        // console.log( test, 'first loop')
        // if(!test.length) return true
    }
}

console.log(same([1,2,3], [4,1,9])) //true
// console.log(same([1,2,3], [1,9])) //false
// console.log(same([1,2,1], [4,4,1])) //false