// LeetCode: 242. Valid Anagram
// Blind 75
// link: https://leetcode.com/problems/valid-anagram/
// Strings, Hash Table
// Time: O(n)
// Space: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const charMap = new Map();
    // Count values of s
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (!charMap.has(cur)) {
            charMap.set(cur, 0);
        }
        charMap.set(cur, charMap.get(cur) + 1);
    }
    // Check values of t
    for (let i = 0; i < t.length; i++) {
        const cur = t[i];
        if (!charMap.has(cur)) return false;
        charMap.set(cur, charMap.get(cur) - 1);
        if (charMap.get(cur) < 0) return false;
    }

    return true;
}

function testIsAnagram() {
    const testCases = [
        { s: "anagram", t: "nagaram", expected: true },
        { s: "rat", t: "car", expected: false },
        { s: "a", t: "ab", expected: false },
    ];

    for (const { s, t, expected } of testCases) {
        const result = isAnagram(s, t);
        console.log(result === expected ? "PASS" : "FAIL", {
            s,
            t,
            expected,
            result,
        });
    }
}

testIsAnagram();
