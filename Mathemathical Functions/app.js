// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

const result = factorial(7);
console.log(result);

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  // Handle invalid input (negative numbers and 1)
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const number = 21;
const isPrimeNumber = isPrime(number);
console.log(
  number + (isPrimeNumber ? " is a prime number" : " is not a prime number")
);

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(n) {
  // Handle invalid input (negative or non-numeric)
  if (n <= 0 || !Number.isInteger(n)) {
    return null; // Or throw an error if you prefer
  }

  // Base case: first two terms
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  // Initialize variables for the sequence
  const sequence = [0, 1];

  // Loop to generate Fibonacci sequence
  for (let i = 2; i < n; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}

// Example usage
const terms = 10;
const fibonacciSequence = fibonacci(terms);
console.log(fibonacciSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
