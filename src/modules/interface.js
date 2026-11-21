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

    for (let projectInfo of projects) {
      const { project, projectTitle, removeProjectBtn } =
        this.#createProjectElements();

      this.#addProjectClassesAndContent(
        project,
        projectTitle,
        projectInfo,
        removeProjectBtn,
      );

      this.#projects.appendChild(project);
    }

    console.log(this.#projects);
  }

  #createProjectElements() {
    const project = document.createElement("div");
    const projectTitle = document.createElement("h2");
    const removeProjectBtn = document.createElement("button");
    project.appendChild(projectTitle);
    project.appendChild(removeProjectBtn);

    return { project, projectTitle, removeProjectBtn };
  }

  #addProjectClassesAndContent(
    project,
    projectTitle,
    projectInfo,
    removeProjectBtn,
  ) {
    project.classList.add("project");
    project.dataset.id = projectInfo.id;
    projectTitle.textContent = projectInfo.title;
    removeProjectBtn.classList.add("remove-project");
    removeProjectBtn.textContent = "X";
  }
}
