function removeParanthesisToValidStringStack(str) {
  let newStr = str.split("");
  let stack = [];
  for (let i = 0; i < newStr.length; i++) {
    if (str[i] === "(") {
      stack.push(i);
    } else if (str[i] === ")") {
      let popped = stack.pop();
      if (popped || popped === 0) {
      } else {
        newStr[i] = "";
      }
    }
  }
  if (stack.length > 0) {
    for (i = 0; i < stack.length; i++) {
      newStr[stack[i]] = "";
    }
  }
  return newStr.join("");
}
console.log(removeParanthesisToValidStringStack(")))(snf(sdkfhskjfh"));
