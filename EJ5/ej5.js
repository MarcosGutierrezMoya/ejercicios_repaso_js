console.log("==========Ej 5=========");


function union(arr1,arr2) {
    let array2 = arr2.filter(val => !arr1.includes(val));
    let mixArray = [...arr1,...array2];

    return mixArray
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));  