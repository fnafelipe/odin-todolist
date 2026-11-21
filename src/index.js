import { Controller } from "./modules/controller.js";

import { Interface } from "./modules/interface.js";

import "./styles.css";

const controller = new Controller();

controller.addProject("work");

controller.addTodoToProject(
  "clean room",
  "asdjalksjdklasjdklajdkl jakllkasjdlasjdklasj d adsklsjadklajaslidjalkj dsada",
  "02/12/2027",
  "important",
);

controller.addTodoToProject(
  "but bread",
  "asdjalksjdklasjdklajdkl jakllkasjdlasjdklasj d",
  "03/20/2027",
  "critical",
);

console.log(controller);

const taskdo = new Interface(controller);

/*
tests

const todo1 = new Todo(
  "Buy bread",
  "go to the grocery store and buy 6 buns",
  "11/22/2026",
  "important",
);

const todo2 = new Todo(
  "Clean House",
  "pass the wop on the entira floor",
  "11/26/2026",
  "critical",
);

const project = new Project("Home");

project.rename("Work");
project.rename("  ");
project.rename("");
project.rename(6);
project.rename(true);

project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo("todo3");
project.addTodo("");
project.addTodo(" ");

project.removeTodo(todo1);
project.removeTodo("todo2");

project.removeTodo("");
project.removeTodo(" ");

project.doTodo(todo2);*/
