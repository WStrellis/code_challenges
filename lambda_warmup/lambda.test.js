const { sumPetYears, pets } = require('./pet_age')
describe('Calc Pet Age', function() {
  it('Test Dogs', function() {
    assert.equal(sumPetYears(pets, 'dog', 7), 154)
  })

  it('Test Cats', function() {
    assert.equal(sumPetYears(pets, 'cat', 4), 132)
  })

  it('Test Parakeet', function() {
    assert.equal(sumPetYears(pets, 'parakeet', 5), 65)
  })
})

const { moneyFormat } = require('./moneyFormat')
describe.only('Money Format', function() {
  it('Result has commas', function() {
    assert.equal(moneyFormat(3040.1298), '$3,040.13')
  })

  it('Result has commas extra long', function() {
    assert.equal(moneyFormat(309325240.432), '$309,325,240.43')
  })

  it('Result does not have commas', function() {
    assert.equal(moneyFormat(40.33), '$40.33')
  })

  it('Input does not have decimal', function() {
    assert.equal(moneyFormat(63), '$63.00')
  })

  it('Input is greater than 3 digits but doesnt have decimal', function() {
    assert.equal(moneyFormat(6893), '$6,893.00')
  })
})
