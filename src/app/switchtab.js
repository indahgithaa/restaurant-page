export default function switchTab() {
    const content = document.querySelector('#content');

    const switchDiv = document.createElement('div');
    const navbar = document.createElement('ul');
    const homeNav = document.createElement('li');
    const menuNav = document.createElement('li');
    const contactNav = document.createElement('li');
    const promoNav = document.createElement('li');
    const restoName = document.createElement('h1');
    const leafImg = document.createElement('img');

    navbar.setAttribute('class', 'navbar-container');
    switchDiv.setAttribute('id', 'switchdiv');
    restoName.setAttribute('id', 'restoname');
    leafImg.setAttribute('id', 'leaf');

    homeNav.textContent = 'Home';
    menuNav.textContent = 'Menu';
    contactNav.textContent = 'Contact';
    promoNav.textContent = 'Promo';
    restoName.textContent = 'PureHut';
    leafImg.src = '../assets/leaf.png';

    switchDiv.appendChild(homeNav);
    switchDiv.appendChild(menuNav);
    switchDiv.appendChild(contactNav);
    switchDiv.appendChild(promoNav);
    navbar.appendChild(switchDiv)
    navbar.appendChild(restoName);
    navbar.appendChild(leafImg);

    content.appendChild(navbar);
}