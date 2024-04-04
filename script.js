// let exampleEmptyVariable = null;
// let anotherEmptyVariable = undefined;

// console.log(exampleEmptyVariable, anotherEmptyVariable);

// let message = "hello from the script.js file!";

// console.log(message);

// // no keyword = declared with var
// world = "Earth";

// console.log(`Hello ${world}, I am Sam!`);

// console.log("Hello " + world + ", I am Sam!");

// let world = "Mars";

// {

// 	//let world = "Mars";

// 	console.log(`Hello ${world}, I am Sam!`);

// }




// List in Python is Array in JS

let favouriteFruits = [
	"mango",
	"banana",
	"grapes",
	"passionfruit",
	"pear",
	"strawberry",
	"watermelon",
	"lychee",
	"cherry",
	"blueberry",
	"tomato",
	"papaya",
	"dragon fruit",
	"kiwi"
];

console.log(favouriteFruits[12]);


console.log("The class' favourite fruits are: " + favouriteFruits);

favouriteFruits.forEach((fruit, index) => {
console.log(`Someone in the class loves ${fruit} at index: ${index}`)
});

// for (fruitIndex in favouriteFruits) {
//     console.log("Someone in the class loves " + favouriteFruits[fruitIndex]);
// }

// Array.prototype.sort()
console.log(Array.isArray(favouriteFruits));

let sortedFavouriteFruits = favouriteFruits.sort();

console.log(sortedFavouriteFruits);

let someNewArray = new Array(10);

someNewArray.push("mango");

console.log(someNewArray);



// Dictionary in Python is Object in JS

let sam = {
    name: "sam",
    codingLanugages: ["Python", "JavaScript", "Pinescript", "HTML", "CSS"],
    hobbies: [
        {
            name: "Gaming",
            favouriteGames: ["pokemon", "halo"],
            skill: 10
        },
        {
            name: "Gym",
            skill: 9000
        }
    ]
}

sam.hobbies[0]["favouriteGames"][0] = "new Game";
sam.hobbies[0].favouriteGames["new Game"] = "new Game"

console.log(sam);

let weather = "sunny";

switch (weather) {
	case "sunny":
		console.log("Sunny weather is nice when it's not hot!");
		break;
	case "rainy":
		console.log("Rain is nice when it's not torrential!");
		break;
	case "hail":
		console.log("Man, that hail is wild");
		// break;
	case "storm":
	case "snowy":
	default:
		console.log("Crazy weather, am I right?");
		break;
}

if (weather == "sunny") {
	console.log("Sunny weather is nice when it's not hot!");
} else if (weather == "rainy") {
	console.log("Rain is nice when it's not torrential!");
} else {
	console.log("Crazy weather, am I right?");
}