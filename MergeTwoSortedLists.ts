// LeetCode: 21. Merge Two Sorted Lists
// Blind 75
// link: https://leetcode.com/problems/merge-two-sorted-lists/
// LinkedList
// Time: O(n + m)
// Space: O(1)

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    const head: ListNode = new ListNode();
    let tail = head;

    if (list1 === null && list2 == null) return head;

    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    tail.next = list1 != null ? list1 : list2;
    return head.next;
}

function testMergeTwoLists() {
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
            list1: new ListNode(1, new ListNode(2, new ListNode(4))),
            list2: new ListNode(1, new ListNode(3, new ListNode(4))),
            expected: new ListNode(
                1,
                new ListNode(
                    1,
                    new ListNode(
                        2,
                        new ListNode(3, new ListNode(4, new ListNode(4)))
                    )
                )
            ),
        },
    ];

    for (const { list1, list2, expected } of testCases) {
        const result = mergeTwoLists(list1, list2);
        console.log(compareLinkedLists(result, expected) ? "PASS" : "FAIL", {
            list1,
            list2,
            expected,
            result,
        });
    }
}
testMergeTwoLists();
