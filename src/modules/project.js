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
    return this.#doneTodos;
  }

  get notDoneTodos() {
    return this.#notDoneTodos;
  }

  rename(newTitle) {
    if (typeof newTitle === "string" && newTitle.trim()) {
      this.#title = newTitle;
    }
  }

  addTodo(todoToAdd) {
    if (todoToAdd.constructor.name === "Todo") {
      this.#notDoneTodos.push(todoToAdd);
    }
  }

  removeTodo(todoToRemove) {
    if (todoToRemove.constructor.name === "Todo") {
      if (todoToRemove.isDone) {
        this.#doneTodos.splice(this.#doneTodos.indexOf(todoToRemove), 1);
      } else {
        this.#notDoneTodos.splice(this.#notDoneTodos.indexOf(todoToRemove));
      }
    }
  }

  doTodo(todoToDo) {
    if (todoToDo.constructor.name === "Todo") {
      todoToDo.do();

      const [doneTodo] = this.#notDoneTodos.splice(
        this.#notDoneTodos.indexOf(todoToDo, 1),
      );
      this.#doneTodos.push(doneTodo);
    }
  }
}
