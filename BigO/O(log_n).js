// O(log n) - LOGARITHMIC

console.log("Example 1");

function logFunc(n) {
  if (n === 0) {
    console.log("Done");
    return; // Exit the function to avoid further recursion
  }
  console.log(n); // Log the current value of n before dividing it
  n = Math.floor(n / 2); // Divide n by 2 and update the value
  logFunc(n);
}
logFunc(8);

console.log("Example 2");
// Example 2
function logn(i) {
  let count = 0;
  while (i > 1) {
    i = Math.floor(i / 2); // Divide the number by 2 and update the value
    count++;
  }
  console.log(count);
}
logn(8);

// APPLICATIOS
// 1. Binary Search
console.log("Example 3");

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let start = 0;
let end = arr.length - 1;
let targetValue = 19;

function BinarySearch(arr, start, end, targetValue) {
  if (start > end) return false;
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === targetValue) return true;

  if (arr[midIndex] > targetValue)
    return BinarySearch(arr, start, midIndex - 1, targetValue);
  else {
    return BinarySearch(arr, start, midIndex + 1, end, targetValue);
  }
}

console.log(BinarySearch(arr, start, end, targetValue));
