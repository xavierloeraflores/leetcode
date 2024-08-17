// LeetCode: 217. Contains Duplicate
// Blind 75
// link: https://leetcode.com/problems/contains-duplicate/
// Arrays, Hash Table

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (set.has(cur)) {
            return true;
        } else {
            set.add(cur);
        }
    }
    return false;
}

function testContainsDuplicate() {
    const testCases = [
        { nums: [1, 2, 3, 1], expected: true },
        { nums: [1, 2, 3, 4], expected: false },
        { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    ];
    for (const { nums, expected } of testCases) {
        const result = containsDuplicate(nums);
        console.log(result === expected ? "PASS" : "FAIL", {
            nums,
            expected,
            result,
        });
    }
}

testContainsDuplicate();
