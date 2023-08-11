// LIST OF ARRAY METHODS() //

// Example of array
const nbaPlayers = ['Lebron', 'Jordan', 'Kobe', 'Curry', 'Luca']
console.log(nbaPlayers)

// expected output: ['Lebron', 'Jordan', 'Kobe', 'Curry', 'Luca']


// Example of array with mixed data types
const numbers = [1, 2, 2, 5, 7, 8, 14]
const random = ["tree", 785, [0, 5, 8]]
console.log(numbers, random)

// expected output: [1, 2, 2, 5, 7, 8, 14]
// [tree, 785, [0, 5, 8]]


// Find the length of an array using length() method
console.log(nbaPlayers.length)

// expected output: 5


// Find the index of an element using indexOf() method
const animals = ['Dog', 'Cat', 'Birds', 'Snakes', 'Fish']
console.log(animals.indexOf('Snakes'))

// expected output: 3


// Accessing array and modifying
console.log(nbaPlayers[0]) // access the 1st item - 0 index

// expected output: Lebron


nbaPlayers[0] = 'The King'
console.log(nbaPlayers) // modified and the single array item - 0 index

// expected output: [ 'The King', 'Jordan', 'Kobe', 'Curry', 'Luca' ]


// Creating a 2D array with numbers and strings
const multiDimensionalArray2d = [
    [1, 'apple', 3], // 0 index
    ['orange', 5, 'banana'], // 1 index
    [7, 'grape', 9] // 2 index
];

// Accessing an item inside the array
const item = multiDimensionalArray2d[1][0];
// [1] - access the 1st index which are ['orange', 5, 'banana']

// [0] - locate the index 0 which is the orange
console.log(item)

// expected output: orange


// Creating a 3D array with numbers, strings, and booleans
const multiDimensionalArray3d = [
    [
        [1, 2, 3], // 0 index
        [4, 5, 6]
    ],
    [
        ['apple', 'orange', 'banana'], // 1 index
        ['grape', 'kiwi', 'melon']
    ],
    [
        [true, false, true], // 2 index
        [false, true, false]
    ]
];

const element = multiDimensionalArray3d[1][1][2];
// [1] - accessing the 1st index (2d array) ['apple', 'orange', 'banana'], ['grape', 'kiwi', 'melon']

// [1] - accessing in the 1st index (2d array) ['grape', 'kiwi', 'melon']

// [2] - accessing the 2 index in the selected array - 'melon'
console.log(element)

// expected output: melon


// Adding items to the end of an array using push() method 
const planets = ['Mars', 'Earth', 'Jupiter'];
const pushPlanets = planets.push('Saturn');
console.log(planets, "-", pushPlanets);

// expected output: [ 'Mars', 'Earth', 'Jupiter', 'Saturn' ] - 4


// Adding items to the start of an array using unshift() method
const unshiftPlanets = planets.unshift('Venus')
console.log(planets, "-", unshiftPlanets);


// expected output: [ 'Venus', 'Mars', 'Earth', 'Jupiter', 'Saturn' ] - 5


// Removing the last item in the array
const popPlanets = planets.pop()
console.log(planets)

console.log(popPlanets) // Saturn - the removed item (last)

// expected output: [ 'Venus', 'Mars', 'Earth', 'Jupiter' ]


// Removing the first item in the array
const shiftPlanets = planets.shift()
console.log(planets)

console.log(shiftPlanets) // Venus - the removed item (first)

// expected output: ['Mars', 'Earth', 'Jupiter']


// Removing the item you know from index using splice() method
const indexPlanets = planets.indexOf('Earth');

if (indexPlanets !== -1) {
    planets.splice(indexPlanets, 1)
}

console.log(planets)

// expected output: [ 'Mars', 'Jupiter' ]

const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Removing elements using splice
const removedFruits = fruits.splice(1, 2); // Remove 2 elements starting from index 1

console.log(fruits); // Output: ['apple', 'kiwi']
console.log(removedFruits); // Output: ['banana', 'orange']


// Adding elements using splice 
const spliceNumbers = [1, 2, 3, 4];

spliceNumbers.splice(2, 0, 10, 11); // Add elements 10 and 11 at index 2
// 2 argument - accessing the 2 index in the array = 3
// 0 argument - number of elements want to removed
// the next argument which are 10, 11... and so on will be added to the array

console.log(spliceNumbers); // Output: [1, 2, 10, 11, 3, 4]


const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
    console.log(bird);
}


for (const bird in birds) {
    console.log(bird);
}


const birdKeys = Object.keys(birds);

const logBird = bird => console.log(bird);

birdKeys.map(logBird);



