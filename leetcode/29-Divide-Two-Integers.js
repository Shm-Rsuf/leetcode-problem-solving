/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === "") return true;

  let string1 = s.split("");
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === "") continue;
    let string2 = string1.push(string1[i]);
    return string2;
  }

  return string1 === string2.reverse();
};

console.log(isPalindrome("mama"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(""));
console.log(isPalindrome("race a car"));
