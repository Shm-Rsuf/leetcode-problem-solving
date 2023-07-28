/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let myMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!myMap[arr[i]]) {
      myMap[arr[i]] = 1;
      console.log(myMap);
    } else {
      myMap[arr[i]]++;
    }
  }
  let count = Object.values(myMap);
  return count.length === new Set(count).size;
};

/*
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Input: arr = [1,2]
Output: false 
*/
