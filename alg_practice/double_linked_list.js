class ListNode {
    constructor(value, next = null, prev = null) {
        this.value = value
        this.prev = prev
        this.next = next

        this.insertAfter = this.insertAfter.bind(this)
        this.insertBefore = this.insertBefore.bind(this)
        this.delete = this.delete.bind(this)
    }

    insertAfter(newNode) {
        // update link of next node
        if (this.next) {
            this.next.prev = newNode
            newNode.next = this.next
        }
        this.next = newNode
        newNode.prev = this
    } //end method insert_after

    insertBefore(newNode) {
        // update link of  prev node
        if (this.prev) {
            this.prev.next = newNode
            newNode.prev = this.prev
        }
        this.prev = newNode
        newNode.next = this
    } //end method insert_before

    delete() {
        if (this.prev && this.next) {
            this.next.prev = this.prev
            this.prev.next = this.next
        } else if (this.next && !this.prev) this.next.prev = null
        else if (!this.next && this.prev) this.prev.next = null
    } //end method delete
} //end class ListNode

class DoubleLL {
    constructor(value = null) {
        const initNode = value ? new ListNode(value) : null
        this.head = initNode
        this.tail = initNode
        this.length = initNode ? 1 : 0
    }

    insert(value) {
        /* add an item to the head of the dll */
    } //end insert

    remove(value) {
        /* remove an item from the tail of the dll */
    } // end remove
}

module.exports = { ListNode, DoubleLL }
