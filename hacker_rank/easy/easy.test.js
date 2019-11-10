const { breakingRecords } = require('./breaking_records')
describe('Test breakingRecords', function() {
  it('Test 1', function() {
    assert.equal(breakingRecords('3 4 21 36 10 28 35 5 24 42'), '4 0')
  })

  it('Test 2', function() {
    assert.equal(breakingRecords('10 5 20 20 4 5 2 25 1'), '2 4')
  })
})
