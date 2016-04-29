// ------- Build with your instructor ------------
// Define a function named sum that takes two numbers as arguments
// Return the sum of those two arguments
// Uncomment the code below by typing Command + /
function sum(a,b) {
  return a + b;
}

// Define a function named product that takes two numbers as arguments
// Return the product of those two arguments
function product(a,b) {
  return a * b;
}

// Define a function named sumAndProduct that takes three numbers as arguments
// Add the first two arguments together, then multiply that sum by the third argument
//
// Example: if you are given 1, 2, 5 you would add 1 and 2 (which is 3) and multiply by 5, returning 15
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x,y,z) {
  return (x + y) * z;
}

// Define a function named celsiusToFahrenheit that takes one argument, a number (in celcius)
// Return a float that represents that temperature in Farenheit
//
// HINT: Use Google to find the formula
function celsiusToFahrenheit(temp) {
  return temp * (9/5) + 32;
}


// Define a function named areaOfCircle that calculates the area of a circle
// It takes one argument, radius
//
// See https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=area%20of%20a%20circle
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

// Define a function named areaOfDonut that takes two arguments:
//    - outerRadius
//    - innerRadius
// Returns the area of the donut
function areaOfDonut(outerRadius, innerRadius) {
  return areaOfCircle(outerRadius) - areaOfCircle(innerRadius);
}

// Define a function named greet that takes 2 arguments, firstName and lastName
// Return a string in the format "Hello, Tom Brady!"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

// Define a function named toSentence that takes 4 arguments: word1, word2, word3, oxfordComma
// If the 4th argument (oxfordComma) is true
//    Return a String in the format "word1, word2, and word3."
// If the 4th argument (oxfordComma) is false
//    Return a String in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
function toSentence(word1, word2, word3, oxfordComma){
  if (oxfordComma) {
    return word1 + ', ' + word2 + ', and ' + word3 + '.';
  } else {
    return word1 + ', ' + word2 + ' and ' + word3 + '.';
  }
}

// Define a function toDolla that takes one number argument: amount
// Return a string representation
// Example: if you get 10, return "10.00"
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(num) {
  return `$${num.toFixed(2)}`;
}


// Define a method named percentOf that takes two arguments
// Returns a String in the format "10.02%" that represents the percentage of one number in another
function percentOf(numerator, denominator) {
  return (numerator / denominator * 100).toFixed(2) + '%'
}

// Define a function named isStrictlyEqual that takes two arguments
// Return true if the two arguments are both equal _and_ have the same type
// Otherwise return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
function isStrictlyEqual(a,b) {
  return a === b;
}

// Define a function named isEqual that takes two arguments
// Return true if the two arguments are both equal regardless of type
// Otherwise return false
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
function isLooselyEqual(a, b) {
  return a == b;
}

// Define a function named remainder that takes two arguments, both whole numbers
// Return the remainder of the first number divided by the second number
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
//
function remainder(x,y) {
  return x % y;
}

// Define a function named isEven that takes one argument that is a whole number
// Return true if the number is even and false if it is not.
//
// Hint: What number will give you a remainder of 0 if it is even?
function isEven(num) {
  return num % 2 === 0;
}

// Define a function named isOdd that takes one argument that is a whole number
// Return true if the number is odd and false if it is not.
function isOdd(num) {
  return num % 2 !== 0;
}

// Define a function named isVowel that takes one argument, a letter
// Returns true if the letter is a vowel, and false if the letter is a consonant.
// (Treat 'y' as a consonant)
function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

// Define a function named biggestOfThree which takes three numbers as arguments
// Return the largest number
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function biggestOfThree(a,b,c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
  // OR....
  // return Math.max(a,b,c);
}

// TODO: Define a function named longestString takes the longest string

// Define a function named iceCreamPosition that takes two arguments:
//    pieTemperature
//    iceCreamFlavor
//
// If iceCreamFlavor is 'cardamom'
//    return 'not at all' and ignore anything else (this trumps all else)
// Otherwise
//  If pieTemperature is 'cold'
//    return 'on top'
//  If pieTemperature is 'warm'
//    return 'on the side'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  if (iceCreamFlavor === 'cardamom') {
    return 'not at all';
  } else if (pieTemperature === 'warm') {
    return 'on the side';
  }

  return 'on top';
}

// Define a function named isLeapYear that takes one argument, a year
// Returns true if the year is a leap year, and false if not
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return false;
  } else {
    return true;
  }
}

// -----------------------

//
// Convert roman numerals to decimal and vice-versa from 1-10 (switch)
//   stretch goals: do it without switch
//    link to switch docs


// -----------------------

// Define a function named shout that takes a string, and returns that string in all upper-case letters
// Example: if you are given "Hello There", return "HELLO THERE"

// Define a function named whisper that takes a string, and returns that string in all lower-case letters
// Example: if you are given "Hello There", return "hello there"

// Address function with missing pieces

// stopAt
//   get a source string and a string to find
//   find the index of the find string
//   return the string up to that point

// what's your favorite number?  that's OK, but xx is better (where xx is one higher)
//   if it's greater than x
// string escaping...

// capitalize
//   substring
//
// cleanup
//   remove whitespace
//   replaces "  " with " "
//
// leftPad5
//

// -----------------------

// http://www.asciitable.com/

// ceaserCipherEncodeOne
//   given a character
//
// ceaserCipherEncodeThree
//   given 3 numbers
//   return a string go back to the letter, and go back to those letters
//
// ceaserCipherDecode
//   String.fr


// -----------------------
// guess my number
//   hard-coded number,
//   you return "too low" or "too high" or "just right"
//
// wantsString
//   "hey, I wanted a string but you gave me a _object_"
//
// twentyIsh()
//   less than or equal to 20
//
// ish(age, range)
//   less than or equal to 20
//
// increment
// decrement
//
// correctMe
//   use replace
//
// stretch
//   camelCase
//
// roundUp
//
// roundDown
//
// // stretch
// daysOldYouAre
//   stretch (do a loop and calculate based on leap years)
//
// negation









// Write a function named calculateTaxRate that takes two arguments:
//    - annualSalary (number from 1 to 74,900)
//    - status (a string, which is either 'single' or 'joint')
//
// IF status is anything other than 'single' or 'joint'
//    return a string that says "better call an accountant"
// IF the dollar amount is greater than 74,900
//    return a string that says "better call an accountant"
// otherwise
//    use the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/
//    to calculate the correct tax rate as a string (for example, "10%" OR "15%")
function calculateTaxRate(salary, status) {
  if (salary > 74900 || (status !== 'single' && status !== 'joint')) {
    return 'better call an accountant';
  }

  switch (status) {
    case 'single':
      if (salary >= 1 && salary <= 9225) {
        return '10%';
      } else {
        return '15%';
      }
    case 'joint':
      return salary >= 1 && salary <= 18450 ? '10%' : '15%';
  }
}
