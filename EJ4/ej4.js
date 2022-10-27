console.log("Ej 4");

const array = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];


function muestraElementos(arr,num) {
    for (let i = num-1; i < arr.length; i+=num) {
        console.log(arr[i]);
    } 
}

muestraElementos(array,2)