// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])

  for(let i = 0; i < intervals.length - 1;){
    if(intervals[i][1] >= intervals[i+1][0]){
      intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1])
      intervals.splice(i+1, 1);
    }else {
      i++
    }
  }
  return intervals;
}
// const merge = (intervals) => {
//   intervals.sort((a, b) => a[1] - b[1])

//   for(let i = intervals.length - 1; i > 0; i--){
//     if(intervals[i][0] <= intervals[i-1][1]){
//       intervals[i-1][1] = Math.max(intervals[i][1], intervals[i-1][1])
//       intervals[i-1][0] = Math.min(intervals[i][0], intervals[i-1][0])
//       intervals.splice(i, 1);
//       // i++;
//     }
//   }
//   return intervals;
// }

console.log('merge...', merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))