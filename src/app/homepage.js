import secondImage from '../assets/food1-fix.png'
import icon1 from '../assets/checked.png';
import icon2 from '../assets/knife-and-fork.png';
import icon3 from '../assets/lettuce.png';
import icon4 from '../assets/vegetables.png';

const content = document.querySelector('#content');

export default function homePage() {

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
    const cardWrap = document.createElement('div');

    thirdHome.setAttribute('class', 'thirdHome');
    thirdTitle.setAttribute('id', 'thirdTitle');
    cardWrap.setAttribute('id', 'cardWrap');

    thirdTitle.textContent = 'What We Offer'

    thirdHome.appendChild(thirdTitle);

    function createCard(offer) {
        const card = document.createElement('div');
        const icon = document.createElement('img');
        const headings = document.createElement('h1');
        const details = document.createElement('p');

        card.setAttribute('id', 'card');
        icon.setAttribute('id', 'icon');
        headings.setAttribute('id', 'headings');
        details.setAttribute('id', 'details')
    
        icon.src = offer.getIcon();
        headings.textContent = offer.getHeadings();
        details.textContent = offer.getDetails();
    
        card.appendChild(icon);
        card.appendChild(headings);
        card.appendChild(details);

        cardWrap.appendChild(card)
        thirdHome.appendChild(cardWrap);
    }

    const arr = [
        new Offer(icon4, '100% Whole Foods', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(icon3, 'Traditional Ingredients', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(icon1, 'Customable Menu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(icon2, 'All Diets-Friendly', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. ')
    ];

    for (let i = 0; i < arr.length; i++) {
        createCard(arr[i]);
    }

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