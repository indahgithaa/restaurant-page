import css from './style.css';
import navbarLoad from "./pages/navbarload";
import homePage from "./pages/homepage";
import { homeNav } from './pages/navbarload';
import footerLoad from "./pages/footerLoad";

window.onload = () => {
    navbarLoad();
    homeNav.style.color = 'var(--color-3)';
    homePage();
    footerLoad();
}