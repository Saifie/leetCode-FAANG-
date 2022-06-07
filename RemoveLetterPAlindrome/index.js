function validSubPalindrome(str, left, right) {
  while (left < right) {
    if (str[left] !== str[right]) {
      console.log(str, str[left], str[right]);
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function palindromeString(A) {
  let str = A.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  if (str.length <= 1) {
    return true;
  }

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return (
        validSubPalindrome(str, leftPointer + 1, rightPointer) ||
        validSubPalindrome(str, leftPointer, rightPointer - 1)
      );
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
}
console.log(palindromeString("abccdba"));

// function palindromeString(A) {
//   let str = A.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
//   let leftPointer = 0;
//   let rightPointer = str.length - 1;
//   if (str.length <= 1) {
//     return true;
//   }
//   let remove = 0;

//   while (leftPointer < rightPointer) {
//     if (str[leftPointer] !== str[rightPointer]) {
//       console.log({
//         leftPointer: str[leftPointer],
//         rightPointer: str[rightPointer],
//       });
//       let newStr = str.replace(str[leftPointer], "");
//       let newStr2 = str.replace(str[rightPointer], "");
//       if (
//         !newStr[leftPointer] !== newStr2[rightPointer - 1] &&
//         newStr2[leftPointer] !== newStr2[rightPointer - 1]
//       ) {
//         return false;
//       }
//       console.log(
//         newStr2[leftPointer],

//         newStr2[rightPointer - 1],
//         newStr,
//         newStr2
//       );
//     }
//     leftPointer++;
//     rightPointer--;
//   }

//   return true;
// }
// console.log(palindromeString("abcdefdba"));
