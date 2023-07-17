/* You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false. */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let mySet = new Set();
  if (nums.length % 2 === 0) {
    for (let num of nums) {
      if (mySet.has(num)) {
        mySet.delete(num);
      } else {
        mySet.add(num);
      }
    }
  } else {
    return false;
  }
  if (mySet.size === 0) {
    return true;
  } else {
    return false;
  }
};

/* Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions. */
