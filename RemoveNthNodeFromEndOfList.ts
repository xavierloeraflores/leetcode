// LeetCode: 19. Remove Nth Node From End of List
// Blind 75
// link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// LinkedList, Brute Force
// Time: O(n)
// Space: O(1)

/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
  }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Find Length & Final Index
    let cur = head
    let len = 1
    while(cur != null){
        len ++
        cur = cur.next
    }
    let finalIndex = len - n 
    
    // Iterate through list
    cur = head
    let prev:ListNode|null = null
    for(let i = 0; i<finalIndex-1; i++){
        prev = cur
        cur = cur?.next || null
    }
    // Return null if there was no previous node
    if (prev == null ) return head?.next || null
    
    // Remove the cur node
    prev.next = cur?.next || null
    return head
};

function testRemoveNthFromEnd() {
    function compareLinkedLists(
        list1: ListNode | null,
        list2: ListNode | null
    ): boolean {
        let current1 = list1;
        let current2 = list2;

        while (current1 !== null && current2 !== null) {
            if (current1.val !== current2.val) {
                return false;
            }

            current1 = current1.next;
            current2 = current2.next;
        }

        return current1 === null && current2 === null;
    }

    let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));

    let result = removeNthFromEnd(head, 2);
    let expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, null))));
    console.log(compareLinkedLists(result, expected), 'should be true');
}
testRemoveNthFromEnd()