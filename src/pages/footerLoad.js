const content = document.querySelector('#content');

const restoNameF = document.createElement('h1');
const leafImgF = document.createElement('img');
restoNameF.setAttribute('id', 'restonameF');
leafImgF.setAttribute('id', 'leafF');
restoNameF.textContent = 'PureHut';
leafImgF.src = '../assets/leaf.png';

export default function footerLoad() {
    const footerWrap = document.createElement('div');
    const footerCard1 = document.createElement('div');
    const footerCard2 = document.createElement('div');
    const footerCard3 = document.createElement('div');
    const srcTitle = document.createElement('h3');
    const me = document.createElement('h4');
    const info = document.createElement('p');
    const repo = document.createElement('a');

    srcTitle.textContent = 'Source';
    repo.textContent = 'Repo on GitHub'
    repo.href = 'https://github.com/lemonaisu888/restaurant-page';
    me.innerHTML = 'Restaurant Page by Lemonice <br/> 2022';
    info.innerHTML = 'This is only a fictional site. <br/> Created with Webpack and Vanilla JavaScript. <br/>Check out this repository on GitHub!'

    footerWrap.setAttribute('id', 'footerWrap');
    footerCard1.setAttribute('id', 'footerc1');
    footerCard2.setAttribute('id', 'footerc2');
    footerCard3.setAttribute('id', 'footerc3');
    repo.setAttribute('id', 'repo');

    function imageSource(creator) {
        const source = document.createElement('div');
        const creatorName = document.createElement('a');

        creatorName.setAttribute('id', 'creatorName');

        creatorName.textContent = creator.getName();

        source.appendChild(creatorName);
        footerCard2.appendChild(source);
    }

    const arr = [
        new Source('Louis Hansel, Unsplash'),
        new Source('Dylan Nolte, Unsplash'),
        new Source('Eiliv Aceron, Unsplash'),
        new Source('Icons from Flaticon')
    ]

    footerCard1.appendChild(restoNameF);
    footerCard1.appendChild(leafImgF);
    footerCard1.appendChild(me);

    footerCard2.appendChild(srcTitle);

    footerCard3.appendChild(info);
    footerCard3.appendChild(repo);

    for (let i = 0; i < arr.length; i++) {
        imageSource(arr[i])
    }

    footerWrap.appendChild(footerCard1);
    footerWrap.appendChild(footerCard2);
    footerWrap.appendChild(footerCard3);

    content.appendChild(footerWrap);
}

class Source {
    constructor(name) {
        this.name = name;
    }

    getName = () => this.name;
}