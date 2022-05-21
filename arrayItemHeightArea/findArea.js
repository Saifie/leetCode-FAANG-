// https://leetcode.com/problems/container-with-most-water/
/**
 *leetcode

 * @param {Array[number]} height
 * @returns {number} maxArea
 */

const findArea = (height) => {
  let maxArea = 0;
  let pointer1 = 0;
  let pointer2 = height.length - 1;

  while (pointer1 < pointer2) {
    const minValue = Math.min(height[pointer1], height[pointer2]);
    const width = pointer2 - pointer1;
    const area = minValue * width;
    maxArea = Math.max(maxArea, area);
    // console.log({ pointer1, pointer2, area });

    if (height[pointer1] < height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }
  //   console.log(maxArea);
  return maxArea;
};
findArea([1, 8, 6, 7, 9]);

/***
 * not obtimize
 * big o time = n**2
 * big space n(1)
 * lets try obtimize approach reduce the time complexity
 */
// const findArea = (height) => {
//     let maxArea = 0;

//     for (let i = 0; i < height.length; i++) {
//       for (let j = i + 1; j < height.length; j++) {
//         const minValue = Math.min(height[i], height[j]);
//         const width = j - i;
//         const area = minValue * width;
//         //   console.log({ minValue, width, area });

//         if (area > maxArea) {
//           maxArea = area;
//         }
//       }
//     }
//     //   console.log({ maxArea });
//     return maxArea;
//   };
//   findArea([1, 8, 6, 7, 9]);
