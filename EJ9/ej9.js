console.log("==========Ej 9=========");

const drinks = [
	{
		name: "Cerveza",
		price: "3.50",
		ingredients: ["cebada", "lúpulo"]
	},
	{
		name: "Coca Cola",
		price: "3.00",
		ingredients: ["desconocido"]
	},
	{
		name: "Vino",
		price: "5.50",
		ingredients: ["uvas", "taninos"]
	},
	{
		name: "Vodka",
		price: "7.00",
		ingredients: ["patata", "agua", "etanol"]
	},
	{
		name: "Whiskey",
		price: "7.00",
		ingredients: ["trigo", "agua", "etanol"]
	},
	{
		name: "Zumo de naranja sin azúcar",
		price: "4.75",
		ingredients: ["naranjas", "aspartamo", "maltitol", "xilitol"]
	},
]

function bebidas(obj) {
    for (let i = 0; i < obj.length; i++) {
        console.log(`La bebida ${obj[i].name} tiene un precio de ${obj[i].price} y los siguientes ingredientes: ${obj[i].ingredients}`);
    }
}
bebidas(drinks);