// <!-- =======================( toString )======================= -->

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
var alphas = ["a", "b", "c", "d"];
var result = alphas.toString();

// <!-- =======================( join )======================= -->

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
var alphas = ["a", "b", "c", "d"];
var result = alphas.join(" * ");

// <!-- =======================( pop )======================= -->

// The pop() method returns the value that was "popped out":
const alphas = ["a", "b", "c", "d"];
let letter = alphas.pop("d");

// <!-- =======================( push )======================= -->

// The push() method adds a new element to an array (at the end):
const alphas = ["a", "b", "c", "d"];
alphas.push("e");

// <!-- ======( push obj )====== -->
const blobArr = [
  { title: "blob1", status: "new" },
  { title: "blob2", status: "old" },
  { title: "blob3", status: "old" },
  { title: "blob4", status: "new" },
];
var newArr = [];
blobArr.filter(({ status, title }, i) => {
  if (status === "new") {
    newArr.push(title);
    console.log(i);
  }
});
console.log(newArr);

// <!-- =======================( shift )======================= -->

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const alphas = ["a", "b", "c", "d"];
alphas.shift();

// <!-- =======================( unshift )======================= -->

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const alphas = ["a", "b", "c", "d"];
alphas.unshift("z");

// <!-- =======================( length )======================= -->

// The length property provides an easy way to append a new element to an array:
const alphas = ["a", "b", "c", "d"];
alphas[alphas.length] = "e";

// <!-- =======================( delete )======================= -->

/**
 *  Array elements can be deleted using the JavaScript operator delete.
 *  Using delete leaves undefined holes in the array.
 *  ! Use pop() or shift() instead.
 **/
const alphas = ["a", "b", "c", "d"];
delete alphas[0];

// <!-- =======================( pop )======================= -->
//Remove (pop) the last element:

const alphas = ["a", "b", "c", "d"];
alphas.pop();

// <!-- =======================( join )======================= -->
const alphas = ["a", "b", "c", "d"];
let text = alphas.join("-");

// <!-- =======================( splice )======================= -->
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2, 1);
console.log("removed: ", removed); //3

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    arr.splice(i, 1);
    i--;
  }
}

// <!-- =======================( old for loop )======================= -->
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    arr.splice(i, 1);
  }
}

// <!-- =======================( map )======================= -->
let arr = [2, 3, 5, 7];

arr.map(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
  return element;
}, 80);
