import menuPage from './menupage';
import contactPage from './contactpage';
import footerLoad from './footerLoad';
import leafImage from '../assets/leaf.png';

const switchDiv = document.createElement('div');
const navbar = document.createElement('ul');

const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
const resto = document.createElement('li');

const homeNav = document.createElement('a');
const menuNav = document.createElement('a');
const contactNav = document.createElement('a');
const restoName = document.createElement('h1');
const leafImg = document.createElement('img');

navbar.setAttribute('class', 'navbar-container');
switchDiv.setAttribute('id', 'switchdiv');
restoName.setAttribute('id', 'restoname');
leafImg.setAttribute('id', 'leaf');

homeNav.textContent = 'Home';
menuNav.textContent = 'Menu';
contactNav.textContent = 'Contact';
restoName.textContent = 'PureHut';
leafImg.src = leafImage;

homeNav.setAttribute('href', '#home');
menuNav.setAttribute('href', '#menu');
contactNav.setAttribute('href', '#contact');;
restoName.setAttribute('href', '#home');

home.appendChild(homeNav);
menu.appendChild(menuNav);
contact.appendChild(contactNav);
resto.appendChild(restoName)

switchDiv.appendChild(home);
switchDiv.appendChild(menu);
switchDiv.appendChild(contact);

navbar.appendChild(switchDiv)
navbar.appendChild(restoName);
navbar.appendChild(leafImg);

navbar.classList.add('hiddenY');

export default function navbarLoad() {
    const content = document.querySelector('#content');

    content.appendChild(navbar);

    const activeNav = document.querySelectorAll('#switchdiv a');

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
        window.scrollTo(0, 0);
        content.innerHTML = '';
        navbarLoad();
        menuPage();
        footerLoad();
    })

    home.addEventListener('click', () => {
        window.location.reload();
    })

    contact.addEventListener('click', (e) => {
        window.scrollTo(0, 0);
        e.preventDefault();
        content.innerHTML = '';
        navbarLoad();
        contactNav.style.color = 'var(--color-3)';
        contactPage();
        footerLoad();
    })
}

export {
    menuNav,
    homeNav,
    contactNav,
}