/* You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

The first ten characters consist of the phone number of passengers.
The next character denotes the gender of the person.
The following two characters are used to indicate the age of the person.
The last two characters determine the seat allotted to that person.
Return the number of passengers who are strictly more than 60 years old. */

var countSeniors = function (details) {
  let subArr = [];
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    subArr.push(details[i].slice(11, 13));
  }
  for (k = 0; k < subArr.length; k++) {
    if (+subArr[k] > 60) {
      count++;
    }
  }
  return count;
};
// console.log(
//   countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
// );
// console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));
