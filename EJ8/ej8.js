console.log("==========Ej 8=========");

const arr = [[1, 2],[3, 4, 5, 6],[7, 8, 9],[0]];

function printElements(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }        
    }
}

printElements(arr) // 1 2 3 4 5 6 7 8 9 0 