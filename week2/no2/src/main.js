import { initialCalender } from "./data.js";

const calenderArea = document.getElementById("calender");

const calenderState = [...initialCalender];
const filteredCalender = [];

filteredCalender.map((calender) => {
  const oneDay = document.createElement("article");
  oneDay.id = "one_day";

  const day = document.createElement("time");
  day.id = "day";
  day.innerText = calender.day;

  const iconWrapper = document.createElement("div");
  iconWrapper.id = "icon";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-clover";

  const iconNo = document.createElement("div");
  iconNo.id = "icon_no";
  iconNo.innerText = calender.things_to_do;

  const date = document.createElement("time");
  date.id = "date";
  date.innerText = calender.date;

  oneDay.appendChild(day);
  oneDay.appendChild(iconWrapper);
  iconWrapper.appendChild(icon);
  iconWrapper.appendChild(iconNo);
  oneDay.appendChild(date);

  calenderArea.appendChild(oneDay);
});

import { initialCategories } from "./data.js";

const categoriesArea = document.getElementById("todo");

filteredCategories.map((categories) => {
  const category = document.createElement("div");
  category.id = categories.category;

  const categoryTitle = document.createElement("h2");
  categoryTitle.className = categories.category;
  categoryTitle.innerText = categories.category;

  const categoryIcon = document.createElement("i");
  categoryIcon.className = "fa-solid fa-circle-plus";

  category.appendChild(categoryTitle);
  category.appendChild(categoryIcon);

  categoriesArea.appendChild(category);
});

import { initialEveryDayToDos } from "./data.js";

const everydayToDosArea = document.getElementById("everyday_todo_list");

filteredEverydayToDos.map((everydayToDos) => {
  const everydayToDo = document.createElement("li");
  everydayToDo.id = "everyday_todo_items";
  everydayToDo.innerText = everydayToDos.item;

  const toDoIcon = document.createElement("i");
  toDoIcon.className = "fa-solid fa-heart";

  everydayToDo.appendChild(toDoIcon);
  everydayToDosArea.appendChild(everydayToDo);
});

import { initialExerciseToDos } from "./data.js";

const exerciseToDosArea = document.getElementById("exercise_todo_list");

filteredExerciseToDos.map((exerciseToDos) => {
  const exerciseToDo = document.createElement("li");
  exerciseToDo.id = "exercise_todo_items";
  exerciseToDo.innerText = exerciseToDos.item;

  const toDoIcon = document.createElement("i");
  toDoIcon.className = "fa-solid fa-heart";

  exerciseToDo.appendChild(toDoIcon);
  exerciseToDosArea.appendChild(exerciseToDo);
});

import { initialSoptToDos } from "./data.js";

const soptToDosArea = document.getElementById("sopt_todo_list");

filteredSoptToDos.map((soptToDos) => {
  const soptToDo = document.createElement("li");
  soptToDo.id = "sopt_todo_items";
  soptToDo.innerText = soptToDos.item;

  const toDoIcon = document.createElement("i");
  toDoIcon.className = "fa-solid fa-heart";

  soptToDo.appendChild(toDoIcon);
  soptToDosArea.appendChild(soptToDo);
});

import { initialStudyToDos } from "./data.js";

const studyToDosArea = document.getElementById("study_todo_list");

filteredStudyToDos.map((studyToDos) => {
  const studyToDo = document.createElement("li");
  studyToDo.id = "study_todo_items";
  studyToDo.innerText = studyToDos.item;

  const toDoIcon = document.createElement("i");
  toDoIcon.className = "fa-solid fa-heart";

  studyToDo.appendChild(toDoIcon);
  studyToDosArea.appendChild(studyToDo);
});
