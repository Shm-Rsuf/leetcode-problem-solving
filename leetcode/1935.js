/* There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard. */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  text = text.split(" ");
  let result = 0;

  for (let t of text) {
    // console.log({ t });
    let count = 0;
    for (let str of brokenLetters) {
      // console.log({ str });
      if (t.includes(str)) {
        count++;
      }
    }
    if (count === 0) {
      result += 1;
    }
  }
  return result;
};
canBeTypedWords("leet code", "a");

/*
Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.

Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because the 'e' key is broken. 
 */
