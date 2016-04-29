  // TODO:
  // we give them an alphabet of uppercase letters
  // give them a real word at the end and they have to encode it
  // give them a real encrypted message and they decode it

  suite("#ceaserAdd13", function() {
    // 97 - 122
    test("returns null if the number is 96 or less", function() {
      assert.equal(ceaserCipherEncodeOne(100, 'separate'), 'better call an accountant');
    });
    test("returns null if the number is 123 or higher", function() {
      assert.equal(ceaserCipherEncodeOne(100, 'separate'), 'better call an accountant');
    });
    test("returns the number plus 13 if it's less than 110", function() {
      assert.equal(ceaserCipherEncodeOne(100, 'separate'), 'better call an accountant');
      assert.equal(ceaserCipherEncodeOne(100, 'head of household'), 'better call an accountant');
    });
    test("cycles back to 97 if ", function() {
      assert.equal(ceaserCipherEncodeOne(100, 'separate'), 'better call an accountant');
      assert.equal(ceaserCipherEncodeOne(100, 'head of household'), 'better call an accountant');
    });
  });
