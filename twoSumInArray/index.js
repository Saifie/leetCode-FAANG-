// https://leetcode.com/problems/two-sum/
/**
 *leetCode 

 * @param {Array[number]} array
 * @param {number} target
 * @returns{Array[]} array 
 */

const sumTwoArr = (arr, target) => {
  const diffStore = {};

  for (let i = 0; i < arr.length; i++) {
    const curElement = diffStore[arr[i]];

    if (curElement >= 0) {
      return [curElement, i];
    } else {
      const ell = target - arr[i];
      diffStore[ell] = i;
    }
  }
  console.log(diffStore);
  return null;
};

console.log(sumTwoArr([1, 3, 7, 9, 2], 11));

/***
 * not obtimize
 * big o time = n**2
 * big space n(1)
 * lets try obtimize approach reduce the time complexity
 */
// const sumTwoArr = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     const ntf = target - arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (ntf === arr[j]) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(sumTwoArr([1, 3, 7, 9, 2], 11));
