const content = document.querySelector('#content')

export default function menuPage() {
    const menupage = document.createElement('div'); 
    const menuTitle = document.createElement('h1');
    const menuCategory = document.createElement('div');
    const breakfastNav = document.createElement('li');
    const mainNav = document.createElement('li');
    const snacksNav = document.createElement('li');
    const drinkNav = document.createElement('li');
    const breakfastLink = document.createElement('a');
    const mainLink = document.createElement('a');
    const snacksLink = document.createElement('a');
    const drinkLink = document.createElement('a');

    breakfastNav.appendChild(breakfastLink);
    mainNav.appendChild(mainLink);
    snacksNav.appendChild(snacksLink);
    drinkNav.appendChild(drinkLink);

    menuCategory.appendChild(breakfastNav);
    menuCategory.appendChild(mainNav);
    menuCategory.appendChild(snacksNav);
    menuCategory.appendChild(drinkNav);

    menupage.setAttribute('class', 'menuPage');
    menuTitle.setAttribute('id', 'menuTitle');
    menuCategory.setAttribute('id', 'menuCategory');

    menuTitle.textContent = 'MENU';
    breakfastLink.textContent = 'Breakfast';
    mainLink.textContent = 'Main';
    snacksLink.textContent = 'Snacks';
    drinkLink.textContent = 'Drinks';

    menupage.appendChild(menuTitle);
    menupage.appendChild(menuCategory);

    content.appendChild(menupage);
}