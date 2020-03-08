const bubbleSort = require('./bubble_sort')
describe('Tests for BubbleSort', function() {
    it('Should sort an array in ascending order', function() {
        const expected = [1, 2, 3, 4]
        const actual = bubbleSort([4, 1, 3, 2])
        expect(actual)
            .to.be.an('array')
            .with.ordered.members(expected)
    })

    it('Should sort an array in descending order', function() {
        const expected = [4, 3, 2, 1]
        const actual = bubbleSort([3, 1, 4, 2], 'd')
        expect(actual)
            .to.be.an('array')
            .with.ordered.members(expected)
    })
})

const mergeSort = require('./merge_sort')
describe('Tests for Merge Sort', function() {
    it('Should sort array 1', function() {
        const expected = [1, 2, 3, 4]
        const actual = mergeSort([3, 1, 4, 2])
        expect(actual)
            .to.be.an('array')
            .with.ordered.members(expected)
    })

    it('Should sort array 2', function() {
        const expected = [85, 435, 2323, 443, 54, 32, 554, 755, 233].sort(
            (a, b) => a - b
        )
        const actual = mergeSort([85, 435, 2323, 443, 54, 32, 554, 755, 233])
        expect(actual)
            .to.be.an('array')
            .with.ordered.members(expected)
    })
})

const { DoubleLL, ListNode } = require('./double_linked_list')
describe.only('Tests for Double Linked List', function() {
    it('dll should be instance of DoubleLL', function() {
        const dll = new DoubleLL()
        expect(dll instanceof DoubleLL).to.be(true)
    })

    it('dll head and tail should be null if initialized empty', function() {
        const dll = new DoubleLL()
        expect(dll.head).to.be(null)
    })

    it('dll head and tail should be same node if initalized with node', function() {
        const dll = new DoubleLL(7)
        expect(Object.is(dll.head, dll.tail)).to.be(true)
    })
})
