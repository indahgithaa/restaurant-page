export default function snacksMenu() {
  const snacksDiv = document.createElement("div");

  snacksDiv.setAttribute("class", " breakfastDiv");

  const snacksArr = [
    new Snacks(
      "Fruit Rojak",
      "Fresh tropical fruits served with a homemade sweet, spicy, and sour Indonesian rojak sauce. <br/><br/>Vegan",
      "$7.50"
    ),
    new Snacks(
      "Dumplings (fried/steamed)",
      "8pcs of freshly steamed or golden pan-fried dumplings filled with soft tofu and vegetables. Drizzled with sesame oil. <br/><br/>Vegan, Contains nuts",
      "$10.00"
    ),
    new Snacks(
      "Fried Spring Rolls",
      "2pcs of golden fried homemade rolls filled with carrots, mushrooms, bean sprouts, tofu, and turnips. Served with sweet and tangy classic Vietnamese dipping sauce. <br/><br/>Contains soy, Vegan",
      "$6.00"
    ),
    new Snacks(
      "Mixed Fruits Pie",
      "A slice of soft and naturally sweetened pie made from self-raising flour, topped with homemade berry jam and mixed seasonal fruits. <br/><br/>Gluten-free, Contains egg",
      "$6.00"
    ),
  ];

  function createMenu(menu) {
    const menuDiv = document.createElement("div");
    const foodName = document.createElement("h3");
    const foodPrice = document.createElement("p");
    const foodDesc = document.createElement("p");
    const foodCardLeft = document.createElement("div");

    foodName.textContent = menu.getName();
    foodPrice.textContent = menu.getPrice();
    foodDesc.innerHTML = menu.getDesc();

    foodCardLeft.appendChild(foodName);
    foodCardLeft.appendChild(foodPrice);
    menuDiv.appendChild(foodCardLeft);
    menuDiv.appendChild(foodDesc);

    foodName.setAttribute("id", "foodMenuName");
    foodPrice.setAttribute("id", "foodMenuPrice");
    foodDesc.setAttribute("id", "foodMenuDesc");
    menuDiv.setAttribute("id", "subMenuDiv");

    snacksDiv.appendChild(menuDiv);
  }

  for (let i = 0; i < snacksArr.length; i++) {
    createMenu(snacksArr[i]);
  }

  return snacksDiv;
}

class Snacks {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  getName = () => this.name;
  getDesc = () => this.description;
  getPrice = () => this.price;
}
