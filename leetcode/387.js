/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = true;
    } else {
      obj[s[i]] = false;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      return i;
    }
  }
  return -1;
};

/* Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2 */
