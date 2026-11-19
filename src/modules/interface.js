export class Interface {
  #controller;
  #addProjectBtn;
  #addTodoBtn;
  #view;
  #todos;

  constructor(controller) {
    this.#controller = controller;
    this.#addProjectBtn = document.querySelector(".add-project");
    this.#addTodoBtn = document.querySelector(".add-todo");
    this.#view = document.getElementById("view");
    this.#todos = document.querySelector(".todos-section");
  }
}
