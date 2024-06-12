// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}

const numbers = [40, 100, 1, 5, 25, 10];
const { min, max } = findMinMax(numbers);

console.log("Minimum: " + min);
console.log("Maximum:", max);

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumOfArray() {
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
}
var numbers2 = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1, 15];
var sum = 0;
sumOfArray(numbers2);

console.log("sum of numbers: " + sum);

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
const ages = [32, 33, 16, 40, 56, 15, 21];
function checkAdult(age) {
  return age >= 18;
}

var newAge = ages.filter(checkAdult);
console.log(newAge);
