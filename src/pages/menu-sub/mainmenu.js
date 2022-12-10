export default function mainMenu() {
    const mainMenuDiv = document.createElement('div');

    mainMenuDiv.setAttribute('class', ' subMenuDiv');
    
    const mainMenuArr = [
        new MainMenu('Tom Yum Vermicelli (soup/stir-fried)', 'Gluten-free brown rice vermicelli cooked with Thai tom yum homemade seasonings. Available options: soup and stir-fried. <br/><br/>Gluten-free, Vegan, Contains soy', '$11.20'),
        new MainMenu('Vegetable Caponata', 'Slow cooked caponata with arugula and tomato salad, tossed with a creamy vegan Caesar dressing. <br/><br/> Vegan, Contains nuts, Request for no garlic and onions', '$15.80'),
        new MainMenu('Vegetable Urap', 'Traditional steamed vegetables (bean sprouts, yardlong bean, spinach) mixed with Indonesian grated coconut seasonings. <br/><br/> Vegan', '$9.80'),
        new MainMenu('Mushroom Aglio Olio', 'Pasta cooked with fresh garlic, oregano, basil, and parsley. Dressed up with sautéed mushrooms.<br/><br/> Vegan', '11.30'),
        new MainMenu('Kombu Shiitake Soup', 'A savory and nutritious soup made with kombu seaweed, dried shiitake mushrooms, mirin, shoyu, and ginger.<br/><br/> Vegan', '$12.80'),
        new MainMenu('Egg and Potato Salad', 'Pan-fried potatoes with cherry tomatoes, fresh herbs, and soft-boiled egg. Served with vegan permesan cheese and honey mustard dressing.<br/><br/>Contains egg', '$13.00'),
        new MainMenu('Lemon-Herb Portobello Mushrooms', 'Grilled portobello mushroom in olive oil, parsley, and basil. Served with herbs and lemon juice.<br/><br/> Vegan', '$14.30'),
        new MainMenu('Tomato Risotto', 'Creamy risotto made with fresh tomatoes and brown rice. Shimmered in vegetable stock with fresh herbs. <br/><br/> Vegan', '$13.20'),
    ]

    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');
        const foodDesc = document.createElement('p');
        const foodCardLeft = document.createElement('div');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();
        foodDesc.innerHTML = menu.getDesc();

        foodCardLeft.appendChild(foodName);
        foodCardLeft.appendChild(foodPrice);
        menuDiv.appendChild(foodCardLeft);
        menuDiv.appendChild(foodDesc);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        foodDesc.setAttribute('id', 'foodMenuDesc');
        menuDiv.setAttribute('id', 'subMenuDiv');
        
        mainMenuDiv.appendChild(menuDiv);
    }

    for (let i = 0; i < mainMenuArr.length; i++) {
        createMenu(mainMenuArr[i]);
    }

    return mainMenuDiv;
}

class MainMenu {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
}