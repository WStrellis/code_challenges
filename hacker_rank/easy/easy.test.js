const { breakingRecords } = require('./breaking_records');
describe('Test breakingRecords', function() {
  it('Test 1', function() {
    assert.equal(breakingRecords('3 4 21 36 10 28 35 5 24 42'), '4 0');
  });

  it('Test 2', function() {
    assert.equal(breakingRecords('10 5 20 20 4 5 2 25 1'), '2 4');
  });
});

const sockMerchant = require('./sock_merchant');
describe('Tests for sockMerchant', function() {
  it('Test 1', function() {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.equal(3);
  });
});

const jumpingOnClouds = require('./jumpingOnClouds');
describe('Tests for jumping on clouds', function() {
  it('Test 1', function() {
    const expected = 3;
    const actual = jumpingOnClouds([0, 0, 0, 0, 1, 0]);
    expect(actual).to.equal(expected);
  });

  it('Test 2', function() {
    const expected = 4;
    const actual = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
    expect(actual).to.equal(expected);
  });
});

const repeatedString = require('./repeatedString');
describe('Tests for repeated string', function() {
  it('Test 1', function() {
    const expected = 7;
    const actual = repeatedString('aba', 10);
    expect(actual).to.equal(expected);
  });

  it('Test 2', function() {
    const expected = 10000000000;
    const actual = repeatedString('a', 10000000000);
    expect(actual).to.equal(expected);
  });

  it('Test 3', function() {
    const expected = 164280;
    const actual = repeatedString('gfcaaaecbg', 547602);
    expect(actual).to.equal(expected);
  });

  it('Test 4', function() {
    const expected = 0;
    const actual = repeatedString('gfcecbg', 949602);
    expect(actual).to.equal(expected);
  });
});

const countingValleys = require('./countingValleys');
describe.only('Tests for countingValleys', function() {
  it('Test 1: one valley', function() {
    const expected = 1;
    const actual = countingValleys(8, 'UDDDUDUU');
    expect(actual).to.equal(expected);
  });

  it('Test 2: no valleys', function() {
    const expected = 0;
    const actual = countingValleys(4, 'UUDD');
    expect(actual).to.equal(expected);
  });

  it('Test 3: two valleys', function() {
    const expected = 2;
    const actual = countingValleys(8, 'UDDUDDUD');
    expect(actual).to.equal(expected);
  });
});
