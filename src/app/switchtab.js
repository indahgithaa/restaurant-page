export default function switchTab() {
    const content = document.querySelector('#content');

    const navbar = document.createElement('ul');
    navbar.setAttribute('class', 'navbar-container');

    const homeNav = document.createElement('li');
    const menuNav = document.createElement('li');
    const contactNav = document.createElement('li');
    const promoNav = document.createElement('li');

    homeNav.textContent = 'Home';
    menuNav.textContent = 'Menu';
    contactNav.textContent = 'Contact';
    promoNav.textContent = 'Promo';

    navbar.appendChild(homeNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);
    navbar.appendChild(promoNav);

    content.appendChild(navbar);
}