import pumpkinSoup from '../assets/pumpkin-soup.jpeg'

export default function menuPage() {
    const page = document.querySelector('.page')

    const menuHeader = document.createElement('p');
    const pumpkinSoupImg = document.createElement('img')

    menuHeader.textContent = 'Menu';
    pumpkinSoupImg.setAttribute('id', 'pumpkinsoup')
    pumpkinSoupImg.src = pumpkinSoup;
    
    page.appendChild(menuHeader)
    page.appendChild(pumpkinSoupImg)
}