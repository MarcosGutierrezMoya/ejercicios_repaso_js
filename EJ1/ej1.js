console.log("==========Ej 1=========");
function suma(arr) {
    return arr.filter(value=>value%2==1).reduce((acc,val)=>acc+val)
}
console.log(suma([1,2,3,5]));