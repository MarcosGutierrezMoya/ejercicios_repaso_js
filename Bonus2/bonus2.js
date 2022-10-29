console.log("==========Ej bonus 1=========");

const arr1 = ['b', 'd', 'e', 'a'];
const arr2 = ['b', 'c', 'e', 'd'];
const arr3 = ['a', 'b', 'e', 'c'];

getCommonElements(arr1, arr2, arr3) // ['b', 'e']

function getCommonElements(array1, array2, array3) {
    let newArray = array1.concat(array2,array3);
    console.log(newArray);
    return newArray;
}