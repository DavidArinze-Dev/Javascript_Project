//String Manipulation Functions:



//Reverse a String: Write a function that reverses a given string

function reverseString(str) {
  return str.split("").reverse().join("");
}
const reversedString = reverseString("Caterpillar");
console.log(`The Reversed String is: ${reversedString}`);



//Count Characters: Create a function that counts the number of characters in a string.
function countChar(characters) {
  return characters.length;
}
const length = countChar("Welcome To GoMyCode!");
console.log(`The Length is: ${length}`);



//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function titleCase(str) {
    var splitStr = str.split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
}

console.log(titleCase("welcome to goMyCode!"));
