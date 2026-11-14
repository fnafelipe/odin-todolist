import { Todo } from "./todo.js";
export class Project {
  #id;
  #title;
  #todos;

  constructor(title) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#todos = [];
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get todos() {
    return [...this.#todos];
  }

  get doneTodos() {
    return this.#todos.filter((todo) => todo.isDone);
  }

  get pendingTodos() {
    return this.#todos.filter((todo) => !todo.isDone);
  }

  rename(newTitle) {
    if (typeof newTitle === "string" && newTitle.trim()) {
      this.#title = newTitle;
    }
  }

  addTodo(todoToAdd) {
    if (todoToAdd instanceof Todo) {
      this.#todos.push(todoToAdd);
    }
  }

  removeTodo(todoToRemove) {
    if (todoToRemove instanceof Todo) {
      if (this.#todos.indexOf(todoToRemove) !== -1) {
        this.#todos.splice(this.#todos.indexOf(todoToRemove), 1);
      }
    }
  }

  doTodo(todoToDo) {
    if (todoToDo instanceof Todo) {
      todoToDo.do();
    }
  }
}
