export class Project {
  #title;
  #doneTodos;
  #notDoneTodos;

  constructor(title) {
    this.#title = title;
    this.#doneTodos = [];
    this.#notDoneTodos = [];
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
    if (todoToAdd.trim()) {
      this.#notDoneTodos.push(todoToAdd);
    }
  }
}

const project = new Project("Home");
console.log(project.title);
console.log(project.doneTodos);
console.log(project.notDoneTodos);
project.rename("Work");
console.log(project.title);
project.rename("  ");
project.rename("");
project.rename(6);
project.rename(true);
console.log(project.title);

project.addTodo("todo1");
project.addTodo("todo2");
project.addTodo("");
project.addTodo(" ");
console.log(project.notDoneTodos);
