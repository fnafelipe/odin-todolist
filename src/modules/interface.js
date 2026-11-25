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
    this.#bindEvents();
  }

  #bindEvents() {
    document
      .querySelector(".projects-section")
      .addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target.classList.contains("add-project")) {
          console.log("add");
        } else if (event.target.classList.contains("remove-project")) {
          console.log("remove");
        } else if (event.target.closest("[data-id]")) {
          console.log(event.target.closest("[data-id]"));
          console.log("view");
        }
      });

    document
      .querySelector(".todos-section")
      .addEventListener("click", (event) => {
        console.log(event.target);

        if (event.target.classList.contains("add-todo")) {
          console.log("add");
        } else if (event.target.classList.contains("do-todo")) {
          console.log("do");
        } else if (event.target.classList.contains("remove-todo")) {
          console.log("remove");
        } else if (event.target.closest("[data-id]")) {
          console.log(event.target.closest("[data-id]"));
          console.log("view");
        }
      });
  }

  #render() {
    this.#renderProjects();
    this.#renderTodos();
    this.#renderTodoView();
  }

  #renderTodoView() {
    this.#view.replaceChildren();

    const currentTodo = this.#controller.currentTodo;
    console.table(currentTodo);

    if (!currentTodo) return;

    this.#createTodoViewElements(currentTodo);
  }

  #createTodoViewElements(currentTodo) {
    const todoView = document.createElement("div");
    todoView.classList.add("todo-info");
    const todoViewTitle = document.createElement("h1");
    const todoViewDescription = document.createElement("h2");
    const todoViewDueDate = document.createElement("h2");
    const todoViewPriority = document.createElement("h2");

    this.#addTodoViewContents(
      todoView,
      todoViewTitle,
      todoViewDescription,
      todoViewDueDate,
      todoViewPriority,
      currentTodo,
    );
  }

  #addTodoViewContents(
    todoView,
    todoViewTitle,
    todoViewDescription,
    todoViewDueDate,
    todoViewPriority,
    currentTodo,
  ) {
    todoViewTitle.textContent = currentTodo.title;
    todoViewDescription.textContent = currentTodo.description;
    todoViewDueDate.textContent = currentTodo.dueDate;
    todoViewPriority.textContent = currentTodo.priority;

    this.#appendTodoViewNodes(
      todoView,
      todoViewTitle,
      todoViewDescription,
      todoViewDueDate,
      todoViewPriority,
    );
  }

  #appendTodoViewNodes(
    todoView,
    todoViewTitle,
    todoViewDescription,
    todoViewDueDate,
    todoViewPriority,
  ) {
    todoView.appendChild(todoViewTitle);
    todoView.appendChild(todoViewDescription);
    todoView.appendChild(todoViewDueDate);
    todoView.appendChild(todoViewPriority);

    this.#view.appendChild(todoView);
  }

  #renderTodos() {
    this.#pendingTodos.replaceChildren();
    this.#doneTodos.replaceChildren();

    const pendingTodos = this.#controller.currentProject.pendingTodos;
    const doneTodos = this.#controller.currentProject.doneTodos;

    for (let pendingTodoInfo of pendingTodos) {
      const { todo, todoTitle, todoBtns, doTodoBtn, removeTodoBtn } =
        this.#createTodoElements(false);

      this.#addTodoClassesAndContent(
        todo,
        todoTitle,
        todoBtns,
        doTodoBtn,
        removeTodoBtn,
        pendingTodoInfo,
        false,
      );

      this.#pendingTodos.appendChild(todo);
    }

    for (let doneTodoInfo of doneTodos) {
      const { todo, todoTitle, todoBtns, doTodoBtn, removeTodoBtn } =
        this.#createTodoElements(true);

      this.#addTodoClassesAndContent(
        todo,
        todoTitle,
        todoBtns,
        doTodoBtn,
        removeTodoBtn,
        doneTodoInfo,
        true,
      );

      this.#doneTodos.appendChild(todo);
    }
  }

  #addTodoClassesAndContent(
    todo,
    todoTitle,
    todoBtns,
    doTodoBtn = undefined,
    removeTodoBtn,
    todoInfo,
    isDone,
  ) {
    todo.classList.add("todo");
    todo.dataset.id = todoInfo.id;
    todoTitle.textContent = todoInfo.title;
    todoBtns.classList.add("todo-btns");
    if (!isDone) {
      doTodoBtn.classList.add("do-todo");
      doTodoBtn.textContent = "V";
    }
    removeTodoBtn.classList.add("remove-todo");
    removeTodoBtn.textContent = "X";
  }

  #createTodoElements(isDone) {
    const todo = document.createElement("div");
    const todoTitle = document.createElement("h2");
    const todoBtns = document.createElement("div");
    const removeTodoBtn = document.createElement("button");

    todo.appendChild(todoTitle);
    todo.appendChild(todoBtns);

    if (!isDone) {
      const doTodoBtn = document.createElement("button");
      todoBtns.appendChild(doTodoBtn);
      todoBtns.appendChild(removeTodoBtn);
      return { todo, todoTitle, todoBtns, doTodoBtn, removeTodoBtn };
    } else {
      todoBtns.appendChild(removeTodoBtn);
      return { todo, todoTitle, todoBtns, undefined, removeTodoBtn };
    }
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
