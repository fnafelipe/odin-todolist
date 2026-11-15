import { Project } from "./project.js";
import { Todo } from "./todo.js";

export class Controller {
  #projects;
  #currentProject;

  constructor() {
    this.#projects = [new Project("all")];
    this.#currentProject = this.#projects[0];
  }

  createTodo(title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    console.table(newTodo);
    return newTodo;
  }

  createProject(title) {
    const newProject = new Project(title);
    console.table(newProject);
    return newProject;
  }

  renameProject(newTitle) {
    if (typeof newTitle === "string") {
      this.#currentProject.rename(newTitle);
    }
  }

  addTodoToProject(title, description, dueDate, priority) {
    const newProject = this.createTodo(
      title,
      description,
      dueDate,
      priority,
    );

    this.#currentProject.addTodo(newProject)
  }
}
