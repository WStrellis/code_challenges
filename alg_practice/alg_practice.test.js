const bubbleSort = require('./bubble_sort');
describe('Tests for BubbleSort', function() {
  it('Should sort an array in ascending order', function() {
    const expected = [1, 2, 3, 4];
    const actual = bubbleSort([4, 1, 3, 2]);
    expect(actual)
      .to.be.an('array')
      .with.ordered.members(expected);
  });

  it('Should sort an array in descending order', function() {
    const expected = [4, 3, 2, 1];
    const actual = bubbleSort([3, 1, 4, 2], 'd');
    expect(actual)
      .to.be.an('array')
      .with.ordered.members(expected);
  });
});
