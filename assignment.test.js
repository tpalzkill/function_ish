window.onload = function() {
  mocha.setup('tdd');
  var assert = chai.assert;

  suite("#sum", function(){
    test("it adds two numbers", function(){
      assert.equal(sum(1,2), 3);
      assert.equal(sum(5,2), 7);
      assert.equal(sum(30,3), 33);
    });

    test("it works with negative numbers", function(){
      assert.equal(sum(-1,2), 1);
      assert.equal(sum(-1,-2), -3);
    });
  });

  suite("#product", function(){
    test("it multiplies two numbers", function(){
      assert.equal(product(1,2), 2);
      assert.equal(product(5,2), 10);
      assert.equal(product(30,3), 90);
    });
  });

  suite("#sumAndProduct", function(){
    test("adds the first two numbers, and multiplies that sum by the third", function(){
      assert.equal(sumAndProduct(4,4,4), 32);
      assert.equal(sumAndProduct(2,3,5), 25);
      assert.equal(sumAndProduct(2,3,5), 25);
    });
  });

  suite("#celsiusToFahrenheit", function() {
    test('returns the temperature in Fahrenheit', function() {
      assert.equal(celsiusToFahrenheit(30), 86);
      assert.equal(celsiusToFahrenheit(-5), 23);
    });
  });

  suite("#areaOfCircle", function() {
    test('returns the area of the circle', function() {
      assert.equal(areaOfCircle(10), 314.1592653589793);
      assert.equal(areaOfCircle(20), 1256.6370614359173);
    });
  });

  suite("#areaOfDonut", function() {
    test('returns the area of a donut', function() {
      assert.equal(areaOfDonut(10, 5), 235.61944901923448);
      assert.equal(areaOfDonut(20, 17), 348.716784548467);
    });
  });

  suite("#greet", function(){
    test("returns the full name", function(){
      assert.equal(greet("Bart", "Simpson"), "Hello, Bart Simpson!");
      assert.equal(greet("Mona", "Lisa"), "Hello, Mona Lisa!");
    });
  });

  suite("#toSentence", function(){
    test("returns a sentence with an oxford comma", function(){
      assert.equal(toSentence("Red", "Green", "Blue", true), "Red, Green, and Blue.");
      assert.equal(toSentence("Apples", "Oranges", "Bananas", true), "Apples, Oranges, and Bananas.");
    });
    test("returns a sentence with no oxford comma", function(){
      assert.equal(toSentence("Red", "Green", "Blue", false), "Red, Green and Blue.");
      assert.equal(toSentence("Apples", "Oranges", "Bananas", false), "Apples, Oranges and Bananas.");
    });
  });

  suite("#toDolla", function(){
    test("returns string representation of a number with 2 decimal places", function(){
      assert.equal(toDolla(10), "$10.00");
      assert.equal(toDolla(45), "$45.00");
    });
  });

  suite("#percentOf", function(){
    test("returns the percentage of one number over another", function(){
      assert.equal(percentOf(1, 5), "20.00%");
      assert.equal(percentOf(1,3), "33.33%");
    });
  });

  suite("#isStrictlyEqual", function(){
    test("returns true when the values and types are equal", function(){
      assert.equal(isStrictlyEqual(-1,-1), true);
      assert.equal(isStrictlyEqual("foo","foo"), true);
      assert.equal(isStrictlyEqual(null,null), true);
      assert.equal(isStrictlyEqual(true,true), true);
      assert.equal(isStrictlyEqual(false,false), true);
      assert.equal(isStrictlyEqual(undefined,undefined), true);
    });
    test("returns false when the values are equal but types are not", function(){
      assert.equal(isStrictlyEqual(-1,"-1"), false);
      assert.equal(isStrictlyEqual(true,"true"), false);
      assert.equal(isStrictlyEqual(undefined,'undefined'), false);
    });
    test("returns false when the values are not equal", function(){
      assert.equal(isStrictlyEqual(1,2), false);
      assert.equal(isStrictlyEqual(true,false), false);
    });
  });

  suite("#isLooselyEqual", function(){
    test("returns true when the values are equal even if the types are not", function(){
      assert.equal(isLooselyEqual(-1,"-1"), true);
      assert.equal(isLooselyEqual(false,0), true);
    });
    test("returns false when the values are not equal", function(){
      assert.equal(isLooselyEqual(1,"2"), false);
      assert.equal(isLooselyEqual("true",false), false);
    });
  });

  suite("#remainder", function(){
    test("returns the remainder of the first number divided by the second", function(){
      assert.equal(remainder(100,25), 0);
      assert.equal(remainder(100,30), 10);
    });
  });

  suite("#isEven", function(){
    test("returns true if the number is even", function(){
      assert.equal(isEven(10), true);
      assert.equal(isEven(14), true);
    });
    test("returns false if the number is not even", function(){
      assert.equal(isEven(11), false);
      assert.equal(isEven(15), false);
    });
  });

  suite("#isOdd", function(){
    test("returns true if the number is odd", function(){
      assert.equal(isOdd(11), true);
      assert.equal(isOdd(15), true);
    });
    test("returns false if the number is not odd", function(){
      assert.equal(isOdd(10), false);
      assert.equal(isOdd(14), false);
    });
  });

  suite("#isVowel", function(){
    test("returns true if a letter is a vowel", function(){
      assert.equal(isVowel("a"), true);
      assert.equal(isVowel("e"), true);
      assert.equal(isVowel("i"), true);
      assert.equal(isVowel("o"), true);
      assert.equal(isVowel("u"), true);
    });
    test("returns false if a letter is not a vowel", function(){
      assert.equal(isVowel("z"), false);
      assert.equal(isVowel("b"), false);
      assert.equal(isVowel("d"), false);
      assert.equal(isVowel("y"), false);
    });
  });

  suite("#biggestOfThree", function() {
    test('returns the biggest number', function() {
      assert.equal(biggestOfThree(1, 2, 5), 5);
      assert.equal(biggestOfThree(-3, 72, 42), 72);
    });
  });

  suite("#iceCreamPosition", function() {
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

  suite("#isLeapYear", function() {
    test("returns true if it's a leap year, otherwise it does not", function() {
      assert.equal(isLeapYear(1900), true);
      assert.equal(isLeapYear(2000), false);
      assert.equal(isLeapYear(1901), false);
      assert.equal(isLeapYear(2001), false);
      assert.equal(isLeapYear(1996), true);
    });
  });

  suite("#calculateTaxRate", function() {
    test('returns a warning if the status is incorrect', function() {
      assert.equal(calculateTaxRate(100, 'separate'), 'better call an accountant');
      assert.equal(calculateTaxRate(100, 'head of household'), 'better call an accountant');
    });
    test('returns a warning if the amount is over 74,900', function() {
      assert.equal(calculateTaxRate(74901, 'single'), 'better call an accountant');
      assert.equal(calculateTaxRate(100000, 'joint'), 'better call an accountant');
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
