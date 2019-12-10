const assert = require('chai').assert;
const expect = require('chai').expect;

const two_sum = require('./two_sum');
describe('Tests for two_sum', function() {
  it('Test for [1,2,3]', function() {
    assert.sameMembers(two_sum([1, 2, 3], 4), [0, 2]);
  });

  it('Test for [2,2,3]', function() {
    assert.sameMembers(two_sum([2, 2, 3], 4), [0, 1]);
  });

  it('Test for [1234, 5678, 9012]', function() {
    assert.sameMembers(two_sum([1234, 5678, 9012], 14690), [1, 2]);
  });
});

const persistence = require('./persistence');
describe('Basic tests', function() {
  it('Test 1', function() {
    assert.equal(persistence(39), 3);
  });
  it('Test 2', function() {
    assert.equal(persistence(4), 0);
  });
  it('Test 3', function() {
    assert.equal(persistence(25), 2);
  });
  it('Test 4', function() {
    assert.equal(persistence(999), 4);
  });
});

const spinWords = require('./spin_words');
describe('Tests for spinWords', function() {
  it('Test 1', function() {
    assert.equal(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
  });

  it('Test 2', function() {
    assert.equal(spinWords('This is a test'), 'This is a test');
  });

  it('Test 3', function() {
    assert.equal(spinWords('This is another test'), 'This is rehtona test');
  });

  it('Test 4', function() {
    assert.equal(
      spinWords('Just kidding there is still one more'),
      'Just gniddik ereht is llits one more'
    );
  });
});

const isValidWalk = require('./tenMinuteWalk');
describe('Tests for isValidWalk', function() {
  it('Test 1', function() {
    expect(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
      'should return false'
    ).to.be.false;
  });

  it('Test 2', function() {
    expect(isValidWalk(['w']), 'should return false').to.be.false;
  });

  it('Test 3', function() {
    expect(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return false'
    ).to.be.false;
  });

  it('Test 4', function() {
    expect(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return true'
    ).to.be.true;
  });
});

const easeTheBroker = require('./easeTheStockBroker');
describe('Tests for easeTheStockBroker', function() {
  it('Test 1', function() {
    const expected =
      'Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;';
    const actual = easeTheBroker(
      'GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S'
    );
    expect(actual).to.equal(expected);
  });

  it('Test 2', function() {
    const expected = 'Buy: 29499 Sell: 0';
    const actual = easeTheBroker(
      'ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B'
    );
    expect(actual).to.equal(expected);
  });
});

const bears = require('./pairs_of_bears');
describe.only('Tests for pairs_of_bears', function() {
  it('Test 1', function() {
    const expected = ['B8B8B8', false];
    const actual = bears(7, '8j8mBliB8gimjB8B8jlB');
    expect(actual)
      .to.be.a('array')
      .that.includes.ordered.members(expected);
  });
  it('Test 2', function() {
    const expected = ['8BB8B8B88B', true];
    const actual = bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd');
    expect(actual)
      .to.be.a('array')
      .that.includes.ordered.members(expected);
  });
  it('Test 3', function() {
    const expected = ['', false];
    const actual = bears(8, '8');
    expect(actual)
      .to.be.a('array')
      .that.includes.ordered.members(expected);
  });
});
