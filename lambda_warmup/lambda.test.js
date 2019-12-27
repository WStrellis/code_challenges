const { sumPetYears, pets } = require('./pet_age');
describe('Calc Pet Age', function() {
  it('Test Dogs', function() {
    assert.equal(sumPetYears(pets, 'dog', 7), 154);
  });

  it('Test Cats', function() {
    assert.equal(sumPetYears(pets, 'cat', 4), 132);
  });

  it('Test Parakeet', function() {
    assert.equal(sumPetYears(pets, 'parakeet', 5), 65);
  });
});

const { moneyFormat } = require('./moneyFormat');
describe('Money Format', function() {
  it('Result has commas', function() {
    assert.equal(moneyFormat(3040.1298), '$3,040.13');
  });

  it('Result has commas extra long', function() {
    assert.equal(moneyFormat(309325240.432), '$309,325,240.43');
  });

  it('Result does not have commas', function() {
    assert.equal(moneyFormat(40.33), '$40.33');
  });

  it('Input does not have decimal', function() {
    assert.equal(moneyFormat(63), '$63.00');
  });

  it('Input is greater than 3 digits but doesnt have decimal', function() {
    assert.equal(moneyFormat(6893), '$6,893.00');
  });
});

const rotateImage = require('./rotate-image');
describe.only('Tests for rotateImage', function() {
  it('Test 1', function() {
    const expected = [
      [2, 4],
      [1, 3]
    ];
    const actual = rotateImage([
      [1, 2],
      [3, 4]
    ]);
    expect(actual).to.deep.equal(expected);
  });

  it('Test 2', function() {
    const expected = [
      [9, 0, 1, 2, 3],
      [9, 0, 1, 2, 3],
      [5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ];

    const actual = rotateImage([
      [1, 1, 5, 9, 9],
      [2, 2, 6, 0, 0],
      [3, 3, 7, 1, 1],
      [4, 4, 8, 2, 2],
      [5, 5, 9, 3, 3]
    ]);
    expect(actual).to.deep.equal(expected);
  });
});
