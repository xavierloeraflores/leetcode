// LeetCode: 206. Reverse Linked List
// Blind 75
// link: https://leetcode.com/problems/reverse-linked-list/
// LinkedList, Iterative
// Time: O(n)
// Space: O(1)

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseLinkedList(head: ListNode | null): ListNode | null {
    if (head === null) return head;
    let cur: ListNode | null = head;
    let prev: ListNode | null = null;
    let next: ListNode | null = cur.next;
    while (cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

function testReverseLinkedList() {
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
    const testCases = [
        {
            head: new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(3, new ListNode(4, new ListNode(5)))
                )
            ),
            expected: new ListNode(
                5,
                new ListNode(
                    4,
                    new ListNode(3, new ListNode(2, new ListNode(1)))
                )
            ),
        },
    ];
    for (const { head, expected } of testCases) {
        const result = reverseLinkedList(head);
        console.log(compareLinkedLists(expected, result) ? "PASS" : "FAIL", {
            head,
            expected,
            result,
        });
    }
}

testReverseLinkedList();
