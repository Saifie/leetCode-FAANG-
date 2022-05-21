const stringBackspace = (str1, str2) => {
  // str1 = str1.split("");
  // str2 = str2.split("");
  let pointer1 = str1.length - 1;

  let pointer2 = str2.length - 1;

  while (pointer1 >= 0 || pointer2 >= 0) {
    if (str1[pointer1] === "#" || str2[pointer2] === "#") {
      if (str1[pointer1] === "#") {
        let backtrack = 2;
        while (backtrack > 0) {
          pointer1--;
          backtrack--;
          if (str1[pointer1] === "#") {
            backtrack = backtrack + 2;
          }
        }
      }
      if (str2[pointer2] === "#") {
        let backtrack = 2;
        while (backtrack > 0) {
          pointer2--;
          backtrack--;
          if (str1[pointer2] === "#") {
            backtrack = backtrack + 2;
          }
        }
      }
    } else {
      if (str1[pointer1] !== str2[pointer2]) {
        return false;
      } else {
        pointer1--;
        pointer2--;
      }
    }
  }
  return true;
};

console.log(stringBackspace("avv##z", "acb##z"));

// const helperArray = (str1) => {
//   let list1 = [];
//   for (var i = 0; i < str1.length; i++) {
//     if (str1[i] !== "#") {
//       list1.push(str1[i]);
//     } else {
//       list1.pop();
//     }
//   }

//   return list1;
// };

// const stringBackspace = (str1, str2) => {
//   let list1 = helperArray(str1);
//   let list2 = helperArray(str2);
//   if (list1.length !== list2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < list1.length; i++) {
//       if (list1[i] !== list2[i]) return false;
//     }
//   }

//   return true;
// };

// console.log(stringBackspace("av#z", "ac#z"));
