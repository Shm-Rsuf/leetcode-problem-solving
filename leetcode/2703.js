/* Write a function argumentsLength that returns the count of arguments passed to it. */

/**
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/*
 Input: argsArr = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
 */
