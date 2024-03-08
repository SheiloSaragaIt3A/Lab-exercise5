
let userInput1 = prompt("Enter the first string:");
let userInput2 = prompt("Enter the second string:");
let concatenatedString = userInput1 + userInput2;
console.log("Concatenated String:", concatenatedString);

console.log("Length of Concatenated String:", concatenatedString.length);
console.log("Uppercase String:", concatenatedString.toUpperCase());
console.log("Lowercase String:", concatenatedString.toLowerCase());
console.log("Substring:", concatenatedString.substring(0, 5));

let interpolatedString = `The result of adding ${userInput1} and ${userInput2} is ${concatenatedString}`;
console.log("Interpolated String:", interpolatedString);

let areStringsEqual = userInput1 === userInput2;
console.log("Are the strings equal?", areStringsEqual);

let stringArray = concatenatedString.split('');
console.log("String Array:", stringArray);