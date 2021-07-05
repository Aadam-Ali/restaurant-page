function menu() {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  card.appendChild(createItem("Chicken Curry", "4.75"));
  card.appendChild(createItem("Lamb Curry", "4.75"));
  card.appendChild(createItem("Vegetable Curry", "3.95"));
  card.appendChild(createItem("Keema", "8.95"));
  card.appendChild(createItem("Mixed Grill", "8.95"));
  card.appendChild(createItem("Samosa", "2.95"));
  card.appendChild(createItem("Chicken Kebab", "2.95"));
  card.appendChild(createItem("Lamb Kebab", "3.45"));

  return card;
}

function createItem(name, price) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const title = document.createElement("h2");
  const cost = document.createElement("p");

  title.textContent = name;
  cost.textContent = price;

  item.appendChild(title);
  item.appendChild(cost);

  return item;
}

export default menu;
