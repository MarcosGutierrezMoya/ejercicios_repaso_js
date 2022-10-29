console.log("==========Ej 17=========");

function repeat(str,int = 1) {
    let cadena = "";
    for (let i = 0; i < int; i++) {
        cadena += str;
    }
    return cadena
}

console.log(repeat('Ha!'));   
console.log(repeat('Ha!',2));   
console.log(repeat('Ha!',3));  
// "Ha!"   
// "Ha!Ha!"   
// "Ha!Ha!Ha!"