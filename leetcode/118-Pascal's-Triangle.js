/* Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    row[0] = 1;
    row[i] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
    arr.push(row);
  }
  return arr;
};

console.log(generate(5));
console.log(generate(1));

/* Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]] */
