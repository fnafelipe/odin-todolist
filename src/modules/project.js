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
}

const project = new Project("Home");
console.log(project.title);
console.log(project.doneTodos);
console.log(project.notDoneTodos);
