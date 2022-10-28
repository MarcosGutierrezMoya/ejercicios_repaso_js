console.log("==========Ej 11=========");

const stringArr = ["casa", "reloj", "carótida", "coco", "elemento", "GammaTech", "dado"];

function getSmallWords(array) {
    let newArr = array.filter(item=>item.length<6);
    console.log(newArr);
}

getSmallWords(stringArr) // ["casa", "reloj", "coco", "dado"]
