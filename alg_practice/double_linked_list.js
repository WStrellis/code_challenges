class ListNode {
    // constructor({ ...args }) {
    constructor(value, next = null, prev = null) {
        this.value = value
        this.prev = prev
        this.next = next

        this.insert_after = this.insert_after.bind(this)
        this.insert_before = this.insert_before.bind(this)
        this.delete = this.delete.bind(this)
    }

    insert_after() {} //end method insert_after

    insert_before() {} //end method insert_before

    delete() {} //end method delete
} //end class ListNode

const myNode = new ListNode(10)
console.log(myNode.value)
console.log(myNode.next)
console.log(myNode.prev)

const my2ndNode = new ListNode(25, myNode)
console.log(my2ndNode.value)
console.log(my2ndNode.next.value)
console.log(my2ndNode.prev)
