/* Given a string s, find the length of the longest 
substrin
 without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    if (longest.includes(str[i])) {
      return longest.length;
    } else {
      longest += str[i];
    }
  }
  return longest.length;
}

/* Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. */
