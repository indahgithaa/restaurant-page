/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/pages/contactpage.js":
/*!**********************************!*\
  !*** ./src/pages/contactpage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
    
}

/***/ }),

/***/ "./src/pages/footerLoad.js":
/*!*********************************!*\
  !*** ./src/pages/footerLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerLoad)
/* harmony export */ });
/* harmony import */ var _assets_leaf_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/leaf.png */ "./src/assets/leaf.png");


const content = document.querySelector('#content');

const restoNameF = document.createElement('h1');
const leafImgF = document.createElement('img');
restoNameF.setAttribute('id', 'restonameF');
leafImgF.setAttribute('id', 'leafF');
restoNameF.textContent = 'PureHut';
leafImgF.src =  _assets_leaf_png__WEBPACK_IMPORTED_MODULE_0__;

function footerLoad() {
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

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _assets_food1_fix_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/food1-fix.png */ "./src/assets/food1-fix.png");
/* harmony import */ var _assets_checked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/checked.png */ "./src/assets/checked.png");
/* harmony import */ var _assets_knife_and_fork_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/knife-and-fork.png */ "./src/assets/knife-and-fork.png");
/* harmony import */ var _assets_lettuce_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/lettuce.png */ "./src/assets/lettuce.png");
/* harmony import */ var _assets_vegetables_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/vegetables.png */ "./src/assets/vegetables.png");
/* harmony import */ var _assets_pumpkin_pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/pumpkin-pancakes.jpg */ "./src/assets/pumpkin-pancakes.jpg");
/* harmony import */ var _assets_tomyum_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/tomyum.jpg */ "./src/assets/tomyum.jpg");
/* harmony import */ var _assets_vege_caponata_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/vege-caponata.jpg */ "./src/assets/vege-caponata.jpg");









const content = document.querySelector('#content');

function homePage() {

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
    secondImg.setAttribute('src', _assets_food1_fix_png__WEBPACK_IMPORTED_MODULE_0__);
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

    thirdTitle.innerHTML = 'WHAT WE <span> OFFER </span>'

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
        new Offer(_assets_vegetables_png__WEBPACK_IMPORTED_MODULE_4__, '100% Whole Foods', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(_assets_lettuce_png__WEBPACK_IMPORTED_MODULE_3__, 'Homemade Ingredients', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(_assets_checked_png__WEBPACK_IMPORTED_MODULE_1__, 'Customable Menu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. '),
        new Offer(_assets_knife_and_fork_png__WEBPACK_IMPORTED_MODULE_2__, 'All Diets-Friendly', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut magna vitae libero sagittis elementum. Phasellus ac molestie nibh. Aliquam ultricies magna a mattis pretium. Nullam in ultrices erat. Nulla a tristique purus. ')
    ];

    for (let i = 0; i < arr.length; i++) {
        createCard(arr[i]);
    }

    /* FOURTH PAGE */
    const fourtHome = document.createElement('div');
    const fourthTitle = document.createElement('h1');
    const foodCardWrap = document.createElement('div');

    fourtHome.setAttribute('class', 'fourthHome');
    fourthTitle.setAttribute('id', 'fourthTitle');

    fourthTitle.innerHTML = 'OUR <span> STAR </span> MENU';

    fourtHome.appendChild(fourthTitle);

    function createFoodCard(menu) {
        const foodCard = document.createElement('div');
        const foodPic = document.createElement('img');
        const foodName = document.createElement('p');
        const foodPrice = document.createElement('p');

        foodCardWrap.setAttribute('id', 'foodCardWrap');
        foodCard.setAttribute('id', 'foodCard');
        foodPic.setAttribute('id', 'foodPic');
        foodName.setAttribute('id', 'foodName');
        foodPrice.setAttribute('id', 'foodPrice');

        foodPic.src = menu.getPic();
        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();

        foodCard.appendChild(foodPic);
        foodCard.appendChild(foodName);
        foodCard.appendChild(foodPrice);
        foodCardWrap.appendChild(foodCard);
        fourtHome.appendChild(foodCardWrap);
    }

    const foodArr = [
        new StarMenu(_assets_pumpkin_pancakes_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Sweet Pumpkin Pancakes', '$12.30'),
        new StarMenu(_assets_tomyum_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Tom Yum Vermicelli', '$11.20'),
        new StarMenu(_assets_vege_caponata_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Vegetable Caponata', '$15.80'),
    ]

    for (let i = 0; i < foodArr.length; i++) {
        createFoodCard(foodArr[i]);
    }

    homepage.appendChild(welcomingWrap);
    homepage.appendChild(secondHome);
    homepage.appendChild(thirdHome);
    homepage.appendChild(fourtHome);

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

class StarMenu {
    constructor (pic, foodName, price) {
        this.pic = pic;
        this.foodName = foodName;
        this.price = price;
    }

    getPic = () => this.pic;
    getName = () => this.foodName;
    getPrice = () => this.price;
}

/***/ }),

/***/ "./src/pages/menu-sub/beverages.js":
/*!*****************************************!*\
  !*** ./src/pages/menu-sub/beverages.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ beveragesMenu)
/* harmony export */ });
function beveragesMenu() {
    const beveragePage = document.createElement('div');
    const coffeeDiv = document.createElement('div');
    const juiceDiv = document.createElement('div');
    const teaDiv = document.createElement('div');

    const coffeeTitle = document.createElement('h2');
    const juiceTitle = document.createElement('h2');
    const teaTitle = document.createElement('h2');

    coffeeTitle.textContent = 'Coffee and Chocolate';
    teaTitle.textContent = 'Organic Tea';
    juiceTitle.textContent = 'Cold-Pressed Juice';

    coffeeDiv.appendChild(coffeeTitle);
    juiceDiv.appendChild(juiceTitle);
    teaDiv.appendChild(teaTitle);

    const coffeeArr = [
        new Beverages('Espresso', '$4.30'),
        new Beverages('Hot/Iced Latte', '$6.50'),
        new Beverages('Hot Chocolate', '$7.20'),
        new Beverages('Cappuccino', '$6.50'),
    ]

    const teaArr = [
        new Beverages('Black Tea', '$4.50'),
        new Beverages('Green Tea', '$5.00'),
        new Beverages('Dandelion', '$7.00'),
        new Beverages('Chamomile', '$7.00'),
        new Beverages('Earl Grey', '$7.00'),
    ]

    const juiceArr = [
        new Beverages('Apple', '$8.50'),
        new Beverages('Orange', '$8.00'),
        new Beverages('Carrot', '$11.00'),
        new Beverages('Carrot, Orange, Pineapple', '$11.50'),
        new Beverages('Green Vegetable Mix', '$10.00'),
    ]
    
    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();

        menuDiv.appendChild(foodName);
        menuDiv.appendChild(foodPrice);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        menuDiv.setAttribute('id', 'subMenuDiv');

        menuDiv.style.marginBottom = '10px';
        foodPrice.style.marginTop = '0';

        return menuDiv;
    }

    for (let i = 0; i < coffeeArr.length; i++) {
        coffeeDiv.appendChild(createMenu(coffeeArr[i]));
    }

    for (let i = 0; i < teaArr.length; i++) {
        teaDiv.appendChild(createMenu(teaArr[i]));
    }

    for (let i = 0; i < juiceArr.length; i++) {
        juiceDiv.appendChild(createMenu(juiceArr[i]));
    }

    beveragePage.appendChild(coffeeDiv);
    beveragePage.appendChild(teaDiv);
    beveragePage.appendChild(juiceDiv);

    beveragePage.classList.add('beveragePage')

    return beveragePage;

}

class Beverages {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName = () => this.name;
    getPrice = () => this.price;
}

/***/ }),

/***/ "./src/pages/menu-sub/breakfast.js":
/*!*****************************************!*\
  !*** ./src/pages/menu-sub/breakfast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ breakfastMenu)
/* harmony export */ });
function breakfastMenu() {
    const breakfastDiv = document.createElement('div');

    breakfastDiv.setAttribute('class', ' breakfastDiv');
    
    const breakfastArr = [
        new Breakfast('Sweet Pumpkin Pancakes', 'Naturally sweetened pancakes made with mashed organic pumpkin, cinnamon, and ginger. Served with fresh berries and honey. <br/><br/>Vegan, Gluten-free, Contains soy', '$12.30'),
        new Breakfast('Raspberry Chia English Muffin', 'Fluffy and low-sugar English muffin dotted with fresh raspberries and crunchy chia seeds. Served with homemade berry jam. <br/><br/>Gluten-free, Contains egg', '$11.00'),
        new Breakfast('Guacamole', 'Made fresh with avocadoes, onions, tomatoes, cilantro, and jalapeno. Served with lime juice. <br/><br/>Vegan, Request no onion', '$12.60'),
        new Breakfast('Sourdough Toast', 'Available topping: <ul><li>Homemade tropical fruits jam</li><li>Unsweetened almond butter</li><li>unsweetened peanut butter</ul>', '$2.00')
    ]

    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');
        const foodDesc = document.createElement('p');
        const foodCardLeft = document.createElement('div');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();
        foodDesc.innerHTML = menu.getDesc();

        foodCardLeft.appendChild(foodName);
        foodCardLeft.appendChild(foodPrice);
        menuDiv.appendChild(foodCardLeft);
        menuDiv.appendChild(foodDesc);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        foodDesc.setAttribute('id', 'foodMenuDesc');
        menuDiv.setAttribute('id', 'subMenuDiv');
        
        breakfastDiv.appendChild(menuDiv);
    }

    for (let i = 0; i < breakfastArr.length; i++) {
        createMenu(breakfastArr[i]);
    }

    return breakfastDiv;
}

class Breakfast {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
}

/***/ }),

/***/ "./src/pages/menu-sub/mainmenu.js":
/*!****************************************!*\
  !*** ./src/pages/menu-sub/mainmenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainMenu)
/* harmony export */ });
function mainMenu() {
    const mainMenuDiv = document.createElement('div');

    mainMenuDiv.setAttribute('class', ' subMenuDiv');
    
    const mainMenuArr = [
        new MainMenu('Tom Yum Vermicelli (soup/stir-fried)', 'Gluten-free brown rice vermicelli cooked with Thai tom yum homemade seasonings. Available options: soup and stir-fried. <br/><br/>Gluten-free, Vegan, Contains soy', '$11.20'),
        new MainMenu('Vegetable Caponata', 'Slow cooked caponata with arugula and tomato salad, tossed with a creamy vegan Caesar dressing. <br/><br/> Vegan, Contains nuts, Request for no garlic and onions', '$15.80'),
        new MainMenu('Vegetable Urap', 'Traditional steamed vegetables (bean sprouts, yardlong bean, spinach) mixed with Indonesian grated coconut seasonings. <br/><br/> Vegan', '$9.80'),
        new MainMenu('Mushroom Aglio Olio', 'Pasta cooked with fresh garlic, oregano, basil, and parsley. Dressed up with sautéed mushrooms.<br/><br/> Vegan', '$11.30'),
        new MainMenu('Kombu Shiitake Soup', 'A savory and nutritious soup made with kombu seaweed, dried shiitake mushrooms, mirin, shoyu, and ginger.<br/><br/> Vegan', '$12.80'),
        new MainMenu('Egg and Potato Salad', 'Pan-fried potatoes with cherry tomatoes, fresh herbs, and soft-boiled egg. Served with vegan permesan cheese and honey mustard dressing.<br/><br/>Contains egg', '$13.00'),
        new MainMenu('Lemon-Herb Portobello Mushrooms', 'Grilled portobello mushroom in olive oil, parsley, and basil. Served with herbs and lemon juice.<br/><br/> Vegan', '$14.30'),
        new MainMenu('Tomato Risotto', 'Creamy risotto made with fresh tomatoes and brown rice. Shimmered in vegetable stock with fresh herbs. <br/><br/> Vegan', '$13.20'),
    ]

    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');
        const foodDesc = document.createElement('p');
        const foodCardLeft = document.createElement('div');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();
        foodDesc.innerHTML = menu.getDesc();

        foodCardLeft.appendChild(foodName);
        foodCardLeft.appendChild(foodPrice);
        menuDiv.appendChild(foodCardLeft);
        menuDiv.appendChild(foodDesc);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        foodDesc.setAttribute('id', 'foodMenuDesc');
        menuDiv.setAttribute('id', 'subMenuDiv');
        
        mainMenuDiv.appendChild(menuDiv);
    }

    for (let i = 0; i < mainMenuArr.length; i++) {
        createMenu(mainMenuArr[i]);
    }

    return mainMenuDiv;
}

class MainMenu {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
}

/***/ }),

/***/ "./src/pages/menu-sub/snack.js":
/*!*************************************!*\
  !*** ./src/pages/menu-sub/snack.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ snacksMenu)
/* harmony export */ });
function snacksMenu() {
    const snacksDiv = document.createElement('div');

    snacksDiv.setAttribute('class', ' breakfastDiv');
    
    const snacksArr = [
        new Snacks('Fruit Rojak', 'Fresh tropical fruits served with a homemade sweet, spicy, and sour Indonesian rojak sauce. <br/><br/>Vegan', '$7.50'),
        new Snacks('Dumplings (fried/steamed)', '8pcs of freshly steamed or golden pan-fried dumplings filled with soft tofu and vegetables. Drizzled with sesame oil. <br/><br/>Vegan, Contains nuts', '$10.00'),
        new Snacks('Fried Spring Rolls', '2pcs of golden fried homemade rolls filled with carrots, mushrooms, bean sprouts, tofu, and turnips. Served with sweet and tangy classic Vietnamese dipping sauce. <br/><br/>Contains soy, Vegan', '$6.00'),
        new Snacks('Mixed Fruits Pie', 'A slice of soft and naturally sweetened pie made from self-raising flour, topped with homemade berry jam and mixed seasonal fruits. <br/><br/>Gluten-free, Contains egg', '$6.00'),
    ]

    function createMenu(menu) {
        const menuDiv = document.createElement('div');
        const foodName = document.createElement('h3');
        const foodPrice = document.createElement('p');
        const foodDesc = document.createElement('p');
        const foodCardLeft = document.createElement('div');

        foodName.textContent = menu.getName();
        foodPrice.textContent = menu.getPrice();
        foodDesc.innerHTML = menu.getDesc();

        foodCardLeft.appendChild(foodName);
        foodCardLeft.appendChild(foodPrice);
        menuDiv.appendChild(foodCardLeft);
        menuDiv.appendChild(foodDesc);

        foodName.setAttribute('id', 'foodMenuName');
        foodPrice.setAttribute('id', 'foodMenuPrice');
        foodDesc.setAttribute('id', 'foodMenuDesc');
        menuDiv.setAttribute('id', 'subMenuDiv');
        
        snacksDiv.appendChild(menuDiv);
    }

    for (let i = 0; i < snacksArr.length; i++) {
        createMenu(snacksArr[i]);
    }

    return snacksDiv;
}

class Snacks {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    getName = () => this.name;
    getDesc = () => this.description;
    getPrice = () => this.price;
}

/***/ }),

/***/ "./src/pages/menupage.js":
/*!*******************************!*\
  !*** ./src/pages/menupage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _menu_sub_breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-sub/breakfast */ "./src/pages/menu-sub/breakfast.js");
/* harmony import */ var _menu_sub_mainmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-sub/mainmenu */ "./src/pages/menu-sub/mainmenu.js");
/* harmony import */ var _menu_sub_snack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-sub/snack */ "./src/pages/menu-sub/snack.js");
/* harmony import */ var _menu_sub_beverages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-sub/beverages */ "./src/pages/menu-sub/beverages.js");





const content = document.querySelector('#content')

function menuPage() {
    const menupage = document.createElement('div'); 
    const menuTitle = document.createElement('h1');
    const titleDesc = document.createElement('p');
    const titleWrap = document.createElement('div');
    const menuCategory = document.createElement('div');
    const menuDiv = document.createElement('div');
    const breakfastNav = document.createElement('li');
    const mainNav = document.createElement('li');
    const snacksNav = document.createElement('li');
    const drinkNav = document.createElement('li');
    const breakfastLink = document.createElement('a');
    const mainLink = document.createElement('a');
    const snacksLink = document.createElement('a');
    const drinkLink = document.createElement('a');

    breakfastNav.appendChild(breakfastLink);
    mainNav.appendChild(mainLink);
    snacksNav.appendChild(snacksLink);
    drinkNav.appendChild(drinkLink);

    menuCategory.appendChild(breakfastNav);
    menuCategory.appendChild(mainNav);
    menuCategory.appendChild(snacksNav);
    menuCategory.appendChild(drinkNav);

    titleWrap.appendChild(menuTitle);
    titleWrap.appendChild(titleDesc);

    menupage.setAttribute('class', 'menuPage');
    titleWrap.setAttribute('id', 'titleWrap');
    menuTitle.setAttribute('id', 'menuTitle');
    titleDesc.setAttribute('id', 'titleDesc');
    menuCategory.setAttribute('id', 'menuCategory');
    menuDiv.setAttribute('id', 'menuDiv');

    menuTitle.textContent = 'MENU';
    titleDesc.innerHTML = 'For delivery in central areas, minimum order $50 with delivery fee applicable. <span>Free delivery for orders $100 or above. </span><br/><br/>For further information about ingredients, orders, delivery, or anything, don\'t hesitate to contact us.';
    breakfastLink.textContent = 'All Day Breakfast';
    mainLink.textContent = 'Main';
    snacksLink.textContent = 'Snacks';
    drinkLink.textContent = 'Beverages';

    menupage.appendChild(titleWrap);
    menupage.appendChild(menuCategory);
    menupage.appendChild(menuDiv);

    content.appendChild(menupage);

    /* SUB-MENU FUCTIONALITIES */

    const activeMealNav = document.querySelectorAll('#menuCategory a');

    activeMealNav.forEach((mealNav) => {
        mealNav.addEventListener('click', (e) => {
            activeMealNav.forEach((unactive) => {
                e.target.style.color = 'var(--color-4)';
                unactive.style.color = 'var(--color-6)';
            })
        })
    })

    function breakfastLoad() {
        breakfastLink.style.color = 'var(--color-4)';
        menuDiv.appendChild((0,_menu_sub_breakfast__WEBPACK_IMPORTED_MODULE_0__["default"])());
    }

    breakfastLoad();

    breakfastLink.addEventListener('click', () => {
        menuDiv.innerHTML = '';
        menuDiv.appendChild((0,_menu_sub_breakfast__WEBPACK_IMPORTED_MODULE_0__["default"])());
    })

    mainLink.addEventListener('click', () => {
        menuDiv.innerHTML = '';
        menuDiv.appendChild((0,_menu_sub_mainmenu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    })

    snacksLink.addEventListener('click', () => {
        menuDiv.innerHTML = '';
        menuDiv.appendChild((0,_menu_sub_snack__WEBPACK_IMPORTED_MODULE_2__["default"])());
    })

    drinkLink.addEventListener('click', () => {
        drinkLink.style.color = 'var(--color-4)';
        menuDiv.innerHTML = '';
        menuDiv.appendChild((0,_menu_sub_beverages__WEBPACK_IMPORTED_MODULE_3__["default"])());
    })
}

/***/ }),

/***/ "./src/pages/promopage.js":
/*!********************************!*\
  !*** ./src/pages/promopage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ promoPage)
/* harmony export */ });
function promoPage() {

}

/***/ }),

/***/ "./src/assets/checked.png":
/*!********************************!*\
  !*** ./src/assets/checked.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/checked";

/***/ }),

/***/ "./src/assets/food1-fix.png":
/*!**********************************!*\
  !*** ./src/assets/food1-fix.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/food1-fix";

/***/ }),

/***/ "./src/assets/knife-and-fork.png":
/*!***************************************!*\
  !*** ./src/assets/knife-and-fork.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/knife-and-fork";

/***/ }),

/***/ "./src/assets/leaf.png":
/*!*****************************!*\
  !*** ./src/assets/leaf.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/leaf";

/***/ }),

/***/ "./src/assets/lettuce.png":
/*!********************************!*\
  !*** ./src/assets/lettuce.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lettuce";

/***/ }),

/***/ "./src/assets/pumpkin-pancakes.jpg":
/*!*****************************************!*\
  !*** ./src/assets/pumpkin-pancakes.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pumpkin-pancakes";

/***/ }),

/***/ "./src/assets/tomyum.jpg":
/*!*******************************!*\
  !*** ./src/assets/tomyum.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/tomyum";

/***/ }),

/***/ "./src/assets/vege-caponata.jpg":
/*!**************************************!*\
  !*** ./src/assets/vege-caponata.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vege-caponata";

/***/ }),

/***/ "./src/assets/vegetables.png":
/*!***********************************!*\
  !*** ./src/assets/vegetables.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vegetables";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
/* harmony import */ var _pages_menupage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menupage */ "./src/pages/menupage.js");
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _pages_contactpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contactpage */ "./src/pages/contactpage.js");
/* harmony import */ var _pages_promopage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/promopage */ "./src/pages/promopage.js");
/* harmony import */ var _pages_footerLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/footerLoad */ "./src/pages/footerLoad.js");
/* harmony import */ var _assets_leaf_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/leaf.png */ "./src/assets/leaf.png");









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
leafImg.src = _assets_leaf_png__WEBPACK_IMPORTED_MODULE_6__;

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
        content.innerHTML = '';
        navbarLoad();
        (0,_pages_menupage__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_pages_footerLoad__WEBPACK_IMPORTED_MODULE_5__["default"])();
    })

    home.addEventListener('click', () => {
        content.innerHTML = '';
        navbarLoad();
        (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_pages_footerLoad__WEBPACK_IMPORTED_MODULE_5__["default"])();
    })

    contact.addEventListener('click', () => {
        content.innerHTML = '';
        navbarLoad();
    })

    promo.addEventListener('click', (e) => {
        e.target.classList.add('active');
        content.innerHTML = '';
        navbarLoad();
    })
}

window.onload = () => {
    navbarLoad();
    (0,_pages_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pages_footerLoad__WEBPACK_IMPORTED_MODULE_5__["default"])();
}
})();

/******/ })()
;