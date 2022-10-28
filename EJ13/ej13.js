console.log("==========Ej 13=========");

const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
	height: 1.98,
    introduceMySelf(){`Hola, me llamo ${this.name} ${this.lastname},
    tengo ${this.age} años y vivo en la calle ${this.address.street},
    ${this.address.number}. Mis hobbies son: ${this.hobbies}`}
}

function moreMegaTeacher(hobbie,arr) {
    megaTeacher.hobbies.push(hobbie);
    for (let i = 0; i < arr.length; i++) {
        if (megaTeacher.hobbies.length < 8) {
            megaTeacher.hobbies.push(arr[i])
        }
    }
    console.log(megaTeacher);
}
moreMegaTeacher("eating",["pray to him god","go to other classroom","playing pc games","watch films","sleep"]);