import { Project } from "./modules/project.js";
import { Todo } from "./modules/todo.js";

const todo1 = new Todo(
  "Buy bread",
  "go to the grocery store and buy 6 buns",
  "11/22/2026",
  "important",
);

const todo2 = new Todo(
  "Clean House",
  "pass the wop on the entira floor",
  "11/26/2026",
  "critical",
);

//console.log(todo1);
//console.log(todo1.title);
//console.log(todo1.description);
//console.log(todo1.dueDate);
//console.log(todo1.priority);
//console.log(todo1.isDone);
todo1.do();
//console.log(todo1.isDone);

const project = new Project("Home");

//console.log(project.title);
//console.log(project.doneTodos);
//console.log(project.pendingTodos);
project.rename("Work");
//console.log(project.title);
project.rename("  ");
project.rename("");
project.rename(6);
project.rename(true);
//console.log(project.title);

project.addTodo(todo1);
project.addTodo(todo2);
//console.log(project.todos);
project.addTodo("todo3");
project.addTodo("");
project.addTodo(" ");
//console.log(project.todos);
console.table(project.todos);
console.table(project.doneTodos);
console.table(project.pendingTodos);

project.removeTodo(todo1);
project.removeTodo("todo2");
//console.log(project.todos);
project.removeTodo("");
project.removeTodo(" ");
console.table(project.todos);
//console.table(project.todos);
//console.table(project.doneTodos);
//console.table(project.pendingTodos);

project.doTodo(todo2);
console.table(project.todos)
