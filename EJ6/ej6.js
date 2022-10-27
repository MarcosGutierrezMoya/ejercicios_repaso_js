console.log("==========Ej 6=========");

const myObject = {
	name: "Paco",
	age: 28
}

function deleteProp(obj,key) {
    if (Object.hasOwn(obj,key,)) {
        delete obj[key];
        console.log(obj);
        return true;
    } else {
        console.log(obj);
        return false;
    }
}

console.log(deleteProp(myObject, "name"));