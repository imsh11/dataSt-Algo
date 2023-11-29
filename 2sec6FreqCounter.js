const same = (arr1, arr2) => {

    for(let i=0; i<arr1.length; i++){
        if(!arr2.includes(arr1[i] ** 2)) return false
    }
    return true
}

console.log(same([1,2,2], [4,1,9]))
// console.log(same())