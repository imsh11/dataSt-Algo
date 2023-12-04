// given two Strings, write a fn to determine
// if the second string is an anagram of the first.

const anagram = (x, y) => {
    //
    if(x.length !== y.length) return false
    
    console.log(y, 'length--')

    for(let i=0; i<x.length; i++){
        let letter = x[i]
        for(let j=0; j<y.length; j++){
            if(letter === y[j]){
                y = y.split('')
                y.splice(j, 1)
                console.log(y, 'spliced--')
                y = y.join('')
                console.log(y, 'after join')

            }
        }
    }
    if(y.length) return false
    return true

}
console.log(anagram('aaz', 'azz')) //false
// console.log(anagram('anagram', 'nagaram')) //true