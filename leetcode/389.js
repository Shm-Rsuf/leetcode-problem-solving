/* You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t. */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let arrOfs = s.split("").sort();
  let arrOft = t.split("").sort();

  for (let i = 0; i < arrOft.length; i++) {
    if (arrOft[i] !== arrOfs[i]) {
      return arrOft[i];
    }
  }
};
console.log(findTheDifference("abcd", "abcde"));
/* Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y" */
