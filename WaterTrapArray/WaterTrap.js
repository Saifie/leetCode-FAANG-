/**
 * leet code hard one
 * water trapping
 * LETS OPTIMIZE IT
 */

//  https://leetcode.com/problems/trapping-rain-water/

const waterTrap = (height) => {
  let totalWaters = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (leftPointer < rightPointer) {
    console.log({
      leftMax,
      leftPointer: height[leftPointer],
      totalWaters,
    });
    if (height[leftPointer] <= height[rightPointer]) {
      if (height[leftPointer] >= leftMax) {
        leftMax = height[leftPointer];
      } else {
        totalWaters += leftMax - height[leftPointer];
      }

      leftPointer++;
    } else {
      if (height[rightPointer] >= rightMax) {
        rightMax = height[rightPointer];
      } else {
        totalWaters += rightMax - height[rightPointer];
      }
      console.log({
        rightMax,
        rightPointer: height[rightPointer],
        totalWaters,
      });

      rightPointer--;
    }
  }
  return totalWaters;
};
console.log(waterTrap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// const waterTrap = (height) => {
//     let totalWaters = 0;

//     for (let p = 0; p < height.length; p++) {
//       let leftP = p;
//       let rightP = p;
//       let maxLeftP = 0;
//       let maxRightP = 0;
//       console.log("\nfor value", height[p]);
//       console.log("=========================");

//       while (leftP >= 0) {
//         maxLeftP = Math.max(maxLeftP, height[leftP]);
//         console.log({ maxLeftP });

//         leftP--;
//       }
//       while (rightP < height.length) {
//         maxRightP = Math.max(maxRightP, height[rightP]);
//         console.log({ maxRightP });

//         rightP++;
//       }
//       let currentWater = Math.min(maxRightP, maxLeftP) - height[p];
//       console.log("=========================");
//       console.log("current max  ", currentWater);

//       if (currentWater >= 0) {
//         totalWaters += currentWater;
//       }
//     }
//     return totalWaters;
//   };
//   console.log(waterTrap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
