import { initialCalender as calender, initialToDos as toDos } from "./data.js";

const displayToDos = () => {
  const todoArea = document.getElementById("todo");

  todoArea.innerHTML = "";
  toDos.forEach((category) => {
    const categoryBox = document.createElement("div");
    categoryBox.id = "category_box";

    const titleBox = document.createElement("div");
    titleBox.id = category.category;

    const title = document.createElement("h2");
    //title에 class 필요한지 css 생각해보기
    title.innerText = category.category;

    const iconWrapper = document.createElement("span");
    iconWrapper.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';

    const todoListWrapper = document.createElement("div");
    todoListWrapper.id = "todo_list_wrapper";

    const todoList = document.createElement("ul");
    todoList.id = "todo_list";
    //여기도 class 필요??

    category.item.forEach((item) => {
      const todoItem = document.createElement("li");
      //   todoItem.innerText = item;

      const todoItemName = document.createElement("span");
      todoItemName.innerText = item.name;

      const heartWrapper = document.createElement("span");
      heartWrapper.addEventListener("click", () => {
        item.isSelected = !item.isSelected;
        displayToDos();
        displayCalender();
      });

      if (item.isSelected) {
        heartWrapper.className = "selected";
      }

      heartWrapper.innerHTML = '<i class="fa-solid fa-heart"></i>';

      // 어떻게 해야 같은 li 안에 있으면서 하트 아이콘이 아이템 이름 텍스트 보다 앞에 올 수 있을까??
      todoItem.appendChild(heartWrapper);
      todoItem.appendChild(todoItemName);

      todoList.appendChild(todoItem);
    });
    // const todoItem = document.createElement("li");
    // todoItem.innerHTML = '<i class="fa-solid fa-heart"></i>';
    // todoItem.innerText = category.item;
    // //이렇게 하면 데이터 안의 모든 아이템에 대해서 리스트 생성이 되나??? 안되지 않나..?
    // //forEach 안에 또 forEach 를 써야하나? -> ㅇㅇㅇㅇㅇㅇㅇㅇ 그러네 ㅎㅎㅎ

    title.appendChild(iconWrapper);
    titleBox.appendChild(title);

    todoListWrapper.appendChild(todoList);
    // 할일목록에는 뒷배경색이 없어야하는데 가장 위 div 에 포함되어있어서 색이 있는걺가해서 또 다른 div로 감싸줫는데 여전히 색 있음.. ㅎㅎ
    categoryBox.appendChild(titleBox);
    categoryBox.appendChild(todoListWrapper);

    todoArea.appendChild(categoryBox);
  });
};

// const filteredEverydayTodoList = [];

// everydayToDos.forEach((todo) => {
//   filteredEverydayTodoList.push(todo.item);
//   console.log(filteredEverydayTodoList);
// });

// const displayEverydayTodo = () => {
//   const everydayToDoArea = document.getElementById("everyday_todo_list");

//   everydayToDos.forEach((todo) => {
//     const todoItem = document.createElement("li");
//     // todoItem.id = "todo_items"; 필요한가????css 생각해보기

//     const iconButton = document.createElement("button");
//     iconButton.id = "todo_item_button";
//     iconButton.type = "button";
//     iconButton.innerHTML = ' <i class="fa-solid fa-heart"></i>';
//     console.log(iconButton.innerHTML);
//     iconButton.innerText = todo.item;

//     todoItem.appendChild(iconButton);

//     everydayToDoArea.appendChild(todoItem);
//   });
// };

const displayCalender = () => {
  const calenderArea = document.getElementById("calender");
  calenderArea.innerHTML = "";
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
    if (day.day === "Fri") {
      let count = 0;
      toDos.forEach((todo) => {
        todo.item.forEach((item) => {
          if (item.isSelected === false) {
            count++;
          }
        });
      });
      iconNumber.innerText = count;
    } else {
      iconNumber.innerText = day.things_to_do;
    }

    //각 카테고리 별 투두리스트 어레이.length 로 투두 갯수 표시하기!!
    //문제 = 각 카테고리별로 filtered array 이름이 다를텐데 그걸 어떻게 지정..?

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
displayToDos();
// displayEverydayTodo();
