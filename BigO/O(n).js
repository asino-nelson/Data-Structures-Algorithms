// O(n) - LINEAR

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearFunct(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(1000 * 10000);
  }
}

linearFunct(arr);

// The input is an array of 7 numbers and so the code iterates for each value (7 times)
// it takes constant time to handle the large calculation in every iteration ( Big O(1) ) hence thats not a factor
