const { breakingRecords } = require('./breaking_records')
describe('Test breakingRecords', function() {
  it('Test 1', function() {
    assert.equal(breakingRecords('3 4 21 36 10 28 35 5 24 42'), '4 0')
  })

  it('Test 2', function() {
    assert.equal(breakingRecords('10 5 20 20 4 5 2 25 1'), '2 4')
  })
})

const sockMerchant = require('./sock_merchant')
describe('Tests for sockMerchant', function() {
  it('Test 1', function() {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.equal(3)
  })
})

const jumpingOnClouds = require('./jumpingOnClouds')
describe('Tests for jumping on clouds', function() {
  it('Test 1', function() {
    const expected = 3
    const actual = jumpingOnClouds([0, 0, 0, 0, 1, 0])
    expect(actual).to.equal(expected)
  })

  it('Test 2', function() {
    const expected = 4
    const actual = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
    expect(actual).to.equal(expected)
  })
})

const repeatedString = require('./repeatedString')
describe('Tests for repeated string', function() {
  it('Test 1', function() {
    const expected = 7
    const actual = repeatedString('aba', 10)
    expect(actual).to.equal(expected)
  })

  it('Test 2', function() {
    const expected = 10000000000
    const actual = repeatedString('a', 10000000000)
    expect(actual).to.equal(expected)
  })

  it('Test 3', function() {
    const expected = 164280
    const actual = repeatedString('gfcaaaecbg', 547602)
    expect(actual).to.equal(expected)
  })

  it('Test 4', function() {
    const expected = 0
    const actual = repeatedString('gfcecbg', 949602)
    expect(actual).to.equal(expected)
  })
})

const countingValleys = require('./countingValleys')
describe('Tests for countingValleys', function() {
  it('Test 1: one valley', function() {
    const expected = 1
    const actual = countingValleys(8, 'UDDDUDUU')
    expect(actual).to.equal(expected)
  })

  it('Test 2: no valleys', function() {
    const expected = 0
    const actual = countingValleys(4, 'UUDD')
    expect(actual).to.equal(expected)
  })

  it('Test 3: two valleys', function() {
    const expected = 2
    const actual = countingValleys(8, 'UDDUDDUD')
    expect(actual).to.equal(expected)
  })
})

const checkMagazine = require('./checkMagazine')
describe('Tests for check magazine', function() {
  it('Test 1: ', function() {
    const expected = 'Yes'
    const actual = checkMagazine(
      ['give', 'me', 'me', 'one', 'grand', 'today', 'night'],
      ['give', 'one', 'grand', 'today']
    )
    expect(actual).to.equal(expected)
  })

  it('Test 2: ', function() {
    const expected = 'No'
    const actual = checkMagazine(
      ['two', 'times', 'three', 'is', 'not', 'four'],
      ['two', 'times', 'two', 'is', 'four']
    )
    expect(actual).to.equal(expected)
  })
})

const maximumToys = require('./mark_and_toys')
describe('Tests for maximumToys', function() {
  it('Test 1: ', function() {
    const expected = 4
    const actual = maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)
    expect(actual).to.equal(expected)
  })
})

const kangaroo = require('./kangaroo')
describe.only('Tests for kangaroo', function() {
  it('Test 1', function() {
    expect(kangaroo(0, 3, 4, 2)).to.eq('YES')
  })

  it('Test 2', function() {
    expect(kangaroo(0, 2, 5, 3)).to.eq('NO')
  })

  it('Test 3', function() {
    expect(kangaroo(4523, 8092, 9419, 8076)).to.eq('YES')
  })

  it('Test 4', function() {
    expect(kangaroo(43, 2, 70, 2)).to.eq('NO')
  })
})
