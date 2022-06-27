function stringValidParenthesisStack(str) {
  if (str.length === 0) {
    return true;
  }
  let par = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currElement = str[i];
    if (par[currElement]) {
      stack.push(currElement);
    } else {
      let popElement = stack.pop();
      let correctElement = par[popElement];
      if (correctElement !== currElement) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(stringValidParenthesisStack("{([])}"));
