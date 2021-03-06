//region en
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Note that an empty string is also considered valid.
//
//     Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true
//endregion

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
// 输出: true
// 示例 2:
//
// 输入: "()[]{}"
// 输出: true
// 示例 3:
//
// 输入: "(]"
// 输出: false
// 示例 4:
//
// 输入: "([)]"
// 输出: false
// 示例 5:
//
// 输入: "{[]}"
// 输出: true
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    const stack = []
    const mapper = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    for(const v of s){
        if(v === '{' || v === '[' || v === '('){
            stack.push(v)
        }else{
            const pick = stack.pop()
            if( mapper[pick] !== v){
                return false
            }
        }
    }
    return stack.length <= 0
};

module.exports = {
    isValid
}
