/*
 * Complete the 'removeNodes' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST listHead
 *  2. INTEGER x
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 
 */
class LinkNode {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkList {
    constructor(head = null) {
        this.head = head
        this.tail = head ? head : null
        this.addLink = this.addLink.bind(this)
    }

    addLink(data) {
        const newLink = new LinkNode(data)
        if (this.tail) {
            this.tail.next = newLink
            this.tail = newLink
        } else {
            this.head = this.tail = newLink
        }
    }
}
function createLL(nums) {
    let newLL = [new LinkNode(nums[0])]
    for (let i = 0; i < newLL.length - 1; i++) {
        newLL[i].next = new LinkNode(newLl[i + 1])
    }
    return newLL[0]
}

function removeNodes(listHead, x) {
    let filtered = null
    let current = listHead
    while (current) {
        if (current.data <= x) {
            // if filtered is null set filtered to current
            if (!filtered) {
                filtered = current
                filtered.next = null
            }
            // else find last link in filtered and add current to end
            else {
                let lastNode = filtered
                while (lastNode) {
                    if (lastNode.next) lastNode = lastNode.next
                }
                lastNode.next = current
                current.next = null
            }
        }
        current = current.next
    }
    return filtered
}

module.exports = { LinkNode, removeNodes, createLL }
/* 
function removeNodes(listHead, x) {
    // loop over linked list until next is null
    // track listHead
    let listHeadCopy = listHead
    // store previous
    let prev = null
    // if current node value is greater than x set previous.next to current.next
    let current = listHeadCopy
    while (current) {
        if (current.data > x) {
            if (prev) {
                prev.next = current.next
                current = prev.next
            } else {
                // if the list head is greater than x set listHead to the next item.
                listHeadCopy = current.next
                prev = listHeadCopy
                current = listHeadCopy.next
            }
        } else {
            // move to next node
            prev = current
            current = current.next
        }
    }

    return listHeadCopy
}
 */
