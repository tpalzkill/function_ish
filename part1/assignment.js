// Define a function named sum that takes two arguments
//    a (number)
//    b (number)
//
// Return the sum of these two arguments
function sum(a, b) {
  return a + b;
}

// Define a function named product that takes two arguments
//    a (number)
//    b (number)
//
// Return the product of these two arguments
function product(a, b) {
  return a * b;
}

// Define a function named sumAndProduct that takes three arguments
//    x (number)
//    y (number)
//    z (number)
//
// Return the sum of the first two arguments multiplied by the third argument.
// For example, given 1, 2, and 5, then return 15.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
function sumAndProduct(x, y, z) {
  return (x + y) * z;
}

// Define a function named averageMovieReview that takes three arguments
//    rachel (number between 0 and 5)
//    roger (number between 0 and 5)
//    jake (number between 0 and 5)
//
// Return the average of the three arguments. For example, given 2, 2, and 5,
// then return 3.
function averageMovieReview(rachel, roger, jake) {
  return (rachel + roger + jake) / 3;
}

// Define a function named weightedAverageMovieReview that takes three arguments
//    rachel (number between 0 and 5)
//    roger (number between 0 and 5)
//    jake (number between 0 and 5)
//
// Return the weighted average of the three arguments with the following weights
//    Rachel's weight is 0.25
//    Roger's weight is 1
//    Jake's weight is 2.2
//
// Pay attention to the weights. These weights do not add up to 1.0, so the
// weighted average is perhaps counterintuitive.
//
// https://en.wikipedia.org/wiki/Weighted_arithmetic_mean#Mathematical_definition
//
// For example
// weightedAverageMovieReview(5, 5, 5)
// = ((0.25 * 5) + (1.0 * 5) + (2.2 * 5)) / (0.25 + 1.0 + 2.2)
// = 5.0

function weightedAverageMovieReview(rachel, roger, jake) {
  return ((0.25 * rachel) + (1.0 * roger) + (2.2 * jake)) / (0.25 + 1.0 + 2.2)
}

// Define a function named roundUp that takes one argument
//    decimal (number)
//
// Return the argument rounded up to the nearest integer
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
function roundUp(decimal) {
  return Math.ceil(decimal);
}

// Define a function named toFahrenheit that takes one argument
//    celsius (number)
//
// Return the argument converted to Fahrenheit rounded to the nearest integer.
// Use Google to find the formula.
function toFahrenheit(celsius) {
  return Math.ceil((celsius * 9) / 5 + 32)
}


// Define a function named areaOfCircle that takes one argument
//    radius (number)
//
// Return the area of a circle using that argument. Use Google to find the
// formula.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}


// Define a function named areaOfRing that takes two arguments
//    outerRadius (number)
//    innerRadius (number)
//
// Return the area of a circular ring using these arguments. Use Google to find
// the formula.
function areaOfRing(outerRadius, innerRadius) {
  let x = Math.PI;
  let d = (Math.pow(outerRadius, 2))
  let c = (Math.pow(innerRadius, 2));
  return x * (d - c);
}


// Define a function named greet that takes 2 arguments
//    firstName (string)
//    lastName (string)
//
// Return a string in the format 'Hello, Kelly Rippa!' using these arguments
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_strings
function greet(firstName, lastName) {
  return 'Hello, ' + firstName + ' ' + lastName + "!";
}

// Define a function named toSentence that takes four arguments
//    word1 (string)
//    word2 (string)
//    word3 (string)
//    oxfordComma (boolean)
//
// If oxfordComma is true,
//    Return a string in the format "word1, word2, and word3."
// If oxfordComma is false,
//    Return a string in the format "word1, word2 and word3."
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators

function toSentence(word1, word2, word3, oxfordComma) {
  if (oxfordComma === true) {
    return word1 + ", " + word2 + "," + " and " + word3 + ".";
  } else {
    return word1 + ", " + word2 + " and " + word3 + ".";
  }
}

// Define a function named toRoman that takes one argument
//    arabic (number)
//
// If the argument is less than 1
//    Return null
// If the argument is greater than 10
//    Return null
// Otherwise
//    Return the argument converted to a roman numeral string
//
// See //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and//_error_handling#switch_statement
function toRoman(arabic) {
//   let values = [1,2,3,4,5,6,7,8,9,10];
//   let numeral = [I,II,III,IV,V,VI,VII,VII,IX,X];
//   for (var i= 0; var i < values.length; i++) {

  if (arabic < 1) {
    return null;
  }
  else if (arabic > 10) {
    return null;
  }
  else {
    switch (arabic) {
  case 1:
      return 'I';
      break;
  case 2:
      return 'II';
      break;
  case 3:
      return 'III';
      break;
  case 4:
      return'IV';
      break;
  case 5:
      return 'V';
      break;
  case 6:
      return 'VI';
      break;
  case 7:
      return 'VII';
  case 8:
      return 'VIII';
  case 9:
      return 'IX';
  case 10:
      return 'X';
}}}


// Define a function toDolla that takes one argument
//    amount (number)
//
// Return the argument converted to a dollar currency string. For example, given
// 10, then return '$10.00'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function toDolla(amount) {
  return "$" + amount.toFixed(2);
}


// Define a function named percentage that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the percentage of the first argument divided by the second. For
// example, given 1 and 4, then return '25.0%'.
function percentage(numerator, denominator) {
  let ball = (numerator / denominator) * 100;
  return ball.toFixed(1) + "%";
}



// Define a function named isStrictlyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal and have the same type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using
//
// See https://dorey.github.io/JavaScript-Equality-Table/
function isStrictlyEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isLooselyEqual that takes two arguments
//    value1 (anything)
//    value2 (anything)
//
// If the two arguments are both equal regardless of type
//    Return true
// Otherwise
//    Return false
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using

function isLooselyEqual(value1, value2) {
  if (value1 == value2) {
    return true;
  } else {
    return false;
  }
}

// Define a function named remainder that takes two arguments
//    numerator (number)
//    denominator (number)
//
// Return the remainder of the first argument divided by the second. For
// example, given 4 and 3, then return 1.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
function remainder(numerator, denominator) {
  return numerator % denominator;
}


// Define a function named isEven that takes one argument
//    integer (number)
//
// If the number is even
//    Return true
// Otherwise
//    Return false
//
// Hint: What number will give you a remainder of 0 if the argument is even?
function isEven(integer) {
  if (integer % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isOdd that takes one argument
//    integer (number)
//
// If the number is odd
//    Return true
// Otherwise
//    Return false
function isOdd(integer) {
  if (integer % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


// Define a function named isVowel that takes one argument
//    letter (string)
//
// If the letter is a vowel
//    Return true
// Otherwise
//    Return false
//
// Treat 'y' as a consonant.

function isVowel(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
    return true;
  } else {
    return false;
  }
}

// Define a function named largestOfThree which takes three arguments
//    value1 (number)
//    value2 (number)
//    value3 (number)
//
// Return the largest argument by value
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function largestOfThree(value1, value2, value3) {
  return Math.max(value1, value2, value3);
  // if (value1 > value2 || value1 > value3) {
  //   return value1;
  // }
  // else if (value2 > value1 || value2 > value3) {
  //   return value2;
  // }
  // else if (value3 > value1 || value3 > value2) {
  //   return value3;
  // }
  // console.log(value3);
}


// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

function longestOfThree(value1, value2, value3) {
  let a = (value1.length);
  let b = (value2.length);
  let c = (value3.length);
  if (a > b && a > c) {
    return value1;
  } else if (b > a && b > c) {
    return value2;
  } else {
    return value3;
  }
}

// Define a function named iceCreamPosition that takes two arguments
//    pieTemperature (string)
//    iceCreamFlavor (string)
//
// If iceCreamFlavor is 'cardamom'
//    Return 'not at all' immediately
// Otherwise
//    If pieTemperature is 'cold'
//      Return 'on top'
//    If pieTemperature is 'warm'
//      Return 'on the side'
// Otherwise
//    Return 'up to you'
function iceCreamPosition(pieTemperature, iceCreamFlavor) {
  if (iceCreamFlavor === 'cardamom') {
    return 'not at all';
  } else if (pieTemperature === 'cold') {
    return 'on top';
  } else if (pieTemperature === 'warm') {
    return 'on the side';
  } else {
    return 'up to you';
  }
}


// Define a function named isLeapYear that takes one argument
//    year (number)
//
// If the argument is a leap year
//    Return true
// Otherwise
//    Return false
//
// See: https://en.wikipedia.org/wiki/Leap_year#Algorithm
function isLeapYear(year) {
  let remainder = year % 4;
  let other = year % 100;
  let last = year % 400;
  if (remainder !== 0) {
    return false;
  } else if (other !== 0) {
    return true;
  } else if (last !== 0) {
    return false;
  } else {
    return true;
  }
}
// Define a function named shout that takes one argument
//    message (string)
//
// Return the same argument but all in uppercase letters. For example, given
// 'Shut the front door', then return 'SHUT THE FRONT DOOR'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function shout(message) {
  return message.toUpperCase();
}


// Define a function named whisper that takes one argument
//    message (string)
//
// Return the same argument but all in lowercase letters and prefixed by
// 'shhh... '. For exaple, given 'GOLF TIME', then return "shhh... golf time"
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
function whisper(message) {
  return "shhh... " + message.toLowerCase();
}


// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.
//
// Hint: This will require a combination of 3 different steps
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

function stopAt(source, stop) {
  let indexOf = source.indexOf(stop);
  return source.substring(0,indexOf).trim();
  console.log(indexOf);
}

// Define a function named capitalize that takes one argument
//    message (string)
//
// Return the argument with the first letter capitalized. For example, given
// 'oh, you', then return 'Oh, you'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
//pop.string.length -1
function capitalize(message) {
  let firstChar = message.substring(0,1).toUpperCase();
  return firstChar + message.substring(1);
}


// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
  let length = word.length
  if (length === 5){
    return word;
  }
  else if (length === 4){
    return " "+ word;
  }
  else if (length === 3){
    return "  "+ word;
  }
  else if (length === 2){
    return "   "+ word;
  }
  else if (length === 1){
    return "    "+ word;
  }
  else {
    return word;
  }
}


// Define a function named superPicky that takes one argument
//    value (anything)
//
// If the argument is a string,
//    Return 'Thanks! Got it.'
// Otherwise
//    Return 'I wanted a string, but all I got was a stinking TYPE'
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function superPicky(value) {
  if (typeof value === "string") {
    return'Thanks! Got it.';
  }
  else {
    return 'I wanted a string, but all I got was a stinking ' + typeof value
  }
}

// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return the correct tax rate as a string using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/
function calculateTaxRate(salary, status) {
  if ((salary < 9275 && status === "single") ||
           (salary < 18550 && status === "joint")) {
     return "10%";
   }
  else if ((salary < 37650 && status === "single") ||
            (salary <= 74900 && status === "joint")) {
      return "15%";
    }
  else if (salary <= 74900 && status === "single") {
      return "25%";
     }
  else if ((status !== "single") || (status !== "joint")) {
       return "Better call an accountant";
     }
  else if (salary > 74900) {
       return "Better call an accountant";
     }
}
