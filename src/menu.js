import dish1 from "./assets/Chocolate-Trifle.jpg";
import dish2 from './assets/Cookie-dough-fudge.jpg'
import dish3 from './assets/Oreo-cookie-bars-.jpg'
import dish4 from './assets/Pound-cake-Tiramisu.jpg'
import dish5 from './assets/Red-velvet-cake-truffles.jpg'

import "./styles/menu.css";

const Menu = () => {
  const menu = document.createElement("div");
  menu.id = "menu";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const dishes = document.createElement("div");
  dishes.id = "dishes";

  dishes.appendChild(createDish(dish1, "Chocolate Trifle"));
  dishes.appendChild(createDish(dish2, "Cookie dough fudge"));
  dishes.appendChild(createDish(dish3, "Oreo cookie bars"));
  dishes.appendChild(createDish(dish4, "Pound cake Tiramisu"));
  dishes.appendChild(createDish(dish5, "Red velvet cake truffles"));

  menu.appendChild(h1);
  menu.appendChild(dishes);
  return menu;
};

function createDish(img, headline) {
  const dishdiv = document.createElement("div");
  const dishimg = new Image();
  dishimg.src = img

  const dishtext = document.createElement('div')
  dishtext.classList.add("dishtext")
  const h1 = document.createElement('h1')
  h1.textContent = headline
  const order_btn = document.createElement('button')
  order_btn.classList.add("order")
  order_btn.textContent = "Order now!"
  dishtext.appendChild(h1)
  dishtext.appendChild(order_btn)

  dishdiv.appendChild(dishimg)
  dishdiv.appendChild(dishtext)
  return dishdiv
}

export default Menu;
