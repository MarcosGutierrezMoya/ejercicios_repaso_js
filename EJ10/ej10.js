console.log("==========Ej 10=========");

let person = [ ["name", "Pedro"], ["job", "Megateacher"], ["age", 35], ["city", "Melilla"], ["isMarried", false] ]

function createObj(arr) {
    const obj = Object.fromEntries(arr.map(([v, k]) => [v, k]));

    console.log(obj);
}
createObj(person);

