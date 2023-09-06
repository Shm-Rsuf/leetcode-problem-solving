/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = { 1: I, 5: V, 10: X, 50: L, 100: C, 500: D, 1000: M };

  let result = 0;
  s.split("").forEach((num, i) => {
    if (map[num] < map[s[i - 1]]) result -= map[num];
    else result += map[num];
  });

  return result;
};

/* Input: s = "III";
Output: 3;
Explanation: III = 3; */
