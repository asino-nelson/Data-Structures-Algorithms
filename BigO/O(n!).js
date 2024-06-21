console.log("Factorial");

function fact(n) {
  if (n === 0) {
    console.log("*****");
    return;
  }
  for (let i = 0; i < n; i++) {
    fact(n - 1);
  }
}

console.log(fact(3));
