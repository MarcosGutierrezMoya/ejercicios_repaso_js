console.log("==========Ej 3=========");

array1 = [1,0,2,3,4];  
array2 = [3,5,6,7,8,13];

let sumaArray = []
suma(array1,array2);

function suma(arr1,arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] === 'undefined') {
            arr1[i] = 0;
            console.log("hola");
            sumaArray.push(arr1[i]+arr2[i]);
        } else {
            sumaArray.push(arr1[i]+arr2[i]);
        }
    }
    sumaArray.push(arr2[5])//no me sale la comparacion
    return sumaArray
}

console.log(sumaArray);