const bubbleSort = require('./bubble_sort')
describe.skip('Tests for BubbleSort', function() {
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
describe.skip('Tests for Merge Sort', function() {
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

describe('Tests for ListNode', function() {
    let node = null
    let node2 = null
    let node3 = null

    beforeEach(function() {
        node = new ListNode(7)
        node2 = new ListNode(10)
        node3 = new ListNode(25)
    })

    afterEach(function() {
        node = null
        node2 = null
        node3 = null
    })

    it('should be an instance of ListNode', function() {
        expect(node instanceof ListNode).to.eq(true)
    })

    it('should insert a node after this node', function() {
        node.insertAfter(node2)

        expect(node.next).to.eq(node2)
        expect(node2.prev).to.eq(node)
    })

    it('Should insert after node with existing neighbor', function() {
        node.insertAfter(node2)
        expect(node.next).to.eq(node2)
        expect(node2.prev).to.eq(node)

        node.insertAfter(node3)
        expect(node.next).to.eq(node3)
        expect(node3.next).to.eq(node2)
        expect(node3.prev).to.eq(node)
        expect(node2.prev).to.eq(node3)
    })

    it('should have next attr of null if inserted to the back', function() {
        node.insertAfter(node2)
        expect(node2.next).to.eq(null)
    })

    it('should insert a node before this node', function() {
        node.insertBefore(node2)

        expect(node.prev).to.eq(node2)
        expect(node2.next).to.eq(node)
    })

    it('Should insert before node with existing neighbor', function() {
        node.insertAfter(node2)
        expect(node.next).to.eq(node2)
        expect(node2.prev).to.eq(node)

        node2.insertBefore(node3)
        expect(node.next).to.eq(node3)
        expect(node3.next).to.eq(node2)
        expect(node3.prev).to.eq(node)
        expect(node2.prev).to.eq(node3)
    })

    it('should have prev attr of null if inserted to front', function() {
        node.insertBefore(node2)
        expect(node2.prev).to.eq(null)
    })

    it('should delete a node from the front', function() {
        node.insertAfter(node2)
        expect(node2.prev).to.eq(node)
        node.delete()
        expect(node2.prev).to.eq(null)
    })

    it('should delete a node from the back', function() {
        expect(node.next).to.eq(null)
        node.insertAfter(node2)
        expect(node.next).to.eq(node2)
        node2.delete()
        expect(node.next).to.eq(null)
    })

    it('should delete a node from between two nodes', function() {
        node.insertAfter(node2)
        node2.insertAfter(node3)
        expect(node2.prev).to.eq(node)
        expect(node2.next).to.eq(node3)

        node2.delete()

        expect(node.next).to.eq(node3)
        expect(node3.prev).to.eq(node)
    })
})

describe('Tests for Double Linked List', function() {
    let dll = null
    let dllSingle = null
    beforeEach(function() {
        dll = new DoubleLL()
        dllSingle = new DoubleLL(7)
    })

    afterEach(function() {
        dll = null
        dllSingle = null
    })

    it('dll should be instance of DoubleLL', function() {
        expect(dll instanceof DoubleLL).to.eq(true)
    })

    it('dll head and tail should be null if initialized empty', function() {
        expect(dll.head).to.eq(null)
    })

    it('dll head and tail should be same node if initalized with node', function() {
        expect(Object.is(dllSingle.head, dllSingle.tail)).to.eq(true)
    })

    it('should have length 0 when initialized empty', function() {
        expect(dll.length).to.eq(0)
    })

    it('should have  length 1 when initialized with value', function() {
        expect(dllSingle.length).to.eq(1)
    })
})
