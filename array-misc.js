// <!-- =======================( remove duplicates in arr )======================= -->

var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];

// First method
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// Second method
var uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2); // returns ["banana", "apple", "orange", "watermelon", "grape"]

// <!-- =======================( replace specific value )======================= -->

var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];
fruits.splice(0, 2, "potato", "tomato");

console.log(fruits); // returns ["potato", "tomato", "orange", "watermelon", "apple", "orange", "grape", "apple"]

// <!-- =======================( Map array without.map() )======================= -->

var friends = [
  { name: "John", age: 22 },
  { name: "Peter", age: 23 },
  { name: "Mark", age: 24 },
  { name: "Maria", age: 22 },
  { name: "Monica", age: 21 },
  { name: "Martha", age: 19 },
];

var friendsNames = Array.from(friends, ({ name }) => name);
console.log(friendsNames); // returns ["John", "Peter", "Mark", "Maria", "Monica", "Martha"]

// <!-- =======================( empty arr )======================= -->Empty an array

var fruits = [
  "banana",
  "apple",
  "orange",
  "watermelon",
  "apple",
  "orange",
  "grape",
  "apple",
];

fruits.length = 0;
console.log(fruits); // returns []

// <!-- =======================( convert arr to obj )======================= -->

var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObj = { ...fruits };
console.log(fruitsObj); // returns {0: "banana", 1: "apple", 2: "orange", 3: "watermelon", 4: "apple", 5: "orange", 6: "grape", 7: "apple"}

// <!-- =======================( create & fill array )======================= -->

var newArray = new Array(10).fill("1");
console.log(newArray); // returns ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]

// <!-- =======================( merge arrays )======================= -->

var fruits = ["apple", "banana", "orange"];
var meat = ["poultry", "beef", "fish"];
var vegetables = ["potato", "tomato", "cucumber"];
var food = [...fruits, ...meat, ...vegetables];
console.log(food); // ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]

// <!-- =======================( find same value )======================= -->

var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = [...new Set(numOne)].filter((item) =>
  numTwo.includes(item)
);
console.log(duplicatedValues); // returns [2, 4, 6]

// <!-- =======================( remove false )======================= -->

var mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];
var trueArr = mixedArr.filter(Boolean);
console.log(trueArr); // returns ["blue", 9, true, "white"]

// <!-- =======================( random value )======================= -->

var colors = [
  "blue",
  "white",
  "green",
  "navy",
  "pink",
  "purple",
  "orange",
  "yellow",
  "black",
  "brown",
];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// <!-- =======================( reverse )======================= -->

var colors = [
  "blue",
  "white",
  "green",
  "navy",
  "pink",
  "purple",
  "orange",
  "yellow",
  "black",
  "brown",
];
var reversedColors = colors.reverse();
console.log(reversedColors); // returns ["brown", "black", "yellow", "orange", "purple", "pink", "navy", "green", "white", "blue"]

// <!-- =======================( lastIndexOf )======================= -->

var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex = nums.lastIndexOf(5);
console.log(lastIndex); // returns 9

// <!-- =======================( sum values )======================= -->

var nums = [1, 5, 2, 6];
var sum = nums.reduce((x, y) => x + y);
console.log(sum); // returns 14

// <!-- =======================( values & next )======================= -->

let vegs = ["celery", "carrot", "lettuce", "radish"];
let myIterator2 = vegs.values();

console.log(myIterator2.next());
console.log(myIterator2.next());
console.log(myIterator2.next());
console.log(myIterator2.next());
console.log(myIterator2.next()); // can't iterate anymore
