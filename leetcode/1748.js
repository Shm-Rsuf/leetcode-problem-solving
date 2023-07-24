/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let mySet = new Set();
  for (let num of nums) {
    if (mySet.has(num)) {
      mySet.delete(num);
    } else {
      mySet.add(num);
    }
  }
  if ([...mySet].length === 1) {
    return 0;
  } else {
    return [...mySet].reduce((preV, currV) => preV + currV, 0);
  }
};
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));
console.log(sumOfUnique([1, 2, 3, 2]));
/* 
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4. 

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
*/
