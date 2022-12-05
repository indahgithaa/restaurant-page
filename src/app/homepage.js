import secondImage from '../assets/food1-fix.png'

export default function homePage() {
    const content = document.querySelector('#content');

    const homepage = document.createElement('div')
    homepage.setAttribute('class', 'homepage');

    /* FIRST PAGE */
    const welcomingWrap = document.createElement('div');
    const welcoming = document.createElement('h1');
    const exploreBtn = document.createElement('button');

    exploreBtn.setAttribute('id', 'expBtn');
    welcomingWrap.setAttribute('id', 'welcomingWrap');
    welcoming.setAttribute('id', 'welcoming');

    welcoming.innerHTML = 'The Goodness of <span> Real Foods </span> for Your Healthier Life';
    exploreBtn.textContent = 'Explore Our Menu'

    welcomingWrap.appendChild(welcoming);
    welcomingWrap.appendChild(exploreBtn);

    /* SECOND PAGE */
    const secondHome = document.createElement('div');
    const secondTitle = document.createElement('h1');
    const secondCaptions = document.createElement('p');
    const captionWrap = document.createElement('div');
    const secondImg = document.createElement('img');

    secondHome.setAttribute('class', 'secondHome');
    secondImg.setAttribute('src', secondImage);
    secondImg.setAttribute('id', 'secondImg');
    secondTitle.setAttribute('id', 'secondTitle');
    captionWrap.setAttribute('id', 'captionWrap');

    secondTitle.innerHTML = 'Back to the <span>Wholeness</span>';
    secondCaptions.innerHTML = 'The food we put in our body can impacts our health and well-being. It plays a big role in our lives. <br/><br/> We\'re committed to promoting healthy diets based on whole foods with balanced nutritions for your body and supporting you to maintain your healthy lifestyle.'

    captionWrap.appendChild(secondTitle);
    captionWrap.appendChild(secondCaptions);
    secondHome.appendChild(captionWrap);
    secondHome.appendChild(secondImg);

    /* THIRD PAGE */
    const thirdHome = document.createElement('div');
    const thirdTitle = document.createElement('h1');

    thirdHome.setAttribute('class', 'thirdHome');
    thirdTitle.setAttribute('id', 'thirdTitle');

    thirdTitle.textContent = 'What We Offer'

    thirdHome.appendChild(thirdTitle);

    homepage.appendChild(welcomingWrap);
    homepage.appendChild(secondHome);
    homepage.appendChild(thirdHome);

    content.appendChild(homepage);
}

class Offer {
    constructor(icon, headings, details) {
        this.icon = icon;
        this.headings = headings;
        this.details = details;
    }

    getIcon = () => this.icon;
    getHeadings = () => this.headings;
    getDetails = () => this.details;
}