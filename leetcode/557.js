/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("").reverse();
    words[i] = letters.join("");
  }
  return words.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
/* Input: s = "Let's take LeetCode contest";
Output: "s'teL ekat edoCteeL tsetnoc"; */
