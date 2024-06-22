let languages = ["Kotlin", "Javascript", "C", "Python", "C++", "C#"];

console.log(languages[3]); // OUTPUTS the value in the given index

languages[4] = "SQL"; // REPLACES the value of the given index

languages.push("PHP"); // ADDS to the last index

languages.unshift("Swift"); // ADDS to the first index

let lastLanguage = languages.pop(); // REMOVES value from the last index

let firstLanguage = languages.shift();  // REMOVES value from the first index

languages.splice(4, 2); // REMOVES value by its index "4", and how may values starting with the stated index "2". Removes 2 values

console.log(`Last language is: ${lastLanguage}`);

console.log(`First language is: ${firstLanguage}`);

console.log(languages.toString());
