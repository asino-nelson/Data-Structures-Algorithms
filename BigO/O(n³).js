function cube(n) {
  for (let i = 1; i <= n; i++) {     // i iterates for every j
    for (let j = 1; j <= n; j++) {   // j iterates for every k
      for (let k = 1; k <= n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

cube(5);

// At this point were working with a 3D array
// This is a 5*5*5 cube hence O(5³)
