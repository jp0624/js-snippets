// <!-- =======================( includes )======================= -->
//arr.includes(valueToFind, fromIndex);

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
arr.includes(3, 2); // true
arr.includes(3, 3); // false

// <!-- =======================( indexOf )======================= -->
// arr.indexOf(searchElement, fromIndex)

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
arr.includes(3); // 2
arr.includes(10); // -1

// <!-- =======================( indexOf )======================= -->
// arr.find(callback(element[, index[, array]])[, thisArg])

var arr = ["one", "two", "three", "four"];
alligatorFacts.find((el) => el.length < 4); // "three"
alligatorFacts.find((el, i) => typeof el === "string" && i === 2); // "three"

// <!-- =======================( indexOf )======================= -->
// let newArray = arr.filter(callback(currentValue[, index[, array]]) {
// return element for newArray, if true
// }[, thisArg]);

var arr = ["one", "two", "three", "four"];
alligatorFacts.filter((el) => el === ("four" || "two")); // ["two", "four"]

// <!-- =======================( indexOf )======================= -->
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(
  arr.filter((el) => {
    if (el === 4 || el === 9) {
      return el;
    }
  })
);
