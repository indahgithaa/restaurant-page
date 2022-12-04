import cover from '../assets/cover.png'

export default function homePage() {
    const content = document.querySelector('#content');

    const homepage = document.createElement('div')
    const coverImg = document.createElement('img');
    const welcomingWrap = document.createElement('div');
    const welcoming = document.createElement('h1');
    const exploreBtn = document.createElement('button');

    homepage.setAttribute('class', 'homepage');
    coverImg.setAttribute('src', cover)
    coverImg.setAttribute('id', 'coverImg');
    exploreBtn.setAttribute('id', 'expBtn');
    welcomingWrap.setAttribute('id', 'welcomingWrap');
    welcoming.setAttribute('id', 'welcoming');

    welcoming.innerHTML = 'The Goodness of <span> Real Foods </span> for Your Healthier Life';
    exploreBtn.textContent = 'Explore Our Menu'

    welcomingWrap.appendChild(welcoming);
    welcoming.appendChild(exploreBtn);
    homepage.appendChild(coverImg);
    homepage.appendChild(welcomingWrap);

    content.appendChild(homepage);
}