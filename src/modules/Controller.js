import { Project } from "./project.js";
import { Todo } from "./todo.js";

export class Controller {
  #projects;
  #currentProject;

  constructor() {
    this.#projects = [new Project("all")];
    this.#currentProject = this.#projects[0];
  }

  changeCurrentProject(projectId) {
    const projectToChange = this.searchProject(projectId);

    this.#currentProject = projectToChange;
  }

  createTodo(title, description, dueDate, priority) {
    if (
      typeof title === "string" &&
      typeof description === "string" &&
      typeof dueDate === "string" &&
      typeof priority === "string"
    ) {
      const newTodo = new Todo(title, description, dueDate, priority);

      return newTodo;
    }
  }

  createProject(title) {
    if (typeof title === "string") {
      const newProject = new Project(title);
      
      return newProject;
    }
  }

  renameProject(newTitle) {
    if (typeof newTitle === "string" && newTitle.trim()) {
      this.#currentProject.rename(newTitle);
    }
  }

  addTodoToProject(title, description, dueDate, priority) {
    const newTodo = this.createTodo(title, description, dueDate, priority);

    this.#currentProject.addTodo(newTodo);
  }

  removeTodoFromProject(todoId) {
    this.#currentProject.removeTodo(todoId);
  }

  doTodoFromProject(todoId) {
    this.#currentProject.doTodo(todoId);
  }

  addProject(title) {
    const newProject = this.createProject(title);

    this.#projects.push(newProject);

    this.#currentProject = newProject;
  }

  removeProject(projectId) {
    const projectToRemove = this.searchProject(projectId);

    if (projectToRemove instanceof Project) {
      if (this.#projects.indexOf(projectToRemove) !== -1) {
        this.#projects.splice(this.#projects.indexOf(projectToRemove), 1);
      }
    }
  }

  searchProject(idToSearch) {
    for (let project of this.#projects) {
      if (project.id === idToSearch) {
        return project;
      }
    }
    return false;
  }
}
