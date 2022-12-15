export default function beveragesMenu() {
    const beveragePage = document.createElement('div');
    const coffeeDiv = document.createElement('div');
    const juiceDiv = document.createElement('div');
    const teaDiv = document.createElement('div');

    const coffeeTitle = document.createElement('h2');
    const juiceTitle = document.createElement('h2');
    const teaTitle = document.createElement('h2');

    coffeeTitle.textContent = 'Coffee and Chocolate';
    teaTitle.textContent = 'Organic Tea';
    juiceTitle.textContent = 'Cold-Pressed Juice';

    coffeeDiv.appendChild(coffeeTitle);
    juiceDiv.appendChild(juiceTitle);
    teaDiv.appendChild(teaTitle);

    const coffeeArr = [
        new Beverages('Espresso', '$4.30'),
        new Beverages('Hot/Iced Latte', '$6.50'),
        new Beverages('Hot Chocolate', '$7.20'),
        new Beverages('Cappuccino', '$6.50'),
    ]

    const teaArr = [
        new Beverages('Black Tea', '$4.50'),
        new Beverages('Green Tea', '$5.00'),
        new Beverages('Dandelion', '$7.00'),
        new Beverages('Chamomile', '$7.00'),
        new Beverages('Earl Grey', '$7.00'),
    ]

    const juiceArr = [
        new Beverages('Apple', '$8.50'),
        new Beverages('Orange', '$8.00'),
        new Beverages('Carrot', '$11.00'),
        new Beverages('Carrot, Orange, Pineapple', '$11.50'),
        new Beverages('Green Vegetable Mix', '$10.00'),
    ]
    
    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();

        menuDiv.appendChild(foodName);
        menuDiv.appendChild(foodPrice);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        menuDiv.setAttribute('id', 'subMenuDiv');

        menuDiv.style.marginBottom = '10px';
        foodPrice.style.marginTop = '0';

        return menuDiv;
    }

    for (let i = 0; i < coffeeArr.length; i++) {
        coffeeDiv.appendChild(createMenu(coffeeArr[i]));
    }

    for (let i = 0; i < teaArr.length; i++) {
        teaDiv.appendChild(createMenu(teaArr[i]));
    }

    for (let i = 0; i < juiceArr.length; i++) {
        juiceDiv.appendChild(createMenu(juiceArr[i]));
    }

    beveragePage.appendChild(coffeeDiv);
    beveragePage.appendChild(teaDiv);
    beveragePage.appendChild(juiceDiv);

    beveragePage.classList.add('beveragePage');

    return beveragePage;

}

class Beverages {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName = () => this.name;
    getPrice = () => this.price;
}