import homePage from './homepage';

export default function navbarLoad() {
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


    function switchTab() {
        homeNav.addEventListener('click', () => {
            content.innerHTML = '';
            navbarLoad();
            homePage();
        })
        
        menuNav.addEventListener('click', () => {
            content.innerHTML = '';
            navbarLoad();
        })

        contactNav.addEventListener('click', () => {
            content.innerHTML = '';
            navbarLoad();
        })

        promoNav.addEventListener('click', () => {
            content.innerHTML = '';
            navbarLoad();
        })

        restoName.addEventListener('click', () => {
            content.innerHTML = '';
            navbarLoad();
            homePage();
        })
    }

    switchTab();
}