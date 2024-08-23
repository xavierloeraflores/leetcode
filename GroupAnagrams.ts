// LeetCode: 49. Group Anagrams
// Blind 75
// link: https://leetcode.com/problems/group-anagrams/
// Strings, Hash Table
// Time: O(n * m * log(m))
// Space: O(n * m)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
    const strMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        const cur = strs[i];
        // Alphabetize the string O(m * log(m))
        const sorted = cur.split("").sort().join("");

        // Store the string in the map with the alphabetized string as the key
        if (!strMap.has(sorted)) {
            strMap.set(sorted, []);
        }
        const anagrams = strMap.get(sorted);
        strMap.set(sorted, [...anagrams, cur]);
    }
    const results: string[][] = [];
    strMap.forEach((value) => {
        results.push(value);
    });
    return results;
}

function testGroupAnagrams() {
    const testCases = [
        {
            strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
            expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
        },
    ];

    for (const { strs, expected } of testCases) {
        const result = groupAnagrams(strs);
        console.log(
            JSON.stringify(result) === JSON.stringify(expected)
                ? "PASS"
                : "FAIL",
            {
                strs,
                expected,
                result,
            }
        );
    }
}

testGroupAnagrams();

// Better Solution: https://www.youtube.com/watch?v=vzdNOK2oB2E
// O(n * m) time, O(n * m) space
