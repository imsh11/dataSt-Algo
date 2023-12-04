// given two Strings, write a fn to determine
// if the second string is an anagram of the first.

function anagram(x,y){
    // check length
    if(x.length !== y.length) return false

    let letterObj = {}
    for(let i=0; i<x.length; i++){
        letterObj[x[i]] ? letterObj[x[i]] += 1 : letterObj[x[i]] = 1
    }
    console.log(letterObj, 'letterObj--')

    for(let i=0; i<y.length; i++){
        // (letterObj[y[i]]) ? letterObj[x[i]] -= 1 : return false

        if (!letterObj[y[i]]){
            return false
        }
        else{
            letterObj[y[i]] -= 1
        }
        console.log(letterObj, 'letterObj---after')
    }
    return true
}

// console.log(anagram('aaz', 'azz')) //false
console.log(anagram('anagrams', 'nagaramm')) //true