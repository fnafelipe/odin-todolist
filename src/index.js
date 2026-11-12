import { Todo } from "./modules/todo.js";

const todo = new Todo(
  "Buy bread",
  "go to the grocery store and buy 6 buns",
  "11/22/2026",
  "important",
);

console.log(todo);
console.log(todo.title);
console.log(todo.description);
console.log(todo.dueDate);
console.log(todo.priority);
console.log(todo.isDone);
todo.do();
console.log(todo.isDone);
