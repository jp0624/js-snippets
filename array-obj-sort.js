// <!-- =======================( sort )======================= -->

const numsArr = [1, 30, 4, 21, 100000];
numsArr.sort((a, b) => {
  return a - b; // b - a for reverse sort
});
console.log(numsArr); // [1, 4, 21, 30, 100000]

// <!-- ======( sort number )====== -->

objNum = [
  { number: 5 },
  { number: 8 },
  { number: 2 },
  { number: 10 },
  { number: 54 },
  { number: 765 },
  { number: 95 },
];
objNum.sort((a, b) => a.number - b.number); // b - a for reverse sort
console.log(objNum);

// <!-- ======( sort string )====== -->
objStr = [
  { string: "john" },
  { string: "peter" },
  { string: "adam" },
  { string: "uter" },
  { string: "kim" },
  { string: "sam" },
  { string: "smith" },
];

objStr.sort((a, b) => {
  // var uppA = a.string.toUpperCase();
  // var uppB = b.string.toUpperCase();
  a.string > b.string ? 1 : b.string > a.string ? -1 : 0; // reverse = a.string < b.string
});
console.log(objStr);

// <!-- ======( sort length )====== -->
objLen = [
  { len: "john" },
  { len: "kimberly" },
  { len: "peter" },
  { len: "adam" },
  { len: "uter" },
  { len: "kim" },
  { len: "sam" },
  { len: "smith" },
];

objLen.sort((a, b) => a.len.length - b.len.length); // b - a for reverse sort
console.log(objLen);
