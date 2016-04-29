// Define a function named geekify that takes one argument, a string
//
// Return a string with the following changes:
//
//  - remove spaces from the beginning / end of the string
//  - lowercase the entire string
//  - replace remaining spaces with dashes
//  - replace "e" with "3"
//  - replace "o" with "0"
//
// Example: "  Cool beans dude " becomes "c00l-b3ans-dud3"
//
// See http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
function geekify(input) {
  return input.trim().toLowerCase().replace(/ /g, '-').replace('e', '3').split('o').join('0');
}

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
