const allPathsSourceTarget = require('./allPathsFromSourceToTarget')
describe('Tests for allPathsSourceTarget'), function () {
    it('Test 1', function () {
        const expected = [[0, 1, 3], [0, 2, 3]]
        const actual = allPathsSourceTarget([[1, 2], [3], [3], []])
        assert.lengthOf(actual, expected.length)
        expect(actual.length).to.equal(expected.length)
    })
}