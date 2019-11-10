const assert = require('chai').assert
const expect = require('chai').expect

const two_sum = require('./two_sum')
describe.skip('Tests for two_sum', function() {
  it('Test for [1,2,3]', function() {
    assert.sameMembers(two_sum([1, 2, 3], 4), [0, 2])
  })

  it('Test for [2,2,3]', function() {
    assert.sameMembers(two_sum([2, 2, 3], 4), [0, 1])
  })

  it('Test for [1234, 5678, 9012]', function() {
    assert.sameMembers(two_sum([1234, 5678, 9012], 14690), [1, 2])
  })
})

const persistence = require('./persistence')
describe('Basic tests', function() {
  it('Test 1', function() {
    assert.equal(persistence(39), 3)
  })
  it('Test 2', function() {
    assert.equal(persistence(4), 0)
  })
  it('Test 3', function() {
    assert.equal(persistence(25), 2)
  })
  it('Test 4', function() {
    assert.equal(persistence(999), 4)
  })
})

const spinWords = require('./spin_words')
describe.skip('Tests for spinWords', function() {
  it('Test 1', function() {
    assert.equal(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw')
  })

  it('Test 2', function() {
    assert.equal(spinWords('This is a test'), 'This is a test')
  })

  it('Test 3', function() {
    assert.equal(spinWords('This is another test'), 'This is rehtona test')
  })

  it('Test 4', function() {
    assert.equal(
      spinWords('Just kidding there is still one more'),
      'Just gniddik ereht is llits one more'
    )
  })
})

const isValidWalk = require('./tenMinuteWalk')
describe.only('Tests for isValidWalk', function() {
  it('Test 1', function() {
    expect(
      isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
      'should return false'
    ).to.be.false
  })

  it('Test 2', function() {
    expect(isValidWalk(['w']), 'should return false').to.be.false
  })

  it('Test 3', function() {
    expect(
      isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return false'
    ).to.be.false
  })

  it('Test 4', function() {
    expect(
      isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
      'should return true'
    ).to.be.true
  })
})
