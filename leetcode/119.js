/* Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown: */
var getRow = function (rowIndex) {
  var row = [1];
  for (var i = 1; i <= rowIndex; i++) {
    for (var j = i; j > 0; j--) {
      j === i ? (row[j] = 1) : (row[j] = row[j - 1] + row[j]);
    }
  }
  return row;
};

getRow();

/* Input: rowIndex = 3
Output: [1,3,3,1]

Input: rowIndex = 0
Output: [1]

Input: rowIndex = 1
Output: [1,1] */
