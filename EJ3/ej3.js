console.log("Ej 3");

array1 = [1,0,2,3,4];  
array2 = [3,5,6,7,8,13];
suma(array1,array2);
function suma(arr1,arr2) {
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr1[i]+arr2[i]);
    }
}