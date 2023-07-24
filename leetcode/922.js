/* Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const even = nums.filter((num) => num % 2 == 0);
  const odd = nums.filter((num) => num % 2 == 1);
  const result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
};

// console.log(sortArrayByParityII([4, 2, 5, 7]));

/*
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Input: nums = [2,3]
Output: [2,3]
*/
