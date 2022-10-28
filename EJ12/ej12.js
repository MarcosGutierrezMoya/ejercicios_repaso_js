console.log("==========Ej 12=========");

const myObj = {
	name: "Pedro",
	age: 35
}

function getProps(obj) {
    var ary2D = Object.entries(obj);
    console.log(ary2D);
}

getProps(myObj) // [ ["name", "Pedro"], ["age", 35] ]