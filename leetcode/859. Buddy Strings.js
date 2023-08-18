/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad". 
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    let c = [...new Set(s.split(""))];
    return c.length !== s.length;
  }

  s = s.split("");
  goal = goal.split("");
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      result.push(s[i]);
      result.push(goal[i]);
    }
  }

  return (
    result.length === 4 && result[0] === result[3] && result[1] === result[2]
  );
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));

/*
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal. 
 */
