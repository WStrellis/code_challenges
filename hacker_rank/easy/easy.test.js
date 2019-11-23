const { breakingRecords } = require("./breaking_records");
describe("Test breakingRecords", function() {
  it("Test 1", function() {
    assert.equal(breakingRecords("3 4 21 36 10 28 35 5 24 42"), "4 0");
  });

  it("Test 2", function() {
    assert.equal(breakingRecords("10 5 20 20 4 5 2 25 1"), "2 4");
  });
});

const sockMerchant = require("./sock_merchant");
describe("Tests for sockMerchant", function() {
  it("Test 1", function() {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.equal(3);
  });
});

const jumpingOnClouds = require("./jumpingOnClouds");
describe.only("Tests for jumping on clouds", function() {
  it("Test 1", function() {
    const expected = 3;
    const actual = jumpingOnClouds([0, 0, 0, 0, 1, 0]);
    expect(actual).to.equal(expected);
  });

  it("Test 2", function() {
    const expected = 4;
    const actual = jumpingOnClouds(0, 0, 1, 0, 0, 1, 0);
    expect(actual).to.equal(expected);
  });
});
