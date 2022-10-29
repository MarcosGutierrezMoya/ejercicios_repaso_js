console.log("==========Ej bonus 1=========");

const arrBonus1 = [ [1, 2], [3, 4], [5, 6], [7] ];

flattenArray(arrBonus1) // [1, 2, 3, 4, 5, 6, 7]

function flattenArray(array) {
    // console.log(array.flat());
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 1) {
            array[i].reduce((acc,val)=>{arr.push(acc,val)});
        } else {
            arr.push(array[i][0]);
        }
    }
    console.log(arr);
}