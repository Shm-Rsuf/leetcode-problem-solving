/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return result;
};

console.log(twoSum([2, 5, 7], 7));
console.log(twoSum([2, 5, 7], 9));
console.log(twoSum([3, 2, 4], 6));
