let shoppingLIst = ["Milk", "Bread", "Butter", "Eggs"];

for (let i = 0; i < shoppingLIst.length; i++) {
  const element = shoppingLIst[i];
  console.log(element);
}

while (shoppingLIst.includes("Milk")) {
    console.log("This is breakfast");
    return
}
