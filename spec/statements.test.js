var expect = chai.expect;

describe("#sum", function(){
  xit("adds two numbers", function(){
    expect(sum(1,2)).to.equal(3);
  });
  xit("works with negative numbers", function(){
    expect(sum(-1,2)).to.equal(1);
  });
});

describe("#isEqual", function(){
  xit("compares numbers", function(){
    expect(isEqual(1,2)).to.equal(false);
  });
  xit("compares strings", function(){
    expect(isEqual(-1,-1)).to.equal(true);
  });
  xit("compares booleans", function(){
    expect(isEqual(true,true)).to.equal(true);
  });
  xit("compares type and equality (using ===)", function(){
    expect(isEqual("1",1)).to.equal(false);
  });
});

describe("#isEven", function(){
  xit("returns true if a number is even", function(){
    expect(isEven(2)).to.equal(true);
  });
  xit("returns false if a number is not even", function(){
    expect(isEven(3)).to.equal(false);
  });
});

describe("#isDivisible", function(){
   xit("returns true if a number is divisible by the second argument", function(){
    expect(isDivisible(2,2)).to.equal(true);
  });
  xit("returns false if a number is not divisible by the second argument", function(){
    expect(isDivisible(3,2)).to.equal(false);
  });
});

describe("#discountPercentage", function(){
  xit("returns the discount for an amount", function(){
    expect(discountPercentage(100,5)).to.equal(5);
  });
  xit("returns the discount for an amount", function(){
    expect(discountPercentage(200,5)).to.equal(10);
  });
  xit("returns a warning if the percentage is below 0", function(){
    expect(discountPercentage(3,-5)).to.equal("please enter a number between 0 and 100");
  });
  xit("returns a warning if the percentage is above 100", function(){
    expect(discountPercentage(3,102)).to.equal("please enter a number between 0 and 100");
  });
});

describe("#isVowel", function(){
  xit("returns true if a letter is a vowel", function(){
    expect(isVowel("a")).to.equal(true);
  });
  xit("returns false if a letter is not a vowel", function(){
    expect(isVowel("z")).to.equal(false);
  });
});

describe("#celsiusToFahrenheit", function() {
  xit('returns 86 when given 30', function() {
    expect(celsiusToFahrenhexit(30)).to.equal(86);
  });
  xit('returns 23 when given -5', function() {
    expect(celsiusToFahrenhexit(-5)).to.equal(23);
  });
});

describe("#biggestOfThree", function() {
  xit('returns 5 when given 1, 2, 5', function() {
    expect(biggestOfThree(1, 2, 5)).to.equal(5);
  });
  xit('returns 72 when given -3, 72, 42', function() {
    expect(biggestOfThree(-3, 72, 42)).to.equal(72);
  });
});
