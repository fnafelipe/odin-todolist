import { Todo } from "./todo.js";
export class Project {
  #id;
  #title;
  #doneTodos;
  #notDoneTodos;

  constructor(title) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#doneTodos = [];
    this.#notDoneTodos = [];
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get doneTodos() {
    return [...this.#doneTodos];
  }

  get notDoneTodos() {
    return [...this.#notDoneTodos];
  }

  rename(newTitle) {
    if (typeof newTitle === "string" && newTitle.trim()) {
      this.#title = newTitle;
    }
  }

  addTodo(todoToAdd) {
    if (todoToAdd instanceof Todo) {
      this.#notDoneTodos.push(todoToAdd);
    }
  }

  removeTodo(todoToRemove) {
    if (todoToRemove instanceof Todo) {
      if (todoToRemove.isDone) {
        if (this.#doneTodos.indexOf(todoToRemove) !== -1) {
          this.#doneTodos.splice(this.#doneTodos.indexOf(todoToRemove), 1);
        }
      } else {
        if (this.#notDoneTodos !== -1) {
          this.#notDoneTodos.splice(
            this.#notDoneTodos.indexOf(todoToRemove),
            1,
          );
        }
      }
    }
  }

  doTodo(todoToDo) {
    if (todoToDo instanceof Todo) {
      todoToDo.do();

      const [doneTodo] = this.#notDoneTodos.splice(
        this.#notDoneTodos.indexOf(todoToDo),
        1,
      );
      this.#doneTodos.push(doneTodo);
    }
  }
}
