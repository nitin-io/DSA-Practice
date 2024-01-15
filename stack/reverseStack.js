import Stack from "./stack.js";

export default function (stack) {
  const arr = [];
  const newStack = new Stack();

  while (!stack.isEmpty()) {
    arr.push(stack.pop());
  }

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    newStack.push(arr[i]);
  }

  newStack.print();
}
