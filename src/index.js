import "./styles/index.css";
import Menu from "./menu";
import Contact from "./contact";
import Home from "./home";
const content = document.querySelector("#content");

const homediv = Home();
const menudiv = Menu();
const contactdiv = Contact();

const nav = document.createElement("div");
nav.id = "nav";
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Home";
li1.classList.add("selected");
const li2 = document.createElement("li");
li2.innerText = "Menu";
const li3 = document.createElement("li");
li3.innerText = "Contact";
li2.addEventListener("click", clickHandle);
li3.addEventListener("click", clickHandle);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
nav.appendChild(ul);

content.appendChild(nav);

const tab = document.createElement("div");
tab.id = "tab";

tab.appendChild(homediv);
content.appendChild(tab);

let last_tab = li1;

function clickHandle(e) {
  switch (e.target.innerText) {
    case "Home":
      changeTab(li1, homediv)
      break;
    case "Menu":
      changeTab(li2, menudiv)
      break;
    case "Contact":
      changeTab(li3, contactdiv)
      break;
  }
}

function changeTab(li, div) {
  tab.replaceChildren(div)
  last_tab.classList.remove("selected")
  last_tab.addEventListener('click', clickHandle)
  li.removeEventListener('click', clickHandle)
  li.classList.add("selected")
  last_tab = li
}