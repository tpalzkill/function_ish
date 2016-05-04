// Define a function named sum that takes in an array of numbers, arr.
//
// Return the sum of all of the numbers in the array.
function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Define a function named product that takes in an array of numbers, arr.
//
// Return the product of all of the numbers in the array.
function product(arr) {
  // YOUR CODE HERE
}

// Define a function named concatenate that takes in an array of strings, arr.
//
// Return a string that combines the strings in the order of the array.
function concatenate(arr) {

}

// Define a function named mean that takes in an array of numbers, arr.
//
// Return the mean (the average) of all of the numbers in the array.
function mean(arr) {

}

// Define a function named median that takes in an array of numbers, arr.
//
// Return the median of all of the numbers.
// Tip: See https://www.mathsisfun.com/definitions/median.html to understand
// how the median works.
function median(arr) {

}

// Define a function named mode that takes in an array of numbers, arr.
//
// Return the mode of all of the numbers.
// Tip: See https://www.mathsisfun.com/definitions/mode.html to understand
// how the mode works.
function mode(arr) {

}

// Define a function named merge that takes in two arrays of numbers.
// We can assume that the numbers in each array are sorted.
//
// Return a new array that contains all the numbers in each array still sorted.
// Tip: Each array may contain duplicate numbers. You need to ensure that each
// number is still accounted for.
function merge(arr1, arr2) {

}

// Define a function named filter that takes in an array of numbers.

// Define a function named unique that takes in an array of numbers/strings
//
// Return an array that contains each of the elments in the arra but removes any
// duplicate elements.
function unique(arr) {

}

// In the early days of Roman numerals, the Romans didn't bother with any of
// this new-fangled subtraction 'IX' nonsense. No sir, it was straight addition,
// biggest to littlest - so 9 was written 'VIIII' and so on.
//
// Write a method that, when passed any integer between 1 and 1000.
// Return a string that represents the roman numeral in the old school format.
//
// Example:
//   oldSchoolRomanNumeral(9) === 'VIIII'
//
// TIP #1: Here's a mapping of Roman to Arabic numerals:
//
//   1000 = M
//    500 = D
//    100 = C
//     50 = L
//     10 = X
//      5 = V
//      1 = I
//
// TIP #2: Use the integer division and modulus methods will be helpful
function oldSchoolRomanNumeral(num) {

}

// Eventually, someone thought it would be terribly clever if putting a smaller
// number before a larger one meant you had to subtract the smaller one. As a
// result of this development, you must now suffer.
//
// Rewrite your previous program so that, when passed any integer between 1 and
// 1000
// Return a string containing the proper modern Roman numeral.
//
// Example:
//   newSchoolRomanNumeral(9) === 'IX'
//
// TIP #1: Here's a mapping of Roman to Arabic numerals:
//
//   1000 = M
//    900 = CM
//    500 = D
//    400 = CD
//    100 = C
//     90 = XC
//     50 = L
//     40 = XL
//     10 = X
//      9 = IX
//      5 = V
//      4 = IV
//      1 = I

function newSchoolRomanNumeral(num) {

}
