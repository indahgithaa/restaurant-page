import css from '../src/style.css';

import menuPage from './pages/menupage';
import homePage from './pages/homepage';
import contactPage from './pages/contactpage';
import promoPage from './pages/promopage';
import footerLoad from './pages/footerLoad';

const content = document.querySelector('#content');

const switchDiv = document.createElement('div');
const navbar = document.createElement('ul');

const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
const promo = document.createElement('li');
const resto = document.createElement('li');

const homeNav = document.createElement('a');
const menuNav = document.createElement('a');
const contactNav = document.createElement('a');
const promoNav = document.createElement('a');
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

homeNav.setAttribute('href', '#home');
menuNav.setAttribute('href', '#menu');
contactNav.setAttribute('href', '#contact');
promoNav.setAttribute('href', '#promo');
restoName.setAttribute('href', '#home');

home.appendChild(homeNav);
menu.appendChild(menuNav);
contact.appendChild(contactNav);
promo.appendChild(promoNav);
resto.appendChild(restoName)

switchDiv.appendChild(home);
switchDiv.appendChild(menu);
switchDiv.appendChild(contact);
switchDiv.appendChild(promo);

navbar.appendChild(switchDiv)
navbar.appendChild(restoName);
navbar.appendChild(leafImg);

function navbarLoad() {
    content.appendChild(navbar);

    const activeNav = document.querySelectorAll('a');

    activeNav.forEach((nav) => {
        nav.addEventListener('click', (e) => {
            activeNav.forEach((btn) => {
                e.target.classList.add('active');
                btn.classList.remove('active');
            })
        })

        if (nav.classList.contains('active')) {
            nav.style.color = 'var(--color-3)';
        } else {
            nav.style.color = 'var(--color-6)';
        }
    })

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        if (navbar.classList.contains('sticky')) {
            navbar.style.background = 'white';
            navbar.style.height = '70px';
        } else {
            navbar.style.background = 'none';
            navbar.style.height = '80px';
        }
    })

    restoName.addEventListener('click', () => {
        window.location.reload();
    })

    menu.addEventListener('click', () => {
        content.innerHTML = '';
        navbarLoad();
        menuPage();
        footerLoad();
    })

    home.addEventListener('click', () => {
        content.innerHTML = '';
        navbarLoad();
        homePage();
    })

    contact.addEventListener('click', () => {
        content.innerHTML = '';
        navbarLoad();
        contactPage();
        footerLoad();
    })

    promo.addEventListener('click', (e) => {
        e.target.classList.add('active');
        content.innerHTML = '';
        navbarLoad();
        promoPage();
        footerLoad();
    })
}

window.onload = () => {
    navbarLoad();
    homePage();
    footerLoad();
}