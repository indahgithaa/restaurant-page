export default function breakfastMenu() {
    const breakfastDiv = document.createElement('div');
    
    const breakfastArr = [
        new Breakfast('Sweet Pumpkin Pancakes', 'Vegan, Gluten-free, Contains soy', '$12.30'),
        new Breakfast('Raspberry Chia English Muffins', 'Gluten-free, Contains egg', '$13.00'),
        new Breakfast('Guacamole', 'Vegan <br/>Request no onion, ', '$12.30'),
    ]
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