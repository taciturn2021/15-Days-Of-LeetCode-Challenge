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
    if (head === null) return null;
    if (head.next === null) return head;

    let current = head;
    let prevNode: ListNode | null = null;
    let nextNode: ListNode | null = null;
    while(current.next !== null){
        nextNode = current.next; // 2 3 4
        current.next = prevNode; // null 1 2
        prevNode = current;      // 1 2 3
        current = nextNode;      // 2 3 
    }
    current.next = prevNode;
    return current
};