import Menu from "./data.js";

const menuArea = document.getElementById("menu_area");
const menus = Menu;

//메뉴파트

menus.forEach((menu) => {
  const card = document.createElement("article");

  const title = document.createElement("h2");
  title.innerText = menu.name;

  const hashtagContainer = document.createElement("span");
  hashtagContainer.className = "hashtag_container";

  const hashtagList = document.createElement("ul");
  hashtagList.className = "hashtag_list";

  menu.hashtags.forEach((hashtag) => {
    const hashtagItem = document.createElement("li");
    hashtagItem.innerText = hashtag;
    hashtagItem.className = "hashtag_item";

    hashtagList.appendChild(hashtagItem);
  });

  const plusIconWrapper = document.createElement("span");
  plusIconWrapper.className = "plus_icon_button";

  plusIconWrapper.addEventListener("click", () => {
    modal.style.display = "block";
  });
  const plusIcon = document.createElement("i");
  plusIcon.className = "fa-solid fa-plus";

  const modal = document.createElement("div");
  modal.className = "tag_modal";

  const modalContent = document.createElement("div");
  modalContent.className = "tag_modal_content";

  const modalHashtagList = document.createElement("ul");
  modalHashtagList.className = "modal_hashtag_list";

  menu.hashtags.forEach((hashtag) => {
    const modalHashtagItem = document.createElement("li");
    modalHashtagItem.innerText = hashtag;
    modalHashtagItem.className = "modal_hashtag_item";

    modalHashtagList.appendChild(modalHashtagItem);
  });

  const closeIconWrapper = document.createElement("span");
  closeIconWrapper.className = "close_icon_button";

  closeIconWrapper.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const closeIcon = document.createElement("i");
  closeIcon.className = "fa-solid fa-xmark";

  const image = document.createElement("img");
  image.alt = menu.name;
  image.src = menu.image_url;

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-heart";

  plusIconWrapper.appendChild(plusIcon);

  closeIconWrapper.appendChild(closeIcon);

  modal.appendChild(modalContent);
  modalContent.appendChild(modalHashtagList);
  modalContent.appendChild(closeIconWrapper);
  card.appendChild(modal);

  card.appendChild(title);
  card.appendChild(hashtagContainer);
  hashtagContainer.appendChild(hashtagList);
  hashtagContainer.appendChild(plusIconWrapper);
  card.appendChild(image);
  card.appendChild(icon);

  menuArea.appendChild(card);
});

//카테고리 선택 파트
const categoryButton = document.querySelectorAll("#type_list > label input");
const categoryList = [];

categoryButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.value;
    console.log("Clicked!!", category);
    if (button.checked) {
      if (!categoryList.includes(category)) {
        categoryList.push(category);
      }
    }
    displaySelectedCategory();
  });
});

const displaySelectedCategory = () => {
  const categoryArea = document.getElementById("category_area");

  categoryArea.innerHTML = "";

  categoryList.forEach((category) => {
    const categoryBox = document.createElement("article");
    categoryBox.id = "category_box";

    const categoryTitle = document.createElement("h3");
    categoryTitle.innerText = category;

    const deleteIconWrapper = document.createElement("div");
    deleteIconWrapper.id = "delete_icon_wrapper";

    deleteIconWrapper.addEventListener("click", () => {
      deleteSelectedCategory(category);
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-circle-xmark";

    deleteIconWrapper.appendChild(deleteIcon);
    categoryBox.appendChild(categoryTitle);
    categoryBox.appendChild(deleteIconWrapper);

    categoryArea.appendChild(categoryBox);
  });

  categoryButton.forEach((button) => {
    const category = button.value;
    if (categoryList.includes(category)) {
      button.checked = true;
    } else {
      button.checked = false;
    }
  });
};

const deleteSelectedCategory = (category) => {
  const index = categoryList.indexOf(category);
  categoryList.splice(index, 1);
  displaySelectedCategory();
};
