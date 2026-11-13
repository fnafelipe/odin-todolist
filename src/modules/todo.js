export class Todo {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #isDone;

  constructor(title, description, dueDate, priority) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#isDone = false;
  }
  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get isDone() {
    return this.#isDone;
  }

  do() {
    this.#isDone = true;
  }
}
