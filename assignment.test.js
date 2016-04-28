window.onload = function() {
  mocha.setup('tdd');
  var assert = chai.assert;

  suite('Testing with TDD', function() {
    //  math functions add / subtract / multiply / divide / area
    suite('Add', function() {
      test('it should add 15 to the input', function() {
        assert.equal(add(34), 49);
      });
    });

    suite('Subtract', function() {
      test('it should subtract 10 from the input', function() {
        assert.equal(subtract(49), 39);
      });
    });
  });

  var expect = chai.expect;

  // suite("#sum", function(){
  //   test("adds two numbers", function(){
  //     expect(sum(1,2)).to.equal(3);
  //   });
  //   test("works with negative numbers", function(){
  //     expect(sum(-1,2)).to.equal(1);
  //   });
  // });
  //
  // suite("#isEqual", function(){
  //   test("compares numbers", function(){
  //     expect(isEqual(1,2)).to.equal(false);
  //   });
  //   test("compares strings", function(){
  //     expect(isEqual(-1,-1)).to.equal(true);
  //   });
  //   test("compares booleans", function(){
  //     expect(isEqual(true,true)).to.equal(true);
  //   });
  //   test("compares type and equality (using ===)", function(){
  //     expect(isEqual("1",1)).to.equal(false);
  //   });
  // });
  //
  // suite("#isEven", function(){
  //   test("returns true if a number is even", function(){
  //     expect(isEven(2)).to.equal(true);
  //   });
  //   test("returns false if a number is not even", function(){
  //     expect(isEven(3)).to.equal(false);
  //   });
  // });
  //
  // suite("#isDivisible", function(){
  //    test("returns true if a number is divisible by the second argument", function(){
  //     expect(isDivisible(2,2)).to.equal(true);
  //   });
  //   test("returns false if a number is not divisible by the second argument", function(){
  //     expect(isDivisible(3,2)).to.equal(false);
  //   });
  // });
  //
  // suite("#discountPercentage", function(){
  //   test("returns the discount for an amount", function(){
  //     expect(discountPercentage(100,5)).to.equal(5);
  //   });
  //   test("returns the discount for an amount", function(){
  //     expect(discountPercentage(200,5)).to.equal(10);
  //   });
  //   test("returns a warning if the percentage is below 0", function(){
  //     expect(discountPercentage(3,-5)).to.equal("please enter a number between 0 and 100");
  //   });
  //   test("returns a warning if the percentage is above 100", function(){
  //     expect(discountPercentage(3,102)).to.equal("please enter a number between 0 and 100");
  //   });
  // });
  //
  // suite("#isVowel", function(){
  //   test("returns true if a letter is a vowel", function(){
  //     expect(isVowel("a")).to.equal(true);
  //   });
  //   test("returns false if a letter is not a vowel", function(){
  //     expect(isVowel("z")).to.equal(false);
  //   });
  // });
  //
  // suite("#celsiusToFahrenheit", function() {
  //   test('returns 86 when given 30', function() {
  //     expect(celsiusToFahrenhetest(30)).to.equal(86);
  //   });
  //   test('returns 23 when given -5', function() {
  //     expect(celsiusToFahrenhetest(-5)).to.equal(23);
  //   });
  // });
  //
  // suite("#biggestOfThree", function() {
  //   test('returns 5 when given 1, 2, 5', function() {
  //     expect(biggestOfThree(1, 2, 5)).to.equal(5);
  //   });
  //   test('returns 72 when given -3, 72, 42', function() {
  //     expect(biggestOfThree(-3, 72, 42)).to.equal(72);
  //   });
  // });


  mocha.run();

};
