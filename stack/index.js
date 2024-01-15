import reverseStack from "./reverseStack.js";
import Stack from "./stack.js";

const s = new Stack();
s.push("hello");
s.push("world");
s.push("good");
s.push(2);
console.log("Is Empty:", s.isEmpty());
console.log("Size:", s.size);
s.print();

reverseStack(s);
