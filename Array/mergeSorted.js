// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

const merge = (nums1, m, nums2, n) => {
  debugger;
  let i = m - 1;
  let j = n - 1;
  let temp = nums1.length - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[temp] = nums1[i];
      temp--;
      i--;
    } else {
      nums1[temp] = nums2[j];
      temp--;
      j--;
    }
  }
  console.log('nums1...', nums1);
};
const merge1 = (nums1, m, nums2, n) => {
  debugger;
  let left1 = 0;
  let right1 = m;
  let left2 = 0;
  // while (nums1[left1]) {
  while (left1 < m) {
    if (nums2[left2]) {
      if (nums1[left1] > nums2[left2]) {
        nums1[right1] = nums1[left1];
        nums1[left1] = nums2[left2];
        right1++;
        if (!nums2[left2 + 1]) {
          right1 = m;
        }
        left2++;
      }
    } else {
      let temp = nums1[left1];
      nums1[left1] = nums1[right1];
      nums1[right1] = temp;
      // [nums1[left1],nums1[right1]] = [nums1[right1],nums1[left1]]
      right1++;
    }
    left1++;
  }
  while (right1 < m + n) {
    nums1[right1] = nums2[left2];
    right1++;
    left2++;
  }
  console.log('nums1...', nums1);
};
// const merge = (nums1, m, nums2, n) => {
//   debugger;
//   let left1 = 0;
//   let right1 = m;
//   let left2 = 0;
//   // while (nums1[left1]) {
//   while (left1 < m) {
//     if (nums1[left1] > nums2[left2]) {
//       nums1[right1] = nums1[left1+1];
//       nums1[left1+1] = nums1[left1];
//       nums1[left1] = nums2[left2];
//       left2++;
//       right1++;
//     }
//     left1++;
//   }
//   while (right1 < m + n) {
//     nums1[right1] = nums2[left2];
//     right1++;
//     left2++;
//   }
//   console.log('nums1...', nums1);
// };

merge([1, 2, 5, 6, 7, 8, 9, 0, 0], 7, [3, 4], 2);
// merge([4,0,0,0,0,0], 1, [1,2,3,5,6], 5);
