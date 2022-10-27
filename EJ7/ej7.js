console.log("==========Ej 7=========");

function difference(arr1,arr2) {
    let array1 = arr1.filter(val => !arr2.includes(val));
    let array2 = arr2.filter(val => !arr1.includes(val));
    let arrayMix = [...array1,...array2]
    console.log(arrayMix);
}

difference([1,2,3],[100,2,1,10]);
