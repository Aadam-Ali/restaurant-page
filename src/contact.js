function contact() {
  const card = document.createElement("div");
  card.classList.add("card");

  const phoneNum = document.createElement("p");
  phoneNum.textContent = "Phone: 020 123 4567";

  const address = document.createElement("p");
  address.textContent = "Address: 17 Bruton Street, W1J 6QH, London";

  const locationImg = document.createElement("img");
  locationImg.classList.add("location-img");
  locationImg.src = "./images/location.jpg";
  locationImg.alt = "Mozzafiato restaurant location";

  card.appendChild(phoneNum);
  card.appendChild(address);
  card.appendChild(locationImg);

  return card;
}

export default contact;
