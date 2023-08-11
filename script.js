/* <--- ARRAY ---> */

// concat() method
const concatArray1 = ['a', 'b', 'c'];

const concatArray2 = ['d', 'e', 'f'];

const concatArray3 = concatArray1.concat(concatArray2);

console.log(concatArray3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// every() method
const isBelowThreshold = (currentValue) => currentValue < 40;

const everyArray = [1, 30, 39, 29, 10, 13];

console.log(everyArray.every(isBelowThreshold));
// expected output: true

// filter() method
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length === 10);

console.log(result);
// expected output: Array ["spray", "limit", "elite"]

// find() method
const findArray = [5, 12, 8, 130, 44];

const found = findArray.find(element => element > 10);

console.log(found);
// expected output: 12

// findIndex() method
const findIndexArray = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(findIndexArray.findIndex(isLargeNumber));
// expected output: 3

// forEach() method
const forEachArray = ['a', 'b', 'c'];

forEachArray.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// map() method
const mapArray = [1, 4, 9, 16];

// pass a function to map
const mapArray1 = mapArray.map(x => x * 2);

console.log(mapArray1);
// expected output: Array [2, 8, 18, 32]

// reduce() method
const reduceArray = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(reduceArray.reduce(reducer));
// expected output: 10

// reduceRight() method
const array1 = [[0, 1], [2, 3], [4, 5]];

const results = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(results);
// expected output: Array [4, 5, 2, 3, 0, 1]

// some() method
const someArray = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(someArray.some(even));
// expected output: true

// sort() method
const sortArray = [1, 30, 4, 21, 100000];

sortArray.sort((a, b) => a - b);

console.log(sortArray);
// expected output: Array [1, 4, 21, 30, 100000]

// toLocaleString() method
const toLocaleStringArray = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];

const localeString = toLocaleStringArray.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM"

// toString() method
const toStringArray = [1, 2, 'a', '1a'];

console.log(toStringArray.toString());

// expected output: "1,2,a,1a"

// valueOf() method
const valueOfArray = ['a', 'b', 'c'];

console.log(valueOfArray.valueOf());
// expected output: Array ["a", "b", "c"]

// Array.from() method
const fromArray = Array.from('foo');

console.log(fromArray);
// expected output: Array ["f", "o", "o"]

// Array.isArray() method
console.log(Array.isArray([1, 2, 3]));
// expected output: true

// Array.of() method
const ofArray = Array.of(7);

console.log(ofArray);
// expected output: Array [7]

// copyWithin() method
const copyWithinArray = [1, 2, 3, 4, 5];

// copy to index 0 the element at index 3
console.log(copyWithinArray.copyWithin(0, 3, 4));
// expected output: Array [4, 2, 3, 4, 5]

// spread operator (...)
const spreadArray1 = [1, 2, 3];

const spreadArray2 = [...spreadArray1, 4, 5, 6];

console.log(spreadArray2);

// expected output: Array [1, 2, 3, 4, 5, 6]

// push() method
const pushArray = ['a', 'b', 'c'];

const pushArrayLength = pushArray.push('d');

console.log(pushArrayLength);
// expected output: 4

// pop() method
const popArray = ['a', 'b', 'c'];

const popArray1 = popArray.pop();

console.log(popArray1);
// expected output: "c"

// shift() method
const shiftArray = ['a', 'b', 'c'];

const shiftArray1 = shiftArray.shift();

console.log(shiftArray1);
// expected output: "a"

// unshift() method
const unshiftArray = ['a', 'b', 'c'];

const unshiftArrayLength = unshiftArray.unshift('d');

console.log(unshiftArrayLength);
// expected output: 4

// push method with spread operator 
const pushSpreadArray = ['a', 'b', 'c'];

const pushSpreadArrayLength = pushSpreadArray.push(...['d', 'e', 'f']);

console.log(pushSpreadArrayLength);

// expected output: 6


/* <--- OBJECT ---> */

// Object.assign() method
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.assign({ c: 4, d: 5 }, object1);

console.log(object2.c, object2.d);

// expected output: 3 5








