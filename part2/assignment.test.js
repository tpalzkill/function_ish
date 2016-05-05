window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('#sum', function() {
    test('adds a bunch of numbers', function() {
      assert.equal(sum([]), 0);
      assert.equal(sum([1, 2, 3, 4]), 10);
      assert.equal(sum([1, -1, 2, -3]), -1);
    });
  });

  suite('#product', function() {
    test('multiplies bunch of numbers', function() {
      assert.equal(product([]), 1);
      assert.equal(product([1, 2, 3, 4]), 24);
      assert.equal(product([1, 2, 3, 4, 0]), 0);
    });
  });

  suite('concatenate', function() {
    test('concatenates an array of strings', function() {
      assert.equal(concatenate([]), '');
      assert.equal(concatenate(['Hello', 'world', 'Seattle']), 'HelloworldSeattle');
    });
  });

  suite('#max', function() {
    test('calculates the max number in an array', function() {
      assert.equal(max([1, 2, 3, 4, 3]), 4);
      assert.equal(max([1, 2, 3, -4, 3]), 3);
    });

    test('calculates the max number in an empty array', function() {
      assert.equal(max([]), Number.MIN_VALUE);
    });
  });

  suite('#min', function() {
    test('calculates the min number in an array', function() {
      assert.equal(min([1, 2, 3, 4, 3]), 1);
      assert.equal(min([1, 2, 3, -4, 3]), -4);
    });

    test('calculates the min number in an empty array', function() {
      assert.equal(max([]), Number.MAX_VALUE);
    });
  });

  suite('#mean', function() {
    test('calculates the mean of an array', function() {
      assert.equal(mean([1, 2, 3, 4, 5]), 3);
      assert.equal(mean([1, 2, 3, -4, 3]), 1);
      assert.equal(mean([]), null);
    });
  });

  suite('#median', function() {
    test('calculates the median of an array', function() {
      assert.equal(median([1, 1, 2, 3, 4, 5, 6]), 3);
      assert.equal(median([1, 1, 2, 3, 4, 5]), 2.5);
      assert.equal(median([1, 6, 5, 3, 4, 2, 1]), 3);
      assert.equal(median([]), null);
    });
  });

  suite('#greet', function() {
    test('greets a person by their full name', function() {
      assert.equal(greet('Bart', 'Simpson'), 'Hello, Bart Simpson!');
      assert.equal(greet('Mona', 'Lisa'), 'Hello, Mona Lisa!');
    });
  });

  suite('#merge', function() {
    test('merges two sorted arrays', function() {
      assert.equal(merge([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
      assert.equal(merge([1, 3, 5], [1, 2]), [1, 1, 2, 3, 4, 5]);
      assert.equal(merge([], [1, 2]), [1, 2]);
      assert.equal(merge([1, 2], []), [1, 2]);
    });
  });

  suite('#distance', function() {
    test('returns the distance between two points', function() {
      assert.equal(distance({x: 0, y: 3}, {x: 0, y: 0}), 3);
      assert.equal(distance({x: -1, y: 1}, {x: 0, y: 0}), Math.sqrt(2));
    });
  });

  suite('#oldSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the old school format', function() {
      assert.equal(oldSchoolRomanNumeral(1), 'I');
      assert.equal(oldSchoolRomanNumeral(2), 'II');
      assert.equal(oldSchoolRomanNumeral(4), 'IIII');
      assert.equal(oldSchoolRomanNumeral(5), 'V');
      assert.equal(oldSchoolRomanNumeral(6), 'VI');
      assert.equal(oldSchoolRomanNumeral(9), 'VIIII');
      assert.equal(oldSchoolRomanNumeral(10), 'X');
      assert.equal(oldSchoolRomanNumeral(11), 'XI');
      assert.equal(oldSchoolRomanNumeral(15), 'XV');
      assert.equal(oldSchoolRomanNumeral(16), 'XVI');
      assert.equal(oldSchoolRomanNumeral(52), 'LII');
      assert.equal(oldSchoolRomanNumeral(72), 'LXXII');
      assert.equal(oldSchoolRomanNumeral(72), 'LXXII');
      assert.equal(oldSchoolRomanNumeral(134), 'CXXXIIII');
      assert.equal(oldSchoolRomanNumeral(273), 'CCLXXIII');
      assert.equal(oldSchoolRomanNumeral(749), 'DCCXXXXVIIII');
      assert.equal(oldSchoolRomanNumeral(1000), 'M');
    });
  });

  suite('#newSchoolRomanNumeral', function() {
    test('converts a number to a roman numeral in the new school format', function() {
      assert.equal(newSchoolRomanNumeral(1), 'I');
      assert.equal(newSchoolRomanNumeral(2), 'II');
      assert.equal(newSchoolRomanNumeral(4), 'IV');
      assert.equal(newSchoolRomanNumeral(5), 'V');
      assert.equal(newSchoolRomanNumeral(6), 'VI');
      assert.equal(newSchoolRomanNumeral(9), 'IX');
      assert.equal(newSchoolRomanNumeral(10), 'X');
      assert.equal(newSchoolRomanNumeral(11), 'XI');
      assert.equal(newSchoolRomanNumeral(15), 'XV');
      assert.equal(newSchoolRomanNumeral(16), 'XVI');
      assert.equal(newSchoolRomanNumeral(52), 'LII');
      assert.equal(newSchoolRomanNumeral(72), 'LXXII');
      assert.equal(newSchoolRomanNumeral(72), 'LXXII');
      assert.equal(newSchoolRomanNumeral(134), 'CXXXIV');
      assert.equal(newSchoolRomanNumeral(273), 'CCLXXIII');
      assert.equal(newSchoolRomanNumeral(749), 'DCCXCVIV');
      assert.equal(newSchoolRomanNumeral(1000), 'M');
    });
  });

  suite('#replace', function() {
    test('replaces values in an array with another', function() {
      assert.equal(replace(['Ryan', 'Ken', 'Ken', 'Ian', 'Ryan', 'Ken'], 'Ken', 'Ryan'), ['Ryan', 'Ryan', 'Ryan', 'Ian', 'Ryan', 'Ryan']);
      assert.equal(replace(['Ryan', 'Ian', 'Ryan'], 'Ken', 'Ryan'), ['Ryan', 'Ian', 'Ryan']);
    });
  });

  suite('#contains', function() {
    test('checks if a number is in the array', function() {
      assert.equal(contains([1, 2, 3, 4, 5], 4), true);
      assert.equal(contains([], 4), false);
      assert.equal(contains([1, 2, 3, 4, 5], 6), false);
    });
  });

  suite('#pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      assert.equal(pluck([], 'foo'), []);
      var stooges = [
        {name: 'moe', age: 40},
        {name: 'larry', age: 50},
        {name: 'curly', age: 60}
      ];
      assert.equal(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  suite('#flatten', function() {
    test('flattens an array of arrays', function() {
      assert.equal(flatten([]), []);
      assert.equal(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
      assert.equal(flatten([[1], [2], [3, [[4]]]]), [1, 2, 3, [[4]]]);
    });
  });

  suite('#length', function() {
    test('returns true if the number is even', function() {
      assert.equal(length({}), 0);
      assert.equal(length({a: 1, b: 'foo'}), 2);
      assert.equal(length({b: 'foo'}), 1);
    });

    test('returns false if the number is not even', function() {
      assert.equal(isEven(11), false);
      assert.equal(isEven(15), false);
    });
  });

  suite('#isOdd', function() {
    test('returns true if the number is odd', function() {
      assert.equal(isOdd(11), true);
      assert.equal(isOdd(15), true);
    });

    test('returns false if the number is not odd', function() {
      assert.equal(isOdd(10), false);
      assert.equal(isOdd(14), false);
    });
  });

  suite('#isVowel', function() {
    test('returns true if the letter is a vowel', function() {
      assert.equal(isVowel('a'), true);
      assert.equal(isVowel('e'), true);
      assert.equal(isVowel('i'), true);
      assert.equal(isVowel('o'), true);
      assert.equal(isVowel('u'), true);
    });

    test('returns false if the letter is not a vowel', function() {
      assert.equal(isVowel('z'), false);
      assert.equal(isVowel('b'), false);
      assert.equal(isVowel('d'), false);
      assert.equal(isVowel('y'), false);
    });
  });

  suite('#largestOfThree', function() {
    test('returns the largest argument by value', function() {
      assert.equal(largestOfThree(9, 6, 3), 9);
      assert.equal(largestOfThree(0, 7, 4), 7);
      assert.equal(largestOfThree(1, 2, 5), 5);
    });
  });

  suite('#longestOfThree', function() {
    test('returns the longest argument by length', function() {
      assert.equal(longestOfThree('eight', 'two', 'five'), 'eight');
      assert.equal(longestOfThree('zero', 'seven', 'four'), 'seven');
      assert.equal(longestOfThree('nine', 'six', 'three'), 'three');
    });
  });

  suite('#iceCreamPosition', function() {
    test('returns "not at all" if the ice cream flavor is cardamom', function() {
      assert.equal(iceCreamPosition('warm', 'cardamom'), 'not at all');
      assert.equal(iceCreamPosition('cold', 'cardamom'), 'not at all');
    });

    test('returns "on the side" if the pie temperature is warm', function() {
      assert.equal(iceCreamPosition('warm', 'vanilla'), 'on the side');
      assert.equal(iceCreamPosition('warm', 'chocolate'), 'on the side');
    });

    test('returns "on top" if the pie temperature is cold', function() {
      assert.equal(iceCreamPosition('cold', 'vanilla'), 'on top');
      assert.equal(iceCreamPosition('cold', 'chocolate'), 'on top');
    });
  });

  suite('#isLeapYear', function() {
    test('returns true if the number is a leap year, otherwise it does not', function() {
      assert.equal(isLeapYear(1900), true);
      assert.equal(isLeapYear(1996), true);
    });

    test('returns false if the number is not a leap year', function() {
      assert.equal(isLeapYear(2000), false);
      assert.equal(isLeapYear(1901), false);
      assert.equal(isLeapYear(2001), false);
    });
  });

  suite('#shout', function() {
    test('converts the argument to uppercase letter', function() {
      assert.equal(shout('whoo hoo'), 'WHOO HOO');
      assert.equal(shout('sOmeTHing'), 'SOMETHING');
    });
  });

  suite('#whisper', function() {
    test("converts the arguemnt to lowercase letters prefixed by 'shhh...'", function() {
      assert.equal(whisper('bAnanA peEl'), 'shhh... banana peel');
      assert.equal(whisper('Tracy Morgan'), 'shhh... tracy morgan');
    });
  });

  suite('#stopAt', function() {
    test('returns the first argument up to the last argument', function() {
      assert.equal(stopAt('check this out now', 'out'), 'check this');
      assert.equal(stopAt('turn on the TV', 'the'), 'turn on');
    });
  });

  suite('#capitalize', function() {
    test('returns the message with the first letter capitalized', function() {
      assert.equal(capitalize('secret bitcoin mine'), 'Secret bitcoin mine');
      assert.equal(capitalize('british football'), 'British football');
    });
  });

  suite('#leftPad5', function() {
    test('returns the argument with padded by spaces if its length is less than 5', function() {
      assert.equal(leftPad5('a'), '    a');
      assert.equal(leftPad5('go'), '   go');
      assert.equal(leftPad5('dog'), '  dog');
      assert.equal(leftPad5('tree'), ' tree');
    });

    test('returns the argument if its length is 5 or more characters', function() {
      assert.equal(leftPad5('socks'), 'socks');
      assert.equal(leftPad5('drawer'), 'drawer');
    });
  });

  suite('#superPicky', function() {
    test("returns 'Thanks! Got it.' if given a string", function() {
      assert.equal(superPicky('hello'), 'Thanks! Got it.');
      assert.equal(superPicky('there'), 'Thanks! Got it.');
    });

    test('returns an error message if given anything other than a string', function() {
      assert.equal(superPicky(1), 'I wanted a string, but all I got was a stinking number');
      assert.equal(superPicky(Math.random()), 'I wanted a string, but all I got was a stinking number');
      assert.equal(superPicky(true), 'I wanted a string, but all I got was a stinking boolean');
      assert.equal(superPicky(false), 'I wanted a string, but all I got was a stinking boolean');
      assert.equal(superPicky(function() {}), 'I wanted a string, but all I got was a stinking function');
      assert.equal(superPicky({}), 'I wanted a string, but all I got was a stinking object');
      assert.equal(superPicky([]), 'I wanted a string, but all I got was a stinking object');
    });
  });

  suite('#calculateTaxRate', function() {
    test('returns a warning if the status is incorrect', function() {
      assert.equal(calculateTaxRate(100, 'separate'), 'Better call an accountant');
      assert.equal(calculateTaxRate(100, 'head of household'), 'Better call an accountant');
    });

    test('returns a warning if the amount is over 74,900', function() {
      assert.equal(calculateTaxRate(74901, 'single'), 'Better call an accountant');
      assert.equal(calculateTaxRate(100000, 'joint'), 'Better call an accountant');
    });

    test('returns the correct tax rate for a single filer', function() {
      assert.equal(calculateTaxRate(1, 'single'), '10%');
      assert.equal(calculateTaxRate(100, 'single'), '10%');
      assert.equal(calculateTaxRate(9225, 'single'), '10%');
      assert.equal(calculateTaxRate(9226, 'single'), '15%');
      assert.equal(calculateTaxRate(15000, 'single'), '15%');
      assert.equal(calculateTaxRate(37450, 'single'), '15%');
    });

    test('returns the correct tax rate for a joint filer', function() {
      assert.equal(calculateTaxRate(1, 'joint'), '10%');
      assert.equal(calculateTaxRate(100, 'joint'), '10%');
      assert.equal(calculateTaxRate(18450, 'joint'), '10%');
      assert.equal(calculateTaxRate(18451, 'joint'), '15%');
      assert.equal(calculateTaxRate(25000, 'joint'), '15%');
      assert.equal(calculateTaxRate(74900, 'joint'), '15%');
    });
  });

  mocha.run();
};
