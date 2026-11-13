import { Project } from "./project.js";

export class Controller {
  #projects;

  constructor() {
    this.#projects = [new Project("all")];
  }

}
