export class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #isDone;

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#isDone = false;
  }

  do() {
    this.#isDone = true;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get isDone() {
    return this.#isDone;
  }
}

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
