import css from './style.css';
import navbarLoad from "./pages/navbarload";
import homePage from "./pages/homepage";
import footerLoad from "./pages/footerLoad";

window.onload = () => {
    navbarLoad();
    homePage();
    footerLoad();
}