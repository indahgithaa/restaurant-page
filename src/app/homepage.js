export default function homePage() {
    const content = document.querySelector('#content');

    const coverImg = document.createElement('img');
    coverImg.src = '../assets/cover.png';
    coverImg.setAttribute('id', 'coverImg')

    content.appendChild(coverImg)
}