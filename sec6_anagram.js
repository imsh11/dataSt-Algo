// given two Strings, write a fn to determine
// if the second string is an anagram of the first.

//a letter must appear same amount of time
    // length should be same

//two arg fn. return true if anagrams else false
// args are st

const anagram = (x, y) => {
    if(x.length !== y.length) return false

    let obj1 = {}
    let obj2 = {}

    for(let letter of x){
        obj1[letter] = (obj1[letter] || 0) + 1
    }

    for(let letter of y){
        obj2[letter] = (obj2[letter] || 0) + 1
    }

    console.log(obj1, obj2)

    for(key in obj1){
        // console.log(key)
        if(!obj2[key]){
            return false
        }

        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}

console.log(anagram('aaz', 'azz')) //false
// console.log(anagram('anagram', 'nagaram')) //true