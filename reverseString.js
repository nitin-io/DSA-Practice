function reverseString(str) {
  let n = str.length;
  let reversed = [];

  for (let i = 0; i <= n; i++) {
    reversed[i] = str.charAt(n - i);
  }

  return reversed.join("");
}

// Reverse string using recursion
// Not a very optimised approach as I read comments

function reverseStringWithRecursion(str) {
  // base case
  if (str === "") {
    return "";
  }
  // recursive operation
  return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
