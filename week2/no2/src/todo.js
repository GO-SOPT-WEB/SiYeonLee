import {
  initialCalender as calender,
  initialCategories as categories,
  initialEveryDayToDos as everydayToDos,
  initialExerciseToDos,
  initialSoptToDos,
  initialStudyToDos,
} from "./data.js";

// const displayEverydayTodo = () => {
//   const everydayToDoArea = document.getElementById("everyday_todo_list");

//   everydayToDos.forEach((todo) => {
//     const todoItem = document.createElement("li");
//     // todoItem.id = "todo_items";

//     // const iconButton = document.createElement("button");
//     // iconButton.type = "button";
//     // iconButton.id = "todo_item_button";

//     const icon = document.createElement("i");
//     icon.className = "fa-heart";
//     icon.type = "button";

// iconButton.appendChild(icon);
// todoItem.appendChild(iconButton);

//     todoItem.appendChild(icon);

//     everydayToDoArea.appendChild(todoItem);
//   });
// };

const displayCalender = () => {
  const calenderArea = document.getElementById("calender");

  calender.forEach((day) => {
    const oneDay = document.createElement("article");
    oneDay.id = "one_day";

    const dayName = document.createElement("time");
    dayName.id = "day";
    dayName.innerText = day.day;

    const iconWrapper = document.createElement("div");
    iconWrapper.id = "clover_icon";
    iconWrapper.innerHTML = '<i class="fa-solid fa-clover"></i>';

    const iconNumber = document.createElement("div");
    iconNumber.id = "icon_no";
    iconNumber.innerText = day.things_to_do;

    const date = document.createElement("time");
    date.id = "date";
    date.innerText = day.date;

    iconWrapper.appendChild(iconNumber);

    oneDay.appendChild(dayName);
    oneDay.appendChild(iconWrapper);
    oneDay.appendChild(date);

    calenderArea.appendChild(oneDay);
  });
};

displayCalender();
// displayEverydayTodo();
