import home from "./home";
import menu from "./menu";
import contact from "./contact";

let container = document.getElementById("content");
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let contactBtn = document.getElementById("contact");

container.appendChild(home());

homeBtn.addEventListener("click", function () {
  container.innerHTML = "";
  container.appendChild(home());
});

menuBtn.addEventListener("click", function () {
  container.innerHTML = "";
  container.appendChild(menu());
});

contactBtn.addEventListener("click", function () {
  container.innerHTML = "";
  container.appendChild(contact());
});
