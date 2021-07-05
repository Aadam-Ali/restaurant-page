(()=>{"use strict";const e=function(){const e=document.createElement("div");e.classList.add("card");const t=document.createElement("img");t.classList.add("food-img"),t.src="./images/homepage.jpg",t.alt="Curry and Rice";const n=document.createElement("p");n.textContent="Curry House is considered one of the finest balti restaurants in London's balti Triangle. With so many balti restaurants in the nation’s capital city to choose from, you will not find a better balti. Simple food done well consistently.";const i=document.createElement("p");return i.textContent="Traditional cooking techniques capture the true spirit of the balti. The balti is cooked in the same dish as it is served in and the diner is expected to eat out of the same dish too! Our unique method of preparing the balti is a proven healthier alternative to a ordinary curry because it is cooked on a high flame burning up all the excess oil in the dish. The oldest balti dish in Curry House’s kitchen is over 40 years old.",e.appendChild(t),e.appendChild(n),e.appendChild(i),e};function t(e,t){const n=document.createElement("div");n.classList.add("menu-item");const i=document.createElement("h2"),d=document.createElement("p");return i.textContent=e,d.textContent=t,n.appendChild(i),n.appendChild(d),n}let n=document.getElementById("content"),i=document.getElementById("home"),d=document.getElementById("menu"),a=document.getElementById("contact");n.appendChild(e()),i.addEventListener("click",(function(){n.innerHTML="",n.appendChild(e())})),d.addEventListener("click",(function(){n.innerHTML="",n.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu-card"),e.appendChild(t("Chicken Curry","4.75")),e.appendChild(t("Lamb Curry","4.75")),e.appendChild(t("Vegetable Curry","3.95")),e.appendChild(t("Keema","8.95")),e.appendChild(t("Mixed Grill","8.95")),e.appendChild(t("Samosa","2.95")),e.appendChild(t("Chicken Kebab","2.95")),e.appendChild(t("Lamb Kebab","3.45")),e}())})),a.addEventListener("click",(function(){n.innerHTML="",n.appendChild(function(){const e=document.createElement("div");e.classList.add("card");const t=document.createElement("p");t.textContent="Phone: 020 123 4567";const n=document.createElement("p");n.textContent="Address: 17 Bruton Street, W1J 6QH, London";const i=document.createElement("img");return i.classList.add("location-img"),i.src="./images/location.jpg",i.alt="Mozzafiato restaurant location",e.appendChild(t),e.appendChild(n),e.appendChild(i),e}())}))})();