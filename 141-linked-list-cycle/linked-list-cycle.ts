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

function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;
    let track: Map<ListNode, boolean> = new Map();
    let current = head;
   while(current !== null) // incase cycle doesnt exist
   {
    if (track.has(current)){
        return true;
    }
    track.set(current, true);
    current = current.next;
   }

   return false;


};