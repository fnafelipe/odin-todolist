import { Project } from "./project.js";
import { Todo } from "./todo.js";

export class Controller {
  #projects;
  #currentProject;
  #currentTodo;

  constructor() {
    this.#projects = [new Project("all")];
    this.#currentProject = this.#projects[0];
    this.#currentTodo = null;
  }

  get projects() {
    return [...this.#projects];
  }

  get currentProject() {
    return this.#currentProject;
  }

  changeCurrentTodo(todoId) {
    const todoToChange = this.#currentProject.searchTodo(todoId);

    if (todoToChange instanceof Todo) {
      this.#currentTodo = todoToChange;
    }
  }

  changeCurrentProject(projectId) {
    const projectToChange = this.searchProject(projectId);

    if (projectToChange instanceof Project) {
      this.#currentProject = projectToChange;
    }
  }

  createTodo(title, description, dueDate, priority) {
    if (
      typeof title === "string" &&
      title.trim() &&
      typeof description === "string" &&
      description.trim() &&
      typeof dueDate === "string" &&
      dueDate.trim() &&
      typeof priority === "string" &&
      priority.trim()
    ) {
      const newTodo = new Todo(title, description, dueDate, priority);

      return newTodo;
    }
  }

  createProject(title) {
    if (typeof title === "string" && title.trim()) {
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

    if (newTodo instanceof Todo) {
      this.#currentProject.addTodo(newTodo);
    }
  }

  removeTodoFromProject(todoId) {
    this.#currentProject.removeTodo(todoId);
  }

  doTodoFromProject(todoId) {
    this.#currentProject.doTodo(todoId);
  }

  addProject(title) {
    const newProject = this.createProject(title);

    if (newProject instanceof Project) {
      this.#projects.push(newProject);
    }
  }

  removeProject(projectId) {
    const projectToRemove = this.searchProject(projectId);

    if (projectToRemove instanceof Project) {
      if (this.#projects.indexOf(projectToRemove) !== -1) {
        if (projectToRemove === this.#currentProject) {
          this.#currentProject = this.#projects[0];
        }

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
