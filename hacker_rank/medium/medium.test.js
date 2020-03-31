const strokesRequired = require('./bucket_paint')
describe.only('Tests for strokesRequired', function () {
    it('test 1', function () {
        let actual = strokesRequired(['aabba', 'aabba', 'aaacb'])
        let expected = 5
        expect(actual).to.equal(expected)
    })
    it('test 2', function () {
        let actual = strokesRequired(['aaa', 'aaa', 'aaa'])
        let expected = 1
        expect(actual).to.equal(expected)
    })
})
