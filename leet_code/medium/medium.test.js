function convert(a) {
    return a.map(i => JSON.stringify(i))
}

const allPathsSourceTarget = require('./allPathsFromSourceToTarget')
describe('Tests for allPathsSourceTarget', function () {
    it('Test 1', function () {
        // convert to array of strings
        const expected = convert([[0, 1, 3], [0, 2, 3]])

        let actual = allPathsSourceTarget([[1, 2], [3], [3], []])
        // convert to array of strings
        actualJSON = convert(actual)

        expect(actualJSON.length).to.equal(expected.length)
        expect(actualJSON).to.include.members(expected)
    })
    it('Test 2', function () {
        const expected = convert([[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]])
        const actual = convert(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))
        expect(actual.length).to.equal(expected.length)
        expect(actual).to.have.members(expected)
    })

})