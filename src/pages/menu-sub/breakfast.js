export default function breakfastMenu() {
    const breakfastDiv = document.createElement('div');

    breakfastDiv.setAttribute('class', ' breakfastDiv');
    
    let breakfastArr = [
        new Breakfast('Sweet Pumpkin Pancakes', 'Naturally sweetened pancakes made with mashed organic pumpkin, cinnamon, and ginger. Served with fresh berries and honey. <br/><br/>Vegan, Gluten-free, Contains soy', '$12.30'),
        new Breakfast('Raspberry Chia English Muffin', 'Fluffy and low-sugar English muffin dotted with fresh raspberries and crunchy chia seeds. Served with homemade berry jam. <br/><br/>Gluten-free, Contains egg', '$11.00'),
        new Breakfast('Guacamole', 'Made fresh with avocadoes, onions, tomatoes, cilantro, and jalapeno. Served with lime juice. <br/><br/>Vegan, Request no onion', '$12.60'),
        new Breakfast('Sourdough Toast', 'Available topping: <ul><li>Homemade tropical fruits jam</li><li>Unsweetened almond butter</li><li>unsweetened peanut butter<br/><br/>Gluten-free', '$2.00')
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
        
        breakfastDiv.appendChild(menuDiv);
    }

    for (let i = 0; i < breakfastArr.length; i++) {
        createMenu(breakfastArr[i]);
    }

    return breakfastDiv;
}

class Breakfast {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
}