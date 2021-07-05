function home() {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("food-img");
  image.src = "./images/homepage.jpg";
  image.alt = "Curry and Rice";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Curry House is considered one of the finest balti restaurants in London's balti Triangle. With so many balti restaurants in the nation’s capital city to choose from, you will not find a better balti. Simple food done well consistently.";
  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Traditional cooking techniques capture the true spirit of the balti. The balti is cooked in the same dish as it is served in and the diner is expected to eat out of the same dish too! Our unique method of preparing the balti is a proven healthier alternative to a ordinary curry because it is cooked on a high flame burning up all the excess oil in the dish. The oldest balti dish in Curry House’s kitchen is over 40 years old.";
  card.appendChild(image);
  card.appendChild(paragraph1);
  card.appendChild(paragraph2);

  return card;
}

export default home;
{
  /* <div id="card">
<img src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2018/11/Yellow-Coconut-Curry.jpg" alt="Pizza">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a aliquet lorem. Proin nisl dolor, aliquam at ultricies nec, varius in dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi viverra est justo, at varius nibh varius a. Fusce quis nisl augue. Sed lacinia.</p>
</div> */
}
