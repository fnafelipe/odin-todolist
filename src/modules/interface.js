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
    this.#render();
  }

  #render() {
    this.#renderProjects();
  }

  #renderProjects() {
    this.#projects.replaceChildren();

    const projects = this.#controller.projects;

    const project = document.createElement("div");
    let projectTitle = document.createElement("h2");
    const removeProjectBtn = document.createElement("button");

    project.classList.add("project");
    removeProjectBtn.classList.add("remove-project");

    project.appendChild(projectTitle);
    project.appendChild(removeProjectBtn);

    for (let projectInfo of projects) {
      projectTitle.textContent = "";

      project.dataset.id = projectInfo.id;
      projectTitle.textContent = projectInfo.name;

    }
  }
}
