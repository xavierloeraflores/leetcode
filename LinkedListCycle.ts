// LeetCode 141. Linked List Cycle
// Blind 75
// link: https://leetcode.com/problems/linked-list-cycle/
// LinkedList
// Time: O(n)
// Space: O(1)



//   Definition for singly-linked list.
class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function hasCycle(head: ListNode | null): boolean {
    let tortoise = head
    let hare = head

    while(hare != null && hare.next!=null){
        tortoise = tortoise?.next || null
        hare = hare.next.next
        if(tortoise == hare) return true
    }
    return false
};

function testHasCycle(){
    // Create a cycled linked list
    const cycleNode = new ListNode(2);
    const cycleHead = new ListNode(1, cycleNode);
    cycleNode.next = new ListNode(3, cycleNode);


    const testCases = [
        {
            head: new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4)))),
            expected: false,
        },
        {
            head: new ListNode(1, new ListNode(2)),
            expected: false,
        },
        {
            head: new ListNode(1),
            expected: false,
        },
        {
            head: cycleHead,
            expected: true,
        }
    ];
    for (const { head, expected } of testCases) {
        const result = hasCycle(head);
        console.log(
            result === expected
                ? "PASS"
                : "FAIL",
            {
                head,
                expected,
                result,
            }
        );
    }
}

testHasCycle();