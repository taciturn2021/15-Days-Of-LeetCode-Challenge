/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head;
    let currentNode = head; // 1
    let prevNode = null;

    while(currentNode != null) {
        let nextNode = currentNode.next; // 2 3 null
        currentNode.next = prevNode; // null 1 2
        prevNode = currentNode;      // 1 2 3
        currentNode = nextNode;      // 2 3
    }
    return prevNode;
};
