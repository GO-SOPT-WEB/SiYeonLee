import { initialMenu } from "./data.js";

const menuArea = document.getElementById("menu_area");

const menuState = [...initialMenu];
const filteredMenu = [];

const categoryButton = document.querySelectorAll("#type_list > label > input");

function renderMenuState() {
  menuArea.innerHTML = "";

  filteredMenu.forEach((menu) => {
    const card = document.createElement("article");

    const title = document.createElement("h2");
    title.innerText = menu.name;

    const hashtagList = document.createElement("li");
    hashtagList.className = "hashtag_list";

    //   for (let tag of menu.hashtags) {
    //     const hashtagItem = document.createElement("ul");
    //     hashtagItem.className = "hashtag_item";
    //     hashtagItem.innerText = tag;

    //     hashtagList.appendChild(hashtagItem);
    //   }

    menu.hashtags.forEach((tag) => {
      const hashtagItem = document.createElement("ul");
      hashtagItem.className = "hashtag_item";
      hashtagItem.innerText = tag;

      hashtagList.appendChild(hashtagItem);
    });

    const image = document.createElement("img");
    image.alt = menu.name;
    image.src = menu.image_url;

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-heart";

    card.appendChild(title);
    card.appendChild(hashtagList);
    card.appendChild(image);
    card.appendChild(icon);

    menuArea.appendChild(card);
  });
}

renderMenuState();

// import { initialCategory } from "./data.js";

// const categoryArea = document.getElementById("category_area");

// filteredCategory.forEach((selectedCategory) => {
//   const categoryCard = document.createElement("article");
//   categoryCard.innerText = ;
// })
