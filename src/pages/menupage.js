import breakfastMenu from "./menu-sub/breakfast";
import mainMenu from "./menu-sub/mainmenu";
import snacksMenu from "./menu-sub/snack";
import beveragesMenu from "./menu-sub/beverages";
import { contactNav } from "./navbarload";

const content = document.querySelector("#content");

export default function menuPage() {
  const menupage = document.createElement("div");
  const menuTitle = document.createElement("h1");
  const titleDesc = document.createElement("p");
  const titleWrap = document.createElement("div");
  const menuCategory = document.createElement("div");
  const menuDiv = document.createElement("div");
  const breakfastNav = document.createElement("li");
  const mainNav = document.createElement("li");
  const snacksNav = document.createElement("li");
  const drinkNav = document.createElement("li");
  const breakfastLink = document.createElement("a");
  const mainLink = document.createElement("a");
  const snacksLink = document.createElement("a");
  const drinkLink = document.createElement("a");

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

  menupage.setAttribute("class", "menuPage");
  titleWrap.setAttribute("id", "titleWrap");
  menuTitle.setAttribute("id", "menuTitle");
  titleDesc.setAttribute("id", "titleDesc");
  menuCategory.setAttribute("id", "menuCategory");
  menuDiv.setAttribute("id", "menuDiv");

  menuTitle.textContent = "MENU";
  titleDesc.innerHTML =
    `For delivery in central areas, minimum order of $30 with an additional delivery fee (start from $3). <span>Free delivery for orders above $80. </span>Please WhatsApp us at least three hours before delivery time. <br/><br/>For further information about ingredients, orders, delivery, or anything, don\'t hesitate to ` +
    "<a href='#contact' id='ctcMenu'>contact us.</a>";
  breakfastLink.textContent = "All Day Breakfast";
  mainLink.textContent = "Main";
  snacksLink.textContent = "Snacks";
  drinkLink.textContent = "Beverages";

  menupage.appendChild(titleWrap);
  menupage.appendChild(menuCategory);
  menupage.appendChild(menuDiv);

  content.appendChild(menupage);

  /* SUB-MENU FUCTIONALITIES */

  const activeMealNav = document.querySelectorAll("#menuCategory a");

  activeMealNav.forEach((mealNav) => {
    mealNav.addEventListener("click", (e) => {
      activeMealNav.forEach((unactive) => {
        e.target.style.color = "var(--color-4)";
        unactive.style.color = "var(--color-6)";
      });
    });
  });

  function breakfastLoad() {
    breakfastLink.style.color = "var(--color-4)";
    menuDiv.appendChild(breakfastMenu());
  }

  breakfastLoad();

  breakfastLink.addEventListener("click", () => {
    menuDiv.innerHTML = "";
    menuDiv.appendChild(breakfastMenu());
  });

  mainLink.addEventListener("click", () => {
    menuDiv.innerHTML = "";
    menuDiv.appendChild(mainMenu());
  });

  snacksLink.addEventListener("click", () => {
    menuDiv.innerHTML = "";
    menuDiv.appendChild(snacksMenu());
  });

  drinkLink.addEventListener("click", () => {
    drinkLink.style.color = "var(--color-4)";
    menuDiv.innerHTML = "";
    menuDiv.appendChild(beveragesMenu());
  });

  const contactUs = document.querySelector("#ctcMenu");

  contactUs.onclick = (e) => {
    e.preventDefault();
    contactNav.click();
  };
}
