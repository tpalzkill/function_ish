// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4] produces 10. In the event the array is empty. Return 0.
function sum(arr) {
  // var sum = 0;
  // for(var i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;
}

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4] produces 24. In the event the array is empty. Return 1.
function product(arr) {
  // YOUR CODE HERE
}

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return a string that combines the strings in the order of the array. For
// example, ['hello', 'my', 'name', 'is', 'ken'] produces 'hellomynameisken'
function concatenate(arr) {

}

// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Tip: Assume that if the array is empty, we use the -Infinity in JavaScript.
//
// Return a the maximum number in the array. For example, given [1, 2, -3, 4], // it produces 4.
function max(arr) {

}

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Tip: Assume that if the array is empty, we use Infinity in JavaScript.
//
// Return a the minimum number in the array. For example, given [1, 2, -3, 4],
// it produces -3.
function min(arr) {

}

// Define a function named mean that takes in an array of numbers, arr.
//
// Return the mean (the average) of all of the numbers in the array.
// Return null if the array is empty.
function mean(arr) {

}

// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. Return null if the array is empty.
//
// Tip: Use google to find out how to calculate the median.
// Another tip: The array may not be sorted. There is an easy method in
// JavaScript called sort that can help you. See:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function median(arr) {

}

// Define a function distance that takes in two objects of the format:
// {
//   x: <NUMBER>,
//   y: <NUMBER>
// }
//
// Return the distance between the two points on a graph.
// Tip: Use google to find out how to calculate the distance between two points.


// Define a function named contains that is given an array of numbers and a
// number.
//
// Returns true if that number exists in the array, false otherwise.

(NUMBERS)
// Define a function named replace that takes in one arguments
//    arr (array of strings)
// Each string is a name of person who is assigned to work, and two strings, from and // to, replaces all places where the from string is located with the to string.
//
// Example: Ken does not feel like working this week.
// replace(['Ryan', 'Ken', 'Ken', 'Ian', 'Ryan', 'Ken'], 'Ken', 'Ryan') ->
//    ['Ryan', 'Ryan', 'Ryan', 'Ian', 'Ryan', 'Ryan']



// Define a function named pluck that is given an array of objects, and a
// string, "key".
//
// Returns an array of elements where each element is the value in each object.
//
// Example:
// var stooges = [
//   {name: 'moe', age: 40},
//   {name: 'larry', age: 50},
//   {name: 'curly', age: 60}
// ];
// pluck(stooges, 'name') -> ['moe', 'larry', 'curly']


// Define a function named flatten given an array of arrays (of anything).
//
// Returns an array that combines all of the elements in the original arrays.
//
// Examples:
//   flatten([[1], [2], [3], [4]]) -> [1, 2, 3, 4]
//   flatten([[1], [2, 3], [4]]) -> [1, 2, 3, 4]
// Tip: In the second example, we only need to flatten one level deep.
(ONE MORE EXAMPLE)

(values function)

// Define a function named pick given an object and an array of strings, keys.
//
// Returns an object that only contains the keys specified.
//
// Example:
// pick({name: 'moe', age: 50, userid: 'moe1'}, ['name', 'age'])
//   -> {name: 'moe', age: 50}



// Define a function named filter that takes in an array of numbers.
//
// Return the array with only numbers greater than 100.

// Define a function named unique that takes in an array of strings
//
// Return an array that contains each of the elements in the array but removes any
// duplicate elements.
//
// Example:
//   unique([1, 2, 1, 1, 2, 3]) -> [1, 2, 3]
(strings)
function unique(arr) {

}

// In the early days of Roman numerals, the Romans didn't bother with any of
// this new-fangled subtraction 'IX' nonsense. No sir, it was straight addition,
// biggest to littlest - so 9 was written 'VIIII' and so on.
//
// Define a method that, when passed any integer between 1 and 1000.
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
