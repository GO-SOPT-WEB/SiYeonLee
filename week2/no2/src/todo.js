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
    title.innerText = category.category;

    const iconWrapper = document.createElement("span");
    iconWrapper.className = "plus_icon_wrapper";
    iconWrapper.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    iconWrapper.addEventListener("click", () => {
      console.log("button clicked");
      modal.style.display = "block";
    });

    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal_content";

    const modalInputWrapper = document.createElement("div");
    modalInputWrapper.className = "modal_input_wrapper";

    const modalInput = document.createElement("input");
    modalInput.className = "modal_input";
    modalInput.type = "text";
    modalInput.value = "";

    const closeIconWrapper = document.createElement("span");
    closeIconWrapper.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    closeIconWrapper.addEventListener("click", () => {
      modal.style.display = "none";
    });

    const addButtonWrapper = document.createElement("div");
    addButtonWrapper.className = "add_button_wrapper";

    const addButton = document.createElement("button");
    addButton.className = "add_button";
    addButton.innerText = "Add";
    addButton.addEventListener("click", () => {
      category.item.push({ name: modalInput.value, isSelected: false });
      modal.style.display = "none";
      displayToDos();
      displayCalender();
    });

    const todoListWrapper = document.createElement("div");
    todoListWrapper.id = "todo_list_wrapper";

    const todoList = document.createElement("ul");
    todoList.id = "todo_list";

    category.item.forEach((item) => {
      const todoItem = document.createElement("li");

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

      modalInputWrapper.appendChild(modalInput);
      modalInputWrapper.appendChild(closeIconWrapper);

      addButtonWrapper.appendChild(addButton);

      modalContent.appendChild(modalInputWrapper);
      modalContent.appendChild(addButtonWrapper);

      modal.appendChild(modalContent);

      categoryBox.appendChild(modal);

      todoItem.appendChild(heartWrapper);
      todoItem.appendChild(todoItemName);

      todoList.appendChild(todoItem);
    });

    title.appendChild(iconWrapper);
    titleBox.appendChild(title);

    todoListWrapper.appendChild(todoList);
    categoryBox.appendChild(titleBox);
    categoryBox.appendChild(todoListWrapper);

    todoArea.appendChild(categoryBox);
  });
};

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
    if (day.day === "Fri") {
      iconWrapper.className = "selected_clover";
    }

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

    const date = document.createElement("time");
    date.id = "date";
    date.innerText = day.date;
    if (day.day === "Fri") {
      date.className = "selected_date";
    }

    iconWrapper.appendChild(iconNumber);

    oneDay.appendChild(dayName);
    oneDay.appendChild(iconWrapper);
    oneDay.appendChild(date);

    calenderArea.appendChild(oneDay);
  });
};

const calenderButton = document.querySelector("#calender_button");
calenderButton.addEventListener("click", () => {
  console.log("calenderbtn clicked");
  location.href = "index.html";
});

const myButton = document.querySelector("#my_button");
myButton.addEventListener("click", () => {
  console.log("my btn clicked");
  location.href = "category.html";
});

displayCalender();
displayToDos();
