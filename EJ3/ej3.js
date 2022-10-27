console.log("Ej 3");

array1 = [1,0,2,3,4];  
array2 = [3,5,6,7,8,13];

let sumaArray = [...array2]
suma(array1,array2);

function suma(arr1,arr2) {
    for (let i = 0; i < arr1.length; i++) {
        sumaArray[i] = arr1[i]+arr2[i];
    }
    return sumaArray
}

console.log(sumaArray);