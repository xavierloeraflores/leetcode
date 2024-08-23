// LeetCode: 20. Valid Parentheses
// Blind 75
// link: https://leetcode.com/problems/valid-parentheses/
// Strings, Stack
// Time: O(n)
// Space: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */
function isValidParentheses(s) {
    const pairings = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    const stack: string[] = [];
    for (let char of s) {
        if (char in pairings) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top === undefined) return false;
            if (pairings[top] != char) {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
}

function testIsValidParentheses() {
    const testCases = [
        ["()", true],
        ["()[]{}", true],
        ["(]", false],
        ["([)]", false],
        ["{[]}", true],
    ];
    for (const [s, expected] of testCases) {
        const result = isValidParentheses(s);
        console.log(result === expected ? "PASS" : "FAIL", {
            s,
            expected,
            result,
        });
    }
}

testIsValidParentheses();
