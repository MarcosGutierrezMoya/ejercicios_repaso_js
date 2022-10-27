console.log("==========Ej 10=========");

let person = [ ["name", "Pedro"], ["job", "Megateacher"], ["age", 35], ["city", "Melilla"], ["isMarried", false] ]

function createObj(arr) {
    let myArray = arr.map(function(x) {
        return {    
            // x[0][0]: x[0],
            "t_id": x[1],
            "type": x[2]
        }
    })
    console.log(obj);
}
createObj(person);