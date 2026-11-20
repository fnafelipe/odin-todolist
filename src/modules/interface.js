export class Interface {
  #controller;
  #addProjectBtn;
  #addTodoBtn;
  #view;
  #projects;
  #pendingTodos;
  #doneTodos;

  constructor(controller) {
    this.#controller = controller;
    this.#addProjectBtn = document.querySelector(".add-project");
    this.#addTodoBtn = document.querySelector(".add-todo");
    this.#view = document.getElementById("view");
    this.#pendingTodos = document.querySelector(".pending-todos");
    this.#doneTodos = document.querySelector(".done-todos");
    this.#projects = document.querySelector(".projects");
    console.table(this);
  }
}
