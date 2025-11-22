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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) {
        return null;
    }
    if (list1 === null || list2 === null) {
        return (list1 === null) ? list2: list1;
    }
    
    
    let pointerList1: ListNode | null = list1;
    let pointerList2: ListNode | null = list2;
    let head: ListNode | null = null;
    

    if ( pointerList1.val > pointerList2.val) {
                head = pointerList2;
                pointerList2 = pointerList2.next;
            } else {
                head = pointerList1;
                pointerList1 = pointerList1.next;
            }

    let current = head;

    while(pointerList1 !== null && pointerList2 !== null) {
         if ( pointerList1.val > pointerList2.val) {
                current.next = pointerList2;
                current = current.next;
                pointerList2 = pointerList2.next;
            } else {
                current.next = pointerList1;
                current = current.next;
                pointerList1 = pointerList1.next;
            }
    }
    if (pointerList1 !== null || pointerList2 !== null) {
        let next = (pointerList1 === null) ? pointerList2 : pointerList1;
        current.next = next;
        current = current.next;
    }

    return head;
};