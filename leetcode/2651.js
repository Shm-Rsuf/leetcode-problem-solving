/* You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive integer delayedTime denoting the amount of delay in hours.
Return the time when the train will arrive at the station.
Note that the time in this problem is in 24-hours format. */

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  let totalTime = arrivalTime + delayedTime;
  if (totalTime < 24) {
    return totalTime;
  } else {
    return totalTime - 24;
  }
};

/* Input: arrivalTime = 13, delayedTime = 11
Output: 0
Explanation: Arrival time of the train was 13:00 hours. It is delayed by 11 hours. Now it will reach at 13+11=24 (Which is denoted by 00:00 in 24 hours format so return 0). */
