function square(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i,j);
    }
  }
}

square(5);

// In the i for-loop, every element ie 1,2,3,4 will iterate over every element in the j for-loop
// This is a 5*5 square matrix thus O(5²)
