// ******************** food Items Listing ********************

const foodItems = [
  {
    id: 1,
    img: "images/breakfast/breadbutter.jpg",
    title: "Bread and Butter",
    price: 125,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 2,
    img: "images/breakfast/healthybreakfast.jpg",
    title: "Healthy Breakfast",
    price: 250,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 3,
    img: "images/breakfast/eggsandjuice.jpg",
    title: "Fried eggs",
    price: 150,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 4,
    img: "images/breakfast/fruitsalad.jpg",
    title: "Oatmeal",
    price: 165,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 5,
    img: "images/breakfast/milk.jpg",
    title: "a Glass of Milk",
    price: 65,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 6,
    img: "images/breakfast/oatmeal.jpg",
    title: "Healthy Oatmeal",
    price: 135,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "breakfast",
  },
  {
    id: 7,
    img: "images/lunch/freshtomato.jpg",
    title: "Fresh Tomato",
    price: 145,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 8,
    img: "images/lunch/fruitsalad.jpg",
    title: "Fruit Salad",
    price: 195,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 9,
    img: "images/lunch/healthysnackswithjuice.jpg",
    title: "Healthy Snacks",
    price: 210,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 10,
    img: "images/lunch/sandwichwithlettuce.jpg",
    title: "Lettuce Sandwich",
    price: 150,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 11,
    img: "images/lunch/shrimps.jpg",
    title: "Shrimps",
    price: 350,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 12,
    img: "images/lunch/vegsalad.jpg",
    title: "Veg Salad",
    price: 220,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "lunch",
  },
  {
    id: 13,
    img: "images/dinner/fishdish.jpg",
    title: "Fish Dish",
    price: 555,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
  {
    id: 14,
    img: "images/dinner/roastedmeat.jpg",
    title: "Roasted Meat",
    price: 850,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
  {
    id: 15,
    img: "images/dinner/friedeggs.jpg",
    title: "Fried Eggs",
    price: 275,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
  {
    id: 16,
    img: "images/dinner/friedrice.jpg",
    title: "Fried Rice",
    price: 450,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
  {
    id: 17,
    img: "images/dinner/vegthali.jpg",
    title: "Indian Veg Thali",
    price: 650,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
  {
    id: 18,
    img: "images/dinner/meat.jpg",
    title: "Fried Fish",
    price: 850,
    brief:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, odit reprehenderit sequi cumque quasi tempora.",
    category: "dinner",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // ********************************** class selectors **********************************

  const products = document.querySelector(".main");
  const navBar = document.querySelector(".nav-bar");

  // ********************************** functions **********************************
  displayProducts(foodItems);
  createBtns(foodItems);

  // ********************************** function structures **********************************

  function displayProducts(items) {
    const displayItems = items
      .map((item) => {
        return `<article class="item-box">
      <div class="item-image">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <div class="item-text">
        <h2 class="head-two">
          ${item.title}
          <span class="head-two-price"
            ><i class="fas fa-rupee-sign"></i>${item.price}</span
          >
        </h2>
        <hr class="body-divide" />
        <p class="para">${item.brief}</p>
      </div>
    </article>`;
      })
      .join("");

    products.innerHTML = displayItems;
  }

  function createBtns(btns) {
    const createBtns = btns
      .reduce(
        (acc, cur) => {
          if (acc.indexOf(cur.category) === -1) {
            acc.push(cur.category);
          }
          return acc;
        },
        ["all"]
      )
      .map((item) => {
        return `<button type="button" class="nav-button" data-id="${item}">${item}</button>`;
      })
      .join("");

    navBar.innerHTML = createBtns;
  }

  // ********************************** Class selector for navigation buttons **********************************
  const navBtns = document.querySelectorAll(".nav-button");

  // ********************************** Event Listeners **********************************
  navBtns.forEach((btns) => {
    btns.addEventListener("click", (btn) => {
      const btnCategory = btn.currentTarget.dataset.id;
      const itemCategory = foodItems.filter((item) => {
        if (btnCategory === item.category) {
          return item.category;
        }        
        console.log(item.title)
      });
      if (btnCategory === "all") {
        displayProducts(foodItems);
      } else {
        displayProducts(itemCategory);
        
      }
    });
  });
});
